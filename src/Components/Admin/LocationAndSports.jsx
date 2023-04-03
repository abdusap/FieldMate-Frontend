import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { addLocationApi, addSportsApi, editLocationApi, EditSportsApi, findLocationApi, findSportsApi, getLocationAndSportsApi } from '../../Helpers/AdminApi';
import InputSwal from '../../Helpers/InputSwal';
import TableLocationAndSports from './TableLocationAndSports';




function LocationAndSports() {
  const [updated,setUpdated]=useState(false)
    const [location,setLocation]=useState([])
    const [sports,setSports]=useState([])
    useEffect(()=>{
      getLocationAndSportsApi().then(({data})=>{
        setSports(data.data.sports)
        setLocation(data.data.location)
      })
    },[updated])
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
          return addLocationApi(formData)
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
          return addSportsApi(formData)
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

    const editSports=(id)=>{
      const data={id:id}
        console.log(id)
        findSportsApi(data).then((res)=>{
          const inputValue=res.data.data.name
          const id=res.data.data._id
          console.log(res.data)
          InputSwal("Edit Sports","text",inputValue,"Edit",EditSportsApi,id,"Successfull").then(()=>setUpdated(()=>!updated))
        })
    }

    const EditLocation=(id)=>{
        const data={id:id}
        findLocationApi(data).then((res)=>{
       const inputValue=res.data.data.name
       const id=res.data.data._id
       InputSwal("Edit Location","text",inputValue,"Edit",editLocationApi,id,"Successfull").then(()=>setUpdated(()=>!updated))

        })
        
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
            <TableLocationAndSports data={location} head={"Location"} handleClick={EditLocation}/>   
          </div>
          <div className="flex flex-col md:w-1/2 md:p-2  p-1 flex-grow">
            <h1 className="text-lg text-center pb-3 md:font-semibold">Sports</h1>
            <button onClick={AddSports} className="bg-blue-400 rounded-lg p-1 text-sm font-semibold flex text-center self-end w-max">
              Add Sports
            </button>
                <TableLocationAndSports data={sports }  head={"Sports"} handleClick={editSports}/>
          </div>
        </div>
      </>
    );
  }

  export default LocationAndSports;
