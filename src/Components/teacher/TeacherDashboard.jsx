import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';

const TeacherDashboard = () => {
     // get the logged in user and the log out function by use of the usecontext hook inside of AuthContext
      const {user,logout} = useContext(AuthContext)

  return (
    <div>
      <h1>Welcome to teachers dashboard</h1>
      <button
        onClick={logout}
        className="btn btn-small btn-outline-danger d-flex align-items-center"
      >
        Logout
      </button>
    </div>
  );
}

export default TeacherDashboard