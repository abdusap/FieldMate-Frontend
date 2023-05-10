import React, { useEffect, useState } from "react";
import ReviewsBox from "./ReviewsBox";
import { useLocation, useNavigate } from "react-router-dom";
import { getReviewsApi, turfDetailsApi } from "../../Helpers/UserApi";
import ReviewForm from "./ReviewForm";

function TurfDetailsContainer() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [amenities, setAmenities] = useState([]);
  const [image, setImage] = useState([]);
  const [rules, setRules] = useState([]);
  const [sports, setSports] = useState([]);
  const [turf, setTurf] = useState({});
  const [turfDetails, setTurfDetails] = useState({});
  const [modal, setModal] = useState(false);
  const [review, setReview] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    turfDetailsApi(location.state).then((res) => {
      setAmenities(res.data.turfDetails.amenities);
      setRules(res.data.turfDetails.rules);
      setImage(res.data.turfDetails.image);
      setSports(res.data.turfDetails.sports);
      setTurfDetails(res.data.turfDetails);
      setTurf(res.data.turf);
      setLoader(true);
    });
  }, []);
  useEffect(() => {
    getReviewsApi(location.state).then((res) => {
      setReview(res.data.reviews);
    });
  }, []);

  const handleClickSlot = () => {
    if (user) {
      navigate("/slot_details", { state: turf._id });
    } else {
      navigate("/login");
    }
  };

  const handleAddReview = () => {
    if (user) {
      setModal(!modal);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {loader ? (
        <div>
          <div className="w-full  bg-white border-t-2 pl-8 border-b-2">
            <p className="text-lg font-bold p-1">{turfDetails.groundName}</p>
            <p className="flex pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {turf.location}
            </p>
          </div>
          <div className="flex bg-white w-11/12 mx-auto p-4 rounded-lg mt-4 ">
            {image.map((url) => (
              <div
                className="h-64 w-80 ml-3 bg-cover"
                style={{ backgroundImage: `url(${url})` }}
              />
            ))}
          </div>
          <div className="w-full flex justify-evenly flex-col md:flex-row mt-4 px-4  md:px-3 items-center md:items-stretch">
            <div className="bg-white md:w-96 p-4 mb-4 rounded-lg w-full">
              <p className="text-base font-bold pb-2">Available Sports</p>
              {sports.map((sports) => (
                <span className="text-sm border border-black px-1 rounded-2xl mr-1">
                  {sports}
                </span>
              ))}

              <p className="text-base font-bold mt-2">Amenities</p>
              <ul className="list-disc ml-6">
                {amenities?.map((data) => (
                  <li>{data}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white md:w-96 p-4 mb-4 rounded-lg w-full">
              <p className="text-base font-bold pb-1">Slot Booking</p>
              <button
                className="text-white bg-black px-3 rounded-lg ml-3"
                onClick={handleClickSlot}
              >
                Slots
              </button>
              {/* <p className='text-base font-bold mt-1 mb-1'>Tournaments</p> */}
              {/* <p className='mb-1 text-sm border-black border  w-fit p-1 rounded-xl'>Football Tournament on 12/04/2023</p> */}
              {/* <p className='text-base font-bold'>Offers</p> */}

              {/* <p className='w-fit p-1 rounded-xl flex text-gray-500'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

            Flat 30% off</p> */}
              <p className="text-base font-bold mb-1">Venue Rules</p>
              <ul className="list-disc ml-6">
                {rules?.map((data) => (
                  <li>{data}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white md:w-96 p-4 mb-4 rounded-lg w-full">
              <p className="text-base font-bold">Location and Contact</p>

              <a className="flex mt-2 " href={turf.gioCoordinates}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Location
              </a>
              <a href="www.beacharena.com" className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                {turfDetails.website}
              </a>
              <p className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                {turf.email}
              </p>
              <p className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                +91 {turf.mobile}
              </p>
            </div>
          </div>
          <div className="bg-white  md:w-1/2 md:ml-20 mx-4 md:mx-0 mt-6 rounded-md">
            <div className="flex justify-between border-b border-black mx-4 p-3 ">
              <p className="text-lg font-bold">Reviews</p>
              <button
                className="text-white bg-black px-3 rounded-lg"
                onClick={handleAddReview}
              >
                Write a reviews
              </button>
            </div>
            <div className="px-4">
              {review?.map((data) => (
                <ReviewsBox
                  title={data.title}
                  message={data.message}
                  rating={data.rating}
                  date={data.date}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div role="status" className="flex justify-center items-center h-96">
          <svg
            aria-hidden="true"
            class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      {modal && <ReviewForm modal={modal} setModal={setModal} />}
    </>
  );
}

export default TurfDetailsContainer;
