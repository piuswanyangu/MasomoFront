import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const DashboardNavbar = () => {

    // get the logged in user and the log out function by use of the usecontext hook inside of AuthContext
    const {user,logout} = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm px-4 py-2 mb-3 rounded">
        <div className="container-fluid d-flex justify-contente-between align-items-center">
            <span className="navbar-brand fw-bold text-success fs-4">
                Masomo School
            </span>
            <div className="d-flex align-items-center">
                <span className='me-m text-info'>
                    <strong>{user?.name}</strong>
                    <small className='text-muted'>({user?.role})</small>
                </span>
                <button onClick={logout} className='btn btn-small btn-outline-danger d-flex align-items-center'>Logout</button>
            </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar