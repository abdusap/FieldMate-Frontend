import React from 'react'
import BookingReportTable from './BookingReportTable'


function ReportContainer() {



  return (
    <>
    <h1 className="font-bold text-xl md:text-2xl">Reports</h1>
             <div className=' justify-center items-center  w-full px-10'>
                <div className='flex justify-end'>
                </div>
             <BookingReportTable />
             </div>
      </>
  )
}

export default ReportContainer