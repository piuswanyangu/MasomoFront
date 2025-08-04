import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center p-3">
      {/* Error code */}
      <h1 className="display-1 fw-bold text-primary mb-o">404</h1>
      {/* message */}
      <p className="lead mt-2 mb-4 text-muted">OOPS! PAGE NOT FOUND 🤦‍♂️😒</p>
      {/* Declare links to navigate the user back home */}
      <div className="d-flex gap-3 flex-wrap">
        <button
          className="btn btn-outline-primary btn-sm d-flex align-items-center"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <Link to="/" className="btn btn-outline-primary btn-sm d-flex align-items-center"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
