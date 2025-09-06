import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const ClassEdit = () => {
    // use a hook to get the data from the previous component
    const{state}=useLocation()

    // get the selected class
    const selectedClass = state?.classData
    // console.log('Selected Data', selectedClass)

    // console.log('the data that came from previous componet ', state)

    // declare hooks
    const[name,setName] = useState('')
    const[gradeLevel, setGradeLevel]= useState('')
    const[classYear, setClassYear]= useState('')
    const[teachers, setTeachers]=useState([]);
    const[selectedTeacherId, setSelectedTeacherId] = useState('')
   

  return (
    <div className='container mt-2'>
        {/* below is the toast */}
        <ToastContainer position='top-right' autoClose={3000}/>

         <nav className='mb-3 ' aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className="breadcrumb-item fw-bold"> <Link to="/admin-dashboard">Dashboard</Link></li>
          <li className="breadcrumb-item fw-bold" arial-current='page'><Link to={'/admin-dashboard/classes'}>Classes</Link></li>
           <li className="breadcrumb-item active" arial-current='page'>Edit Class</li>
        </ol>
       </nav>

       <div className="card p4 shadow-sm mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-4 text-success">
               <i class="bi bi-pencil-square"></i>  Edit class
            </h5>

            <Link className='btn btn-success' to='/admin-dashboard/classes'> <i class="bi bi-arrow-left-square-fill"></i> Back</Link>
        </div>
        <form >
            <div className="row">
                <div className="col-md-6 m-3">
                    {/* name */}
                    <input type="text" className='form-control'
                     placeholder='Class Name'  required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}/> 
                </div>
                    
                    {/* grade level */}
                 <div className="col-md-6 m-3">
                    <input type="text"  className='form-control'
                     placeholder='Grade Level'  required
                      value={gradeLevel}
                      onChange={(e)=>setGradeLevel(e.target.value)} />
                </div>
                    {/* classyear */}
                <div className="col-md-6 m-3">
                    <input type="number"  className='form-control'
                     placeholder='Class year'  required
                      value={classYear}
                      onChange={(e)=>setClassYear(e.target.value)} /> 
                </div>
            </div>
            <button className='btn btn-success'>Update Class</button>
            <br />
        </form>
       </div>
      
    </div>
  )
}

export default ClassEdit
