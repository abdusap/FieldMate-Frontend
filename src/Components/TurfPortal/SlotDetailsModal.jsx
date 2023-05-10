import React, { useEffect, useState } from "react";
import { slotDetailsApi } from "../../Helpers/TurfApi,";

function SlotDetailsModal({ modal, setModal, slotId, setSlotId }) {
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (slotId !== "") {
      slotDetailsApi(slotId).then((res) => {
        setDetails(res.data.details);
        setSlotId("");
        setLoader(!loader);
      });
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-2 rounded w-96 m-5">
          <div className="flex justify-between">
            <h1 className="font-semibold text-center text-2xl px-5 my-5 text-gray-700">
              Slot Details
            </h1>
            <button
              className="font-semibold mr-3 mb-8 text-xl"
              onClick={() => setModal(!modal)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col px-5">
            {loader ? (
              <div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Name:
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                    >
                      {details?.name}
                    </label>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Mobile:
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                    >
                      {details?.mobile}
                    </label>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Selected Sports:
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                    >
                      {details?.sports}
                    </label>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Selected Date:
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                    >
                      {new Date(details?.date).toLocaleDateString("en-GB")}
                    </label>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Selected Slots:
                    </label>
                  </div>
                  <div className="w-1/2">
                    {details?.slots?.map((data) => (
                      <label
                        for="first_name"
                        class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                      >
                        {data}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                    >
                      Total:
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                    >
                      ₹{details?.total}
                    </label>
                  </div>
                </div>
                {details?.walletAmount !== 0 && (
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <label
                        for="first_name"
                        class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                      >
                        Wallet Amount:
                      </label>
                    </div>
                    <div className="w-1/2">
                      <label
                        for="first_name"
                        class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                      >
                        ₹{details?.walletAmount}
                      </label>
                    </div>
                  </div>
                )}
                {details?.paymentAmount !== 0 && (
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <label
                        for="first_name"
                        class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
                      >
                        Payment Amount:
                      </label>
                    </div>
                    <div className="w-1/2">
                      <label
                        for="first_name"
                        class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
                      >
                        ₹{details?.paymentAmount}
                      </label>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="inline-block ml-36 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlotDetailsModal;
