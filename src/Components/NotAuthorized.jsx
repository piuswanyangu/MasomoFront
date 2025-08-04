import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotAuthorized = () => {
    const navigate= useNavigate()
  return (
    <div className='d-flex align-items-center justify-content-center min-vh-100 bg-light px-3'>
        <div className="text-center-p-5 bg-white shadow-sm rounded-4 border max-auto" style={{maxWidth:'500px'}}>
            <h1 className="mt-4 fs-4 fw-bold text-danger">
                Access Denied 😎
            </h1>
            <p className="mt-2 text-muted">
                You do not have permission to view this Page. Kindly go back
            </p>
            <button
          className="btn btn-outline-primary btn-sm d-flex align-items-center"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        </div>
    </div>
  )
}

export default NotAuthorized