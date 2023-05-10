import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { addSlotApi, getSlotApi } from "../../Helpers/TurfApi,";
import Swal from "sweetalert2";
import { Slots } from "../../Helpers/SlotsTimingData";

function AddSlotModal({ title, modal, setModal }) {
  const turfId = useSelector((state) => state.turf);
  const [price, setPrice] = useState();
  const [updated, setUpdated] = useState(true);
  const [slots, setSlots] = useState(Slots);
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {
    getSlotApi(turfId.id).then((res) => {
      if (res.data.success) {
        const slot = res.data.slot.slots;
        setPrice(res.data.slot.price);
        const selected = slots.filter((data) => {
          return slot.includes(data.value);
        });
        setSelectedOptions(selected);
      }
    });
  }, [updated]);
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const slots = selectedOptions.map((data) => data.value);
    const price = e.target[0].value;
    const data = {
      turfId: turfId,
      slots: slots,
      price: price,
    };
    addSlotApi(data).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Changes has been saved",
        showConfirmButton: false,
        timer: 1200,
      }).then(() => {
        setModal(!modal);
        setUpdated(!updated);
      });
    });
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-2 rounded w-96 m-5">
          <div className="flex justify-between">
            <h1 className="font-semibold text-center text-2xl px-5 my-5 text-gray-700">
              {title}
            </h1>
            <button
              className="font-semibold mr-3 mb-8 text-xl"
              onClick={() => setModal(!modal)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col px-5">
            <form onSubmit={handleSubmit}>
              <label htmlFor="" className="text-base">
                Slot Price
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                name="price"
                id="first_name"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                placeholder="Slot Price"
                required
              />
              <label htmlFor="" className="text-base">
                Add Slots
              </label>

              <Select
                required
                isMulti
                options={slots}
                value={selectedOptions}
                onChange={handleMultiSelectChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
              />
              <div className="text-center p-2">
                <button
                  type="submit"
                  className=" px-5 py-1 bg-gray-700 text-white text-lg rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSlotModal;
