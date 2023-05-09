import React, { useEffect, useState } from "react";
import Cards from "../../Components/TurfPortal/Cards";
import Graph from "../../Components/TurfPortal/Graph";
import { dashboardDetailsApi } from "../../Helpers/AdminApi";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [turfCount, setTurfCount] = useState(0);
  const [pendingTurf, setPendingTurf] = useState(0);
  const [approvedTurf, setApprovedTurf] = useState(0);
  const [rejectedTurf, setRejectedTurf] = useState(0);
  useEffect(() => {
    dashboardDetailsApi().then((res) => {
      setUserCount(res.data.userCount);
      const turfDetails = res.data.turfDetails;
      setTurfCount(turfDetails.length);
      turfDetails.forEach((data) => {
        if (data.verificationStatus === "Pending") {
          setPendingTurf(pendingTurf + 1);
        }
        if (data.verificationStatus === "approved") {
          setApprovedTurf(approvedTurf + 1);
        }
        if (data.verificationStatus === "rejected") {
          setRejectedTurf(rejectedTurf + 1);
        }
      });
    });
  }, []);
  return (
    <>
      <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
      <div className="flex md:flex-row justify-around mt-2 md:mt-8 flex-col">
        <Cards colour={"bg-blue-900"} head={"Total User"} body={userCount} />
        <Cards colour={" bg-yellow-600"} head={"Total Turf"} body={turfCount} />
        <Cards
          colour={" bg-green-600"}
          head={"Pending verification"}
          body={pendingTurf}
        />
      </div>
      <Graph
        label1={"Cancelled Turf"}
        label2={"Users"}
        label3={"Turf Approved"}
        label4={"Turfs"}
        data1={rejectedTurf}
        data2={userCount}
        data3={approvedTurf}
        data4={turfCount}
      />
    </>
  );
}

export default Dashboard;
