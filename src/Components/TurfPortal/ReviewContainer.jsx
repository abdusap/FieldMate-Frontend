import React, { useEffect, useState } from "react";
import ReviewDetailsBox from "./ReviewDetailsBox";
import { useSelector } from "react-redux";
import { getAllReviewApi } from "../../Helpers/TurfApi,";

function ReviewContainer() {
  const { id } = useSelector((state) => state.turf);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllReviewApi(id).then((res) => {
      setReviews(res.data.reviews);
      setLoading(!loading);
    });
  }, []);
  return (
    <>
      <h1 className="font-bold text-xl md:text-2xl">Turf Datails</h1>
      <div className="flex justify-center items-center  w-full">
        <div className=" border-black border  rounded-xl w-1/2 px-6  h-[28rem] overflow-auto">
          {loading ? (
            <>
              {reviews?.map((data) => (
                <ReviewDetailsBox
                  title={data.title}
                  id={data._id}
                  message={data.message}
                  rating={data.rating}
                  date={data.date}
                />
              ))}
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div
                className="flex   h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReviewContainer;
