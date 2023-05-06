import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { cancelSlotApi, getSlotBookingApi } from '../../Helpers/TurfApi,';
import { useSelector } from 'react-redux';
import ConfirmSwal from '../../Helpers/ConfirmSwal';

function SlotBookingTable({detailModal,setdetailsModal,setSlotId}) {
  const {id}=useSelector((state)=>state.turf)
  const [booking,setBooking]=useState([])
  const [update,setUpdate]=useState(true)
  useEffect(()=>{
    getSlotBookingApi(id).then((res)=>{
      console.log(res);
      setBooking(res.data.details)
    })
  },[update])

    const handleList=(id)=>{
      setSlotId(id)
      setdetailsModal(!detailModal)
        console.log(id)
    }
    const handleCancel=(id)=>{
      console.log(id)
      ConfirmSwal(cancelSlotApi,id,()=>setUpdate(!update)).then((res)=>{
       setUpdate(!update)
      })
    }


    const columns = [
        {
          name: "NO:",
          selector: (row) => row.no,
        },
        {
          name: "Name",
          selector: (row) => row.name,
        },
        {
          name: "Mobile No:",
          selector: (row) => row.mobile,
        },
        {
          name: "Date",
          selector: (row) => row.date,
        },
        {
          name: "Sports",
          selector: (row) => row.sports,
        },
        {
          name: "Slots",
          selector: (row) =>(
           <div>
            {
              row.slots.map((data)=>
              <p className='my-1'>{data}</p>)
            }
           </div>
          ) 
        },
        {
          name: "Status",
          selector: (row) => (
            row.status?<p className='text-green-700 font-semibold'>Active</p>:<p className='text-red-700 font-semibold'>Cancelled</p>
          )
        },
        {
          name: "Action",
          cell: (row) => (
            <>{row.status &&
                <svg onClick={()=>handleCancel(row.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            }
<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleList(row.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ml-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
            </>
          ),
        },
      ];

      const style = {
        rows: {
          style: {
            minWidth: "100px",
            minHeight: "35px",
            fontSize: "15px",
          },
        },
        headCells: {
          style: {
            fontWeight: "bold",
            fontSize: "14px",
            textColor: "gray",
            backgroundColor: "#F9FAFB",
          },
        },
      };

      const tableData = booking?.map((value, i) => {
        return {
          id: value._id,
          no: i + 1,
          name: value.name,
          mobile: value.mobile,
          date:new Date(value.date).toLocaleDateString('en-GB'),
          sports:value.sports,
          slots:value.slots,
          status: value.status,
        };
      });

  return (
    <>
{/* <div className="sm:w-full px-10"> */}
        <DataTable columns={columns} data={tableData} customStyles={style} pagination
    />
      {/* </div> */}
    </>
  )
}

export default SlotBookingTable