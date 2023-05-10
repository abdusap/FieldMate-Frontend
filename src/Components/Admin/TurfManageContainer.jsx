import React from "react";
import TurfManageTable from "./TurfManageTable";

function TurfManageContainer() {
  return (
    <>
      <h1 className="font-bold text-xl md:text-2xl">Turf Manage</h1>
      <div className=" justify-center items-center  w-full px-10">
        <div className="flex justify-end"></div>
        <TurfManageTable />
      </div>
    </>
  );
}

export default TurfManageContainer;
