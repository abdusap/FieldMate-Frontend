import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function UserHomeLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log(isMobile);
  console.log(toggle);
  function handleNav() {
    setToggle(() => !toggle);
  }
  console.log(toggle);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      setToggle(window.innerWidth > 768)
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
          //   backgroundAttachment: "fixed",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div>
      <nav className="">
        <div className="flex justify-between flex-row w-full  bg-white p-1 md:pl-6 border-b-2 border-slate-200  ">
          {/* <p>hai</p> */}
          {/* <div> */}

          <img src="./image/logo.png" className="w-36 md:w-48 " alt="logo" />
          {/* </div> */}
          {!isMobile && (
            <div className="self-center ">
              <form action="">
                <input
                  className="w- border rounded-2xl h-8 w-72 focus:outline-none focus:border-gray-600 pl-3"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </div>
          )}
          <div className="self-center flex md:flex-row p-2 md:p-5">
            <button className="bg-white text-black p-1 font-semibold rounded-full border md:pr-3 md:pl-3 pl-2 pr-2 md:mr-4 mr-2">
              Calicut
            </button>
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
              <Link to="/login">
                <button className="bg-black text-white p-1 font-semibold rounded-full md:pr-3 md:pl-3 pl-2 pr-2">
                  SignIn
                </button>
              </Link>
            )}
          </div>
        </div>
        { toggle &&
        <div
          className={`flex bg-white md:flex-row ${
            toggle && "flex-col"
          } gap-3 md:gap-10  md:p-3  pl-5 md:pl-10 text-black`}
        >
          {/* <h1>hahf</h1> */}
          {isMobile && toggle && (
            <div className="pt-3">
              <input type="text" className="border  focus:outline-none" />
              <button className="bg-black text-white pr-2 pl-2 ml-2 rounded-md ">
                Search
              </button>
            </div>
          )}
          { <>
          <div className="">
            <button>Cricket</button>
          </div>
          <div>
            <button>Football</button>
          </div>
          <div>
            <button>Badminton</button>
          </div>
          </>}
          {isMobile && toggle && (
            <div>
              <button className="font-semibold">Login/Signup</button>
            </div>
          )}
        </div>
        }
      </nav>

      <Outlet />
      <footer>
        <div className="flex md:flex-row flex-col border-b  border-gray-500 w-fill border-t ">
          <div className="flex flex-grow md:pl-32 md:justify-start justify-center">
            <span className="inline-flex">
              <img className="w-16" src="/image/logo only.png" alt="" />
            </span>
            <span className="text-white font-bold text-xl self-center">
              FeildMate
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
        {/* <div>

</div> */}
      </footer>
    </div>
  );
}

export default UserHomeLayout;
