import React from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { addLocation,addSports } from "../../Helpers/AdminApi";


function LocationAndSports() {
  const addlocation=()=>{
    Swal.fire({
      title: "Enter the Location",
      input: "text",
      // inputValue: "haksk",
      inputAttributes: {
        autocapitalize: "off",
        // maxLength: 6 // specify the max length of OTP here
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        const formData={
          name:data
        }
        console.log(formData);
        return addLocation(formData)
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Location has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`failed`);
          });
      },
    });
  }

  const AddSports=()=>{
    Swal.fire({
      title: "Enter the Sports",
      input: "text",
      // inputValue: "haksk",
      inputAttributes: {
        autocapitalize: "off",
        // maxLength: 6 // specify the max length of OTP here
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        const formData={
          name:data
        }
        console.log(formData);
        return addSports(formData)
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sports has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`failed`);
          });
      },
    });
  }
  return (
    <>
      <h1 className="font-bold text-xl md:text-2xl">
        Location And Sports Manage
      </h1>
      <div className="flex md:flex-row flex-col pt-4">
        <div className="flex flex-col md:w-1/2 md:p-2 p-1 flex-grow">
          <h1 className="text-lg text-center pb-3 md:font-semibold">
            Location
          </h1>
          <button className="bg-blue-400 rounded-lg p-1 text-sm font-semibold flex text-center self-end w-max"
          onClick={addlocation}
          >
            Add Location
          </button>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td className="px-6 py-4 ">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 md:p-2  p-1 flex-grow">
          <h1 className="text-lg text-center pb-3 md:font-semibold">Sports</h1>
          <button onClick={AddSports} className="bg-blue-400 rounded-lg p-1 text-sm font-semibold flex text-center self-end w-max">
            Add Sports
          </button>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td className="px-6 py-4 ">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationAndSports;
