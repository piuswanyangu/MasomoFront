import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = () => {
// Define the hooks to help you capture different states
const[email,setEmail]=useState('');
const[password,setPassword]=useState("");

// define tghe 3 hooks to capture the state of application
const[loading,setLoading]=useState('');
const[error,setError]=useState('')

const navigate = useNavigate();

// define the url for the api end point
const url = "https://kindergartenapi-uq4o.onrender.com/api/auth/login";

// define a function to handle the submit action 
const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading("Logging in please wait")

    try {
        const data = {email,password}

        const res = await axios.post(url,data);

        const{token,user}=res.data

        // use local storage to store the details
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user))
        // based on user role redirect a person to given role
        if(user.role==='admin'){
            navigate('/admin-dashboard')
        }else if(user.role==='teacher'){
            navigate("/teacher-dashboard");

        }
        else if(user.role==='parent'){
            navigate("/parent-dashboard");
        }else{
            navigate("/")
        }
        
    } catch (error) {
        setLoading("");
        if(error.response && error.response.status === 401){
            setError(error.response.data.message)
        }else{
            setError("Network or server error")
        }
    }
}
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <form
        onSubmit={handleSubmit}
        className="card shadow p-4 bg-light rounded"
      >
        <h2 className="text-center text-success">Masomo School</h2>
        <h3 className="text-center text-success">Login</h3>
        {/* bind the messages */}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        {loading ? <div className="alert alert-info">{loading}</div> : null}
        <label>Email</label>
        <input
          type="email"
          className="form control"
          placeholder="Enter the Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter the Password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <div className=" mb-3">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
        <div className="text-center">
          <p>
            Dont have Account?
            <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent