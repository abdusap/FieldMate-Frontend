import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { removeUser } from "../Store/Slice/UserSlice";
import { SearchContext } from "../Context/SearchContext";
import { getAllSports } from "../Helpers/UserApi";


function UserHomeLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search, setSearch } = useContext(SearchContext);
  const {setSports}=useContext(SearchContext)
  const { id, name } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [Sports, setSport] = useState([]);
  useEffect(() => {
    getAllSports().then((res) => {
      setSport(res.data.sports);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  function handleNav() {
    setToggle(() => !toggle);
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(removeUser(""));
    navigate("/");
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      setToggle(window.innerWidth > 768);
    }

    // Add event listener to update isMobile on resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial isMobile
    handleResize();

    // Remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid">
      <div
        className=""
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          backgroundImage: "url(./image/homeBackground.png)",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div>
      <nav className="">
        <div className="flex justify-between flex-row w-full  bg-white p-1 md:pl-6 border-b-2 border-slate-200  ">
          <Link to={'/'}>
          <img src="./image/logo.png" className="w-36 md:w-48 " alt="logo" />
          </Link>
          {!isMobile && (
            <div className="self-center ">
              <form onSubmit={handleSubmit}>
                <input
                  className="w- border rounded-2xl h-8 w-72 focus:outline-none focus:border-gray-600 pl-3"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gray-700 text-white p-1 font-semibold rounded-full md:pr-3 md:pl-3 pl-2 pr-2 ml-2"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          <div className="self-center flex md:flex-row p-2 md:p-5">
            {name !== "" && (
              <>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex cursor-pointer bg-white text-black p-1 font-semibold rounded-full border-2 border-gray-400 md:pr-3 md:pl-3 pl-2 pr-2 md:mr-4 mr-2"
                  >
                    {name}
                    <svg
                      className={`w-4 h-4 ml-2 mt-1 transition-transform transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      className="z-10 absolute border right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow "
                      onClick={toggleDropdown}
                    >
                      <ul className="py-2 px-2 text-base md:text-lg text-black shadow-2xl">
                        <li className="cursor-pointer border-b border-gray-400">
                          <p onClick={() => navigate("/profile")}>Profile</p>
                        </li>
                        <li className="cursor-pointer border-b border-gray-400">
                          <p onClick={() => navigate("/booking")}>Booking</p>
                        </li>
                        <li className="cursor-pointer border-b border-gray-400">
                          <p className="text-red-700" onClick={handleLogout}>
                            Logout
                          </p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
            {isMobile ? (
              <svg
                onClick={() => handleNav()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex self-center m-2 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            ) : (
              id === "" && (
                <Link to="/login">
                  <button className="bg-black text-white p-1 font-semibold rounded-full md:pr-3 md:pl-3 pl-2 pr-2">
                    SignIn
                  </button>
                </Link>
              )
            )}
          </div>
        </div>
        {toggle && (
          <div
            className={`flex bg-white md:flex-row ${
              toggle && "flex-col"
            } gap-3 md:gap-10  md:p-3  pl-5 md:pl-10 text-black`}
          >
            {isMobile && toggle && (
              <div className="pt-3">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="border  focus:outline-none"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-black text-white pr-2 pl-2 ml-2 rounded-md "
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
            {
              <>
                {Sports?.map((data) => (
                  <div className="">
                    <button
                      onClick={() =>{                       
                        navigate("/turf_listing", { state: data.name });
                        setSports(data.name)
                      }
                      }
                    >
                      {data.name}
                    </button>
                  </div>
                ))}
              </>
            }
            {isMobile && toggle && id === "" && (
              <div>
                <button className="font-semibold">Login/Signup</button>
              </div>
            )}
          </div>
        )}
      </nav>

      <Outlet />
      <footer>
        <div className="flex md:flex-row flex-col border-b  border-gray-500 w-fill border-t ">
          <div className="flex flex-grow md:pl-32 md:justify-start justify-center">
            <span className="inline-flex">
              <img className="w-16" src="/image/logo only.png" alt="" />
            </span>
            <span className="text-white font-bold text-xl self-center">
              FieldMate
            </span>
            <span className="text-white self-end text-sm">Find Your Field</span>
          </div>
          <div className="flex flex-grow md:pr-32 text-white md:justify-end justify-center mt-5 mb-2">
            <h1 className="text-xs md:text-lg self-center">
              Join our Network And Grow Your Business
            </h1>
            <Link to={"/turf/login"}>
              <button className="bg-green-700 px-2 rounded-md ml-3 md:h-3/4 md:self-center">
                Join Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex text-white md:flex-row flex-col">
          <div className="flex flex-grow flex-col gap-3 mt-2 border-b border-gray-500 pb-2 md:pl-32">
            <p className="md:text-start text-center">
              Download FieldMate app for exciting offers
            </p>
            <span className="flex justify-center md:justify-start gap-3">
              <img
                className="w-1/3 h-1/2 md:w-1/4 md:h-3/4"
                src="/image/google-play.png"
                alt="logo"
              />
              <img
                className="w-1/3 h-1/2 md:h-3/4 md:w-1/4"
                src="/image/app-store.png"
                alt="logo"
              />
            </span>
          </div>
          <div className="flex flex-grow flex-col md:items-start items-center mt-2 border-b border-gray-500 pb-3">
            <p>Home</p>
            <p>About us</p>
            <p>Partner With Us</p>
            <p>Book Now</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-grow flex-col md:items-start items-center border-b border-gray-500 mt-2 pb-3">
            <p>Hi-lite Business Park</p>
            <p>Palazhi,Calicut</p>
            <p>Kerala</p>
            <p>India</p>
            <p>saepabdu@gmail.com</p>
            <h1 className="text-lg font-semibold">Connect Us</h1>
            <span className="flex gap-3">
              <img className="h-6" src="/image/instagram.png" alt="logo" />
              <img className="h-6" src="/image/facebook.png" alt="logo" />
              <img className="h-6" src="/image/linkedin.png" alt="logo" />
            </span>
          </div>
        </div>
        <div className="flex justify-center text-white p-2">
          <p className="text-xs text-center">
            Copyright © 2023.D | Company Registered as FieldMate Online Services
            Private
          </p>
        </div>
      </footer>
    </div>
  );
}

export default UserHomeLayout;
