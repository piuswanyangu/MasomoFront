import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';

const RegisterComponent = () => {

    //  create hooks that enable differenyou to capture different states
    const [name,setName]= useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword]= useState('');
    const[secretKey,setSecretKey] = useState("")

    // define three additional hooks to mngae thwe the state
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const[loading,setLoading]=useState('')

    // specify  the url and also declare the use navigate hoook c
    const url = "https://kindergartenapi-uq4o.onrender.com/api/auth";
    const navigate = useNavigate();
    const handleSubmit= async (e) => {
      e.preventDefault();
      setError('')
      setSuccess('')
      setLoading('Please wait as registration is in progress...')
      try {
        
        const data = {name,email,password,secretKey};
        const res= await axios.post(url,data)

        console.log("Registration successfull",res.data)
        setLoading('')
        setSuccess("Registration Successfully! Redirecting to Login Page")

        alert('Registration successfull')
        navigate("/")
      } catch (error) {
        setLoading('');
        setError("Registration Failed Please Try Again")
      }
      
    }
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <form
        onSubmit={handleSubmit}
        className="shadow card p-4 bg-light rounded"
      >
        <h1 className="text-center text-success"> Masomo School</h1>
        <h2 className="text-center mb-4 text-success">Register</h2>
        {error? <div className="alert alert-danger">{error}</div>:null}
        {success?<div className="alert alert-success">{success}</div>:null}
        {loading?<div className="alert alert-info">{loading}</div>:null}
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control mb-3"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {/* {name} */}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="form-control mb-3"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* {email} */}
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* {password} */}
        <input
          type="text"
          placeholder="Enter the secret key"
          className="form-control mb-3"
          required
          onChange={(e) => setSecretKey(e.target.value)}
          value={secretKey}
        />
        {/* {secretKey} */}
        <div className="text-center ">
          <button className="d-grid  btn btn-success" type="submit">
            Register
          </button>
        </div>
        <div className="text-center">
          <p>Already Have an account: <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterComponent