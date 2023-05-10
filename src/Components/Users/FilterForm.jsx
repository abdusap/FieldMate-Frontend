import React, { useEffect, useState } from "react";
import { getLocationAndSportsApi } from "../../Helpers/UserApi";

function FilterForm({
  locationId,
  setLocationId,
  sportsId,
  setSportsId,
  handleSubmit,
}) {
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    getLocationAndSportsApi().then((res) => {
      setSports(res.data.sports);
      setLocation(res.data.location);
    });
  }, []);

  const handleLocationChange = (event) => {
    setLocationId(event.target.value);
  };

  const handleSportsChange = (event) => {
    setSportsId(event.target.value);
  };

  return (
    <>
      <div className=" bg-white w-fit h-fit pl-5 self-center md:self-start px-20 my-6 md:ml-9">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="font-semibold mt-3">Location</p>
            <ul>
              {location.map((location) => (
                <li className="mt-1">
                  <input
                    type="radio"
                    id="location1"
                    value={location.name}
                    name="location"
                    className="mr-1"
                    onChange={handleLocationChange}
                    checked={locationId === location.name}
                  />
                  <label for="location1">{location.name}</label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mt-2">Sports</p>
            <ul>
              {sports.map((sports) => (
                <li className="mt-1">
                  <input
                    type="radio"
                    id="sports1"
                    name="sports"
                    value={sports.name}
                    className="mr-1"
                    onChange={handleSportsChange}
                    checked={sportsId === sports.name}
                  />
                  <label for="sports1">{sports.name}</label>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-fit h-fit bg-blue-600 text-white px-1 rounded-md mb-3 mt-2">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default FilterForm;
