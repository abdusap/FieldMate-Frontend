import React, { useEffect, useState } from "react";
import { availableLocationApi, availableSlotsApi } from "../../Helpers/UserApi";
import { useLocation, useNavigate } from "react-router-dom";
import FilteredSlots from "../../Helpers/FilteredSlots";

function SlotDetailsForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [minDate, setMinDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [availableSports, setAvailableSports] = useState([]);
  const [selectedSportsId, setSelectedSportsId] = useState("");
  const [selectedSportsName, setSelectedSportsName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [turfId, setTurfId] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [responded, setResponded] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [location,setLocation] = useState([])
  useEffect(() => {
    setTurfId(location.state);
    availableLocationApi(location.state).then((res) => {
      setAvailableSports(res.data.sports);
    });
  }, []);
  useEffect(() => {
    if (selectedDate !== "" && selectedSportsId !== "") {
      const SelectedDate = selectedDate;
      availableSlotsApi(turfId, selectedSportsId, selectedDate).then((res) => {
        if (res.data.allSlot) {
          const resSlots = res.data.allSlots;
          // FilteredSlots(resSlots).then((data)=>{
          const selectedDate = new Date(SelectedDate);
          const currentDate = new Date();
          if (selectedDate.toDateString() === currentDate.toDateString()) {
            setSlots(FilteredSlots(resSlots));
            setResponded(true);
            setLoading(true);
          } else {
            setSlots(resSlots);
            setResponded(true);
            setLoading(true);
          }
          // })
        }
        if (res.data.bookedSlot) {
          const turfSlots = res.data.allSlots;
          const bookedSlot = res.data.BookedSlots;
          const availableSlot = turfSlots.filter(
            (slot) => !bookedSlot.includes(slot)
          );
          const selectedDate = new Date(SelectedDate);
          const currentDate = new Date();
          if (selectedDate.toDateString() === currentDate.toDateString()) {
            setSlots(FilteredSlots(availableSlot));
            setResponded(true);
            setLoading(true);
          } else {
            setSlots(availableSlot);
            setResponded(true);
            setLoading(true);
          }
        }
      });
      console.log(selectedSportsId);
      console.log(selectedDate);
    }
  }, [selectedDate, selectedSportsId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSportsId && selectedSportsName && selectedSlots.length !== 0) {
      const data = {
        turfId: turfId,
        sportsName: selectedSportsName,
        sportsId: selectedSportsId,
        date: selectedDate,
        slots: selectedSlots,
      };
      navigate("/slot_checkout", { state: data });
    }
  };

  const handleCheckboxChange = (event) => {
    const slot = event.target.value;
    const newSelectedSlots = [...selectedSlots];

    if (event.target.checked) {
      // Add the slot to the selectedSlots array if it is checked
      newSelectedSlots.push(slot);
    } else {
      // Remove the slot from the selectedSlots array if it is unchecked
      const index = newSelectedSlots.indexOf(slot);
      if (index > -1) {
        newSelectedSlots.splice(index, 1);
      }
    }

    setSelectedSlots(newSelectedSlots);
  };

  return (
    <>
      <div className="bg-white w-fit p-10 mx-auto rounded-md">
        <p className="text-base font-semibold  text-center">Slot Details</p>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label
              for="first_name"
              class="block mb-2 mt-3 text-sm font-medium text-gray-900 "
            >
              Select Sports
            </label>
            <select
              required
              name=""
              id=""
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                setSelectedSportsId(selectedOption.value);
                setSelectedSportsName(selectedOption.getAttribute("name"));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full md:w-[22rem] p-2.5"
            >
              <option selected value={""}>
                Choose any Sports
              </option>
              {availableSports?.map((data) => (
                <option name={data.name} key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 mt-3 text-sm font-medium text-gray-900 "
            >
              Select Date
            </label>
            <input
              required
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setLoading(false);
              }}
              type="date"
              min={minDate}
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full md:w-[22rem] p-2.5 mb-4"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {loading ? (
              slots?.map((data, i) => (
                <div key={i}>
                  <label htmlFor="slot3" className="block cursor-pointer">
                    <span className="bg-green p-1">{data}</span>
                    <input
                      type="checkbox"
                      value={data}
                      id="slot3"
                      name="slot"
                      className=""
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
              ))
            ) : (
              <div
                role="status"
                className="flex justify-center items-center w-full col-span-3"
              >
                <svg
                  aria-hidden="true"
                  class="flex w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            {slots?.length === 0 && selectedDate !== "" && responded && (
              <p className="text-sm text-red-700">No Available Slot</p>
            )}
            {selectedDate === "" && (
              <p className="text-sm text-blue-700">Choose a Date</p>
            )}
          </div>

          <div className="flex ">
            <button
              type="submit"
              className="mx-auto bg-black text-white px-2 rounded-lg py-1 mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SlotDetailsForm;
