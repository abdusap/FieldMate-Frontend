import React, { useEffect, useState } from "react";
import BookingBox from "../../Components/Users/BookingBox";
import { allBookingApi } from "../../Helpers/UserApi";
import { useSelector } from "react-redux";

function Booking() {
  const { id } = useSelector((state) => state.user);
  const [presentBooking, setPresentBooking] = useState([]);
  const [pastBooking, setPastBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    allBookingApi(id).then((res) => {
      setPresentBooking(res.data.presentBooking);
      setPastBooking(res.data.pastBooking);
      setLoading(!loading);
    });
  }, []);
  return (
    <div className="bg-white md:w-2/4 md:px-10 px-5 mx-6  md:mx-auto my-10 rounded-md py-4">
      <div>
        <p className="font-bold">Active Booking</p>
        {loading ? (
          <div className="flex justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          presentBooking?.map((data) => (
            <BookingBox
              groundName={data.groundName}
              sports={data.sports}
              slots={data.slots}
              status={data.status}
              id={data._id}
              date={data.date}
              bookingType={"active"}
            />
          ))
        )}
      </div>
      <div>
        <p className="font-bold mt-3">Past Booking</p>

        {loading ? (
          <div className="flex justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          pastBooking?.map((data) => (
            <BookingBox
              groundName={data.groundName}
              sports={data.sports}
              slots={data.slots}
              status={data.status}
              id={data._id}
              date={data.date}
              bookingType={""}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Booking;
