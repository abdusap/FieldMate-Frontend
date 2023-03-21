import React from "react";
import { Route, Routes } from "react-router-dom";
import TurfLayout from "../layouts/TurfLayout";
import Dashboard from "../Pages/TurfPortal/Dashboard";
import Login from "../Pages/TurfPortal/Login";
import Signup from "../Pages/TurfPortal/Signup";


function TurfRoute() {
  return (
    <Routes>
      <Route path="/" element={<TurfLayout/>}>
        <Route
          path="dashboard"
          element={<Dashboard/>}
        ></Route>
        <Route
          path="profile"
          element={<button className="p-4 bg-blue-700">hsdgfshdf</button>}
        ></Route>
      </Route>
      <Route
          path="/login"
          element={<Login/>}
        ></Route>
        <Route
          path="/signup"
          element={<Signup/>}
        ></Route>
    </Routes>
  );
}

export default TurfRoute;
