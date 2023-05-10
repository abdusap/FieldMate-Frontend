import React from "react";

function TurfDetailsInVerification({
  name,
  email,
  mobile,
  location,
  coordinates,
  id,
  handleAccept,
  handleReject,
  verificationStatus,
}) {
  return (
    <>
      <div className="border-black border rounded-md my-2 md:py-2 shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-1/2 px-1">
            <p className="text-base font-semibold">
              Name:<span className="font-normal"> {name}</span>
            </p>
            <p className="text-base font-semibold">
              Email:<span className="font-normal"> {email}</span>
            </p>
            <p className="text-base font-semibold">
              Mobile:<span className="font-normal"> {mobile}</span>
            </p>
          </div>
          <div className="md:w-1/2 px-1 pb-2 md:pb-0">
            <p className="text-base font-semibold">
              Location:<span className="font-normal"> {location}</span>
            </p>
            <p className="text-base font-semibold">
              Gio-cordinates:
              <a className="font-normal text-blue-700" href={coordinates}>
                Link{" "}
              </a>
            </p>
            {verificationStatus === "rejected" ? (
              <p className="text-lg text-red-700 font-semibold">
                <span className="text-black font-normal">status:</span>Rejected
              </p>
            ) : (
              <>
                <button
                  onClick={() => handleAccept(id)}
                  className="text-lg text-white bg-green-700 px-1 rounded-md"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(id)}
                  className="ml-2 text-lg text-white bg-red-700 px-1 rounded-md"
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TurfDetailsInVerification;
