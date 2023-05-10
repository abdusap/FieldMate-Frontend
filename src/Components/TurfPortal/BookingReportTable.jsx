import React, { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { getSlotBookingApi } from "../../Helpers/TurfApi,";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

function BookingReportTable({ detailModal, setdetailsModal, setSlotId }) {
  const componentRef = useRef();
  const { id } = useSelector((state) => state.turf);
  const [booking, setBooking] = useState([]);
  const [allBooking, setAllBooking] = useState([]);
  const [error, setError] = useState("");
  const [dateStarting, setDateStarting] = useState("");
  const [dateEnding, setDateEnding] = useState("");
  useEffect(() => {
    getSlotBookingApi(id).then((res) => {
      console.log(res);
      setBooking(res.data.details);
      setAllBooking(res.data.details);
    });
  }, []);

  const handleSearch = () => {
    if (dateEnding >= dateStarting) {
      setError("");
      const filteredData = allBooking.filter((data) => {
        if (dateStarting <= data.date && dateEnding >= data.date) {
          return data;
        }
      });
      setBooking(filteredData);
    } else {
      setError("error");
    }
  };

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
      selector: (row) => (
        <div>
          {row.slots.map((data) => (
            <p className="my-1">{data}</p>
          ))}
        </div>
      ),
    },
    {
      name: "Total",
      selector: (row) => row.total,
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
      date: new Date(value.date).toLocaleDateString("en-GB"),
      sports: value.sports,
      slots: value.slots,
      total: value.total,
    };
  });

  return (
    <>
      <div className="flex text-base mb-1 flex-col md:flex-row">
        <div className="ml-10">
          <p className="font-semibold">Filter by Date</p>
          <label htmlFor="" className="mr-1">
            From
          </label>
          <input
            type="date"
            name="bookin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none  p-2.5 mb-4"
            onChange={(e) => setDateStarting(e.target.value)}
          />
          <label htmlFor="" className="mr-1 ml-2">
            To
          </label>
          <input
            type="date"
            name="booking"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none  p-2.5 mb-4"
            onChange={(e) => setDateEnding(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded px-3  ml-3"
          >
            Search
          </button>
          {error !== "" && (
            <p className="text-sm text-red-700">From or To date not matching</p>
          )}
        </div>
        <div>
          <ReactToPrint
            trigger={() => (
              <button className="bg-red-500 text-white rounded px-3 mt-8 md:ml-96">
                Download PDF
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>
      <div ref={componentRef}>
        <DataTable
          columns={columns}
          data={tableData}
          customStyles={style}
          pagination
        />
      </div>
    </>
  );
}

export default BookingReportTable;
