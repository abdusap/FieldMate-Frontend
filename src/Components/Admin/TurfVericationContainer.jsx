import React, { useEffect, useState } from "react";
import TurfDetailsInVerification from "./TurfDetailsInVerification";
import {
  acceptTurfApi,
  allTurfDetailForVerifyApi,
  rejectTurfApi,
} from "../../Helpers/AdminApi";
import Swal from "sweetalert2";

function TurfVericationContainer() {
  const [allTurf, setAllturf] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(true);
  useEffect(() => {
    allTurfDetailForVerifyApi().then((res) => {
      setAllturf(res.data.allTurf);
    });
  }, [updateStatus]);
  const handleAccept = (id) => {
    acceptTurfApi(id).then((res) => {
      setUpdateStatus(!updateStatus);
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Approved Mail has been send",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };
  const handleReject = (id) => {
    rejectTurfApi(id).then((res) => {
      setUpdateStatus(!updateStatus);
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Rejected Mail has been send",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };
  return (
    <>
      <h1 className="font-bold text-xl md:text-2xl">Turf Verify</h1>
      <div className="flex justify-center items-center  w-full">
        <div className=" border-black border  rounded-xl w-4/5 px-2 md:px-44 h-96 overflow-auto">
          <p className="text-sm md:text-lg font-semibold ml-2">
            Pending Verification
          </p>
          {allTurf.map((data) => {
            return (
              <TurfDetailsInVerification
                name={data.name}
                email={data.email}
                mobile={data.mobile}
                location={"calicut"}
                coordinates={data.gioCoordinates}
                id={data._id}
                handleAccept={handleAccept}
                handleReject={handleReject}
                verificationStatus={data.verificationStatus}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TurfVericationContainer;
