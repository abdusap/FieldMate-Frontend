import React, { useEffect, useState } from 'react'
import { blockTurfApi, getAllTurfApi } from '../../Helpers/AdminApi'
import DataTable from "react-data-table-component";
import ConfirmSwal from '../../Helpers/ConfirmSwal';
function TurfManageTable() {
    const [turfs,setTurfs]=useState([])
    const [update,setUpdate]=useState(true)
useEffect(()=>{
 
  getAllTurfApi().then((res)=>{
        setTurfs(res.data.allTurf)
    })
},[update])
    const handleList=(id)=>{
      ConfirmSwal(blockTurfApi,id).then((res)=>{
        setUpdate(()=>!update)
      
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
          name: "Email",
          selector: (row) => row.email,
        },
        {
          name: "Mobile No:",
          selector: (row) => row.mobile,
        },
        {
          name: "Status",
          selector: (row) => (
            row.status?<p className='text-green-700 font-semibold'>Active</p>:<p className='text-red-700 font-semibold'>Block</p>
          )
        },
        {
          name: "Action",
          cell: (row) => (
            <button
            className={`${
              row.status ?"bg-red-500": "bg-green-500"  
            } rounded text-white font-medium w-20 h-7`}
            onClick={() => { 
              handleList(row.id);
            }}
          >
            {row.status ? "Block" : "UnBlock"}
          </button>
            // <>
            // {row.status ?
            //     <button className='bg-red-500 font-medium w-20 h-7 rounded text-white'>block</button>:
            //     <p className='text-red-700 pr-2 ml-2'>Cancelled</p>
            // }  <button className='bg-blue-500 font-medium w-20 h-7 rounded text-white ml-2'>view</button>
            // </>
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

      const tableData = turfs?.map((value, i) => {
        return {
          id: value._id,
          no: i + 1,
          name: value.name,
          email: value.email,
          mobile: value.mobile,
          status: value.status,
        };
      });
  return (
    <>
<DataTable columns={columns} data={tableData} customStyles={style} pagination
    />
    </>
  )
}

export default TurfManageTable