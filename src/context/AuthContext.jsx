import { jwtDecode } from 'jwt-decode';
import React, { Children, createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({Children})=>{
    // create the navigate hook
    const navigate = useNavigate();

    // we need to get the token and user details from local storage
    const [token,setToken]= useState(()=> localStorage.getItem('token') || '')
    const [user,setUser]=useState(()=> {
        const storedUser = localStorage.getItem('user');
        return storedUser?JSON.parse(storedUser): null;
    })

    // create function that handles logout
    const logout = useCallback(()=>{
        localStorage.clear();
        setToken('');
        setUser(null)
        navigate('/login')
    },[navigate])

    // check the timer fo token expiration
    useEffect(()=>{
        if(token){
            try {
                const decode = jwtDecode(token);

                // check whether the token expired or not
                const isExpired = decode.exp * 1000 < Date.now();

                if (isExpired) {
                  // if the token is expired invoke the logoutfunction created earlier on
                  logout();
                }
            } catch (error) {
                // maybe the token format is incorrect just redirect to  logout
                logout();
            }
        }
    },[token,logout]);

    return(
        // The  setToken and setUser functions are needed fo login to alert the changes in state
        <AuthContext.Provider value={{token,user,logout,setToken,setUser}}>
            {Children}
        </AuthContext.Provider>

    )
}

// export both auth context and auth provider
export{AuthContext,AuthProvider}