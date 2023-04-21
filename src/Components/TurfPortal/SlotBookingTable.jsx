import React from 'react'
import DataTable from "react-data-table-component";

function SlotBookingTable() {

    const handleList=(id)=>{
        console.log(id)
    }
const user=[
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:true},
    {_id:'987879dufidsfi',
    name:'akdk',
email:'dkjkdfk',
mobile:46546551,
status:false},
]

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
          name: "Action",
          cell: (row) => (
            // <button
            //   className={`${
            //     row.status ? "bg-green-500" : "bg-red-500"
            //   } rounded text-white font-medium w-20 h-7`}
            //   onClick={() => {
            //     handleList(row.id);
            //   }}
            // >
            //   {row.status ? "UnBlock" : "Block"}
            // </button>
            <>{row.status ?

                <button className='bg-red-500 font-medium w-20 h-7 rounded text-white'>Cancel</button>:
                <p className='text-red-700 pr-2 ml-2'>Cancelled</p>
            }
            <button className='bg-blue-500 font-medium w-20 h-7 rounded text-white ml-2'>view</button>
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

      const tableData = user.map((value, i) => {
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
{/* <div className="sm:w-full px-10"> */}
        <DataTable columns={columns} data={tableData} customStyles={style} pagination
    />
      {/* </div> */}
    </>
  )
}

export default SlotBookingTable