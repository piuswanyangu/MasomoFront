import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar/>
      <div className="flex-grow-1">
        <DashboardNavbar />
        {/* create a main section for the side bar where routed pages content shall appera  */}
        <main className='p-4 vh-100'>
          {/* we shall use outlet that render matched child routes to the element */}
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
