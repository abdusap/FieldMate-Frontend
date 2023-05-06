import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Admin/Sidebar";


function AdminLayout() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('admin')
    navigate('/admin/login')
  }
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex text-black  h-screen flex-col w-screen">
        <div className="flex bg-black  h-fit p-3 justify-between  ">
          <h1 className="font-bold text-white text-xl">FieldMate</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white cursor-pointer"
            onClick={handleLogout}
          >
            <title>Logout</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </div>
        <div className="p-3 text-2xl md:text-3xl bg-slate-200 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
