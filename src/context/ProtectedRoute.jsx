import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({allowedRoles,children}) => {
//   get the user from the authcontext
const {user} = useContext(AuthContext) 

if(!user){
    // this user not loged in
    return <Navigate to="/login" replace />
}
if(!allowedRoles.includes(user.role)){
    // here we are verifying the role of person logged in
    return <Navigate to="/notAuthorized" replace/>
}

return children;


}

export default ProtectedRoute