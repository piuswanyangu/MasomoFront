import { Toast } from 'bootstrap/dist/js/bootstrap.min';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Classes = () => {
  // hooks
  const navigate = useNavigate()

    const {token} = useContext(AuthContext)
    // declare a hok that will store the fetched classes from API
    const [classes, setClasses] =useState([])
    const authHeader = {
      headers : {Authorization: `Bearer ${token}`}
    }
    
    // function to fetch classes
    const fetchClasses = async () => {
      try {
        toast.info('Loading classes please wait...')
        const res = await axios.get('https://kindergartenapi-uq4o.onrender.com/api/classrooms/', authHeader)
        setClasses(res.data);
        toast.dismiss()
       
      } catch (error) {
        toast.dismiss()
        toast.error(error.response?.data.message || 'Failed to load classes')
      }
    }

    useEffect(()=>{fetchClasses();

    } ,[]);

    // function to handle the deleting class
    const handleDelete = async (id) => {
      if(window.confirm('Delete this class?')){
        try {
          toast.warning('Deleting class. Just a moment...')
          await axios.delete(`https://kindergartenapi-uq4o.onrender.com/api/classrooms/${id}`,authHeader)
          fetchClasses()
          
        } catch (error) {
          toast.dismiss()
          toast.error(error.response?.data?.message)
          
        }
      }
    }
    // below function willl handle edit fuctionalit of classes
    const handleEdit = (classData)=>{
      navigate('/admin-dashboard/classes/edit',{state :{classData}})
    }
//  console.log('The data from api for classes is', classes)
  return (
    <div className='container mt-2'>
      {/* toast for showing soe messages  */}
      <ToastContainer position='top-right' autoClose={3000}/>
       <nav className='mb-3 ' aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className="breadcrumb-item fw-bold"> <Link to="/admin-dashboard">Dashboard</Link></li>
          <li className="breadcrumb-item acive" arial-current='page'>Classes</li>
        </ol>
       </nav>

       <div className="card p-4 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className='text-success mb-0'>
            <i class="bi bi-buildings"></i> Classes list
          </h5>
          <button className="btn btn-success" onClick={()=>navigate('/admin-dashboard/classes/add')}>
            <i class="bi bi-plus-lg fw-bold"></i>  Add class
           
          </button>
        </div>
        {/* Bind the content returned by the class API ito a table */}
        <div className="table-responsive">
          {
            classes.length===0?(
              <div className="alert warning text-center mb-0">
                <i class="bi bi-exclamation-diamond-fill"></i>
                <h4>No classes were found</h4>
              </div>
            ): (
              <table className="table table-striped table-hover table-bordered">
                <thead className='table-success'>
                  <tr>
                    <th>#</th>
                    <th>Class Name</th>
                    <th>Grade Level</th>
                    <th>Class Year</th>
                    <th>Teacher</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((cls,index) =>(
                    <tr key={cls._id}>
                      <td>{index + 1}</td>
                      <td>{cls.name}</td>
                      <td>{cls.gradeLevel}</td>
                      <td>{cls.classYear}</td>
                      <td>{cls.teacher?.name || 'N/A'}</td>
                      <td>{cls.teacher?.phone || 'N/A'}</td>
                      <td>
                        <button onClick={()=> handleEdit(cls)} className='btn btn-sm btn-warning me-2'><i class="bi bi-pencil-square"></i></button>
                         <button onClick={()=>handleDelete(cls._id)} className='btn btn-sm btn-danger'><i class="bi bi-trash3"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          }
        </div>
       </div>
    </div>
  )
}

export default Classes