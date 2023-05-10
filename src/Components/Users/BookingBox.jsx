import React, { useState } from "react";
import ConfirmSwal from "../../Helpers/ConfirmSwal";
import { cancelBookingApi } from "../../Helpers/UserApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function BookingBox({
  groundName,
  sports,
  slots,
  status,
  id,
  date,
  bookingType,
}) {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(true);
  const handleCancel = (id) => {
    ConfirmSwal(cancelBookingApi, id).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(res);
      setUpdate(!update);
    });
  };
  return (
    <>
      <div className="flex w-full border-2 border-gray-500 rounded-lg p-3 md:flex-row flex-col mt-2">
        <div className="md:w-1/3">
          <p className="font-semibold">
            Booking ID: <span className="font-normal">23kjn3232</span>
          </p>
          <p className="font-semibold">
            Ground: <span className="font-normal">{groundName}</span>
          </p>
          <p className="font-semibold">
            Sports: <span className="font-normal">{sports}</span>
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="font-semibold">Slots:</p>
          {slots?.map((data) => (
            <p>{data}</p>
          ))}
        </div>
        <div className="md:w-1/3 md:block flex justify-around items-center">
          {update ? (
            <>
              {bookingType === "active" && status && (
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 rounded p-1 text-sm text-white px-2"
                    onClick={() => handleCancel(id)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              {!status && (
                <div>
                  <p className="text-red-600 text-end">Cancelled</p>
                </div>
              )}
            </>
          ) : (
            <div>
              <p className="text-red-600 text-end">Cancelled</p>
            </div>
          )}
          <div className="flex justify-end">
            <button
              className="bg-blue-500 rounded p-1 text-sm text-white md:mt-2 px-2"
              onClick={() => navigate("/booking_details", { state: id })}
            >
              View
            </button>
          </div>{" "}
          <p className="text-end font-semibold">
            Date:{" "}
            <span className="font-normal">
              {new Date(date).toLocaleDateString("en-GB")}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default BookingBox;
