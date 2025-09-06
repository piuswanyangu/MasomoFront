import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = ()=>{
    return(
        <div className='text-white d-flex flex-column p-3' style={{width:'250px',background:'linear-gradient(135deg,rgba(19, 100, 114, 1),rgba(66, 24, 78, 1)'}}>
            <h4 className='text-center mb-4'>Admin Panel</h4>
            {/* the first link direct the admins to the dashboard */}
            <ul className='nav nav-pills flex-column mb-auto'>
                <li className='nav-item'>
                    <NavLink to='/admin-dashboard' end className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold': 'nav-link text-white'}>
                        <i>Dashboard</i>
                    </NavLink>
                </li>
                {/* The second navlink for the students */}
                <li>
                    <NavLink to='/admin-dashboard/Students' className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold':'nav-link text-white'}>
                    <i class="bi bi-people"></i>  Students
                    
                    </NavLink>
                </li>
                {/* The third navlink for parent goes here */}
                <li>
                    <NavLink to='/admin-dashboard/Parents' className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold':'nav-link text-white'}>
                        <i class="bi bi-person"></i> Parents
                    </NavLink>
                </li>
                 {/* The fouth navlink for parent goes here */}
                <li>
                    <NavLink to='/admin-dashboard/Teachers' className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold':'nav-link text-white'}>
                        <i>Teacher</i>
                    </NavLink>
                </li>
               
                
                {/* The fifth navlink */}
                <li>
                    <NavLink to='/admin-dashboard/Classes' className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold':'nav-link text-white'}>
                        <i>Classes</i>
                    </NavLink>
                </li>
                {/* The sixth navlink */}
                <li>
                    <NavLink to='/admin-dashboard/Subjects' className={({isActive})=> isActive? 'nav-link bg-success text-white fw-bold':'nav-link text-white mt-3'}>
                    <i>Home</i>
                    </NavLink>
                </li>

            </ul>
            <hr />
            {/* after the list of the sidebar links have a sign off */}
            <div className="small text-center">
                <span className='text-light'>Copyright &copy; 2025 Masomo</span>
            </div>
        </div>
    )

}
export default Sidebar;