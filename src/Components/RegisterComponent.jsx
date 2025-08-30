import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [county, setCounty] = useState("");
  const [subCounty, setSubCounty] = useState("");
  const [village, setVillage] = useState("");
  const [secretKey, setSecretKey] = useState("");

  // response states
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // navigation
  const navigate = useNavigate();

  // specify the url and also declare the useNavigate hook
  const url = "https://farmproduce.onrender.com/api/user";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Registering you please wait....");

    try {
      
      const data = {
        name,
        email,
        phone,
        password,
        role,
        county,
        subCounty,
        village,
        secretKey,
      };

      // posting data to the backend
      const res = await axios.post(url, data);

      setLoading("");
      setSuccess("Registration Successfull");
      setError("");
      // redirect to login page
      navigate("/login");
    } catch (error) {
      setLoading("");
      setError("Registration Failed, Try Again");
      setSuccess("");
    }
  };
  return (
    <div className="">
      <div className="row mainreg">
        <div className="col-md-6 align-items-center justify-content-center mx-auto">
          {loading}
          {success}
          {error}
          <form onSubmit={handleSubmit} className="p-5 shadow bg-light rounded">
            <h1 className="text-center">Create An Account</h1>
            <p className="text-center text-secondary">
              Join our community and connect directly with the harvest
            </p>
            <br />
            Fullnames <br />
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            Email <br />
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            Phone Number <br />
            <input
              type="phone"
              className="form-control"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            Password <br />
            <input
              type="password"
              className="form-control "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            Role <br />
            <select
              className="form-control"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option>Select Role</option>
              <option>farmer</option>
              <option>buyer</option>
              <option>middleman</option>
            </select>
            <br />
            SecretKey <br />
            <input
              type="text"
              placeholder="For Admin Roles Only"
              className="form-control"
              value={secretKey}
              onChange={(e) => {
                setSecretKey(e.target.value);
              }}
            />
            County <br />
            <input
              type="text"
              className="form-control"
              value={county}
              onChange={(e) => {
                setCounty(e.target.value);
              }}
            />
            Sub-county <br />
            <input
              type="text"
              className="form-control"
              value={subCounty}
              onChange={(e) => {
                setSubCounty(e.target.value);
              }}
            />
            Village <br />
            <input
              type="text"
              className="form-control"
              value={village}
              onChange={(e) => {
                setVillage(e.target.value);
              }}
            />
            <br />
            <p className="text-secondary text-center fw-bold">
              Already have an Account 🐱‍🏍{" "}
              <a href="login" className="text-decoration-none fw-bolder">
                Login
              </a>
            </p>
            <button
              type="submit"
              className="form-control btn btn-success fw-bolder"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
