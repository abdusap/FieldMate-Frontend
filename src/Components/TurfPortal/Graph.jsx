import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
// import { useMediaQuery } from 'react-responsive';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Graph({label1,label2,label3,label4,data1,data2,data3,data4}) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // const [isWeatherVisible, setIsWeatherVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth < 768) {
  //       setIsWeatherVisible(true);
  //     } else {
  //       setIsWeatherVisible(false);
  //     }
  //     return () => {
  //       window.removeEventListener("resize", () => {});
  //     };
  //   });
  // });
  // useEffect(() => {
  //   let ctx = document.getElementById("myBarChart");
  //   new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["January", "February", "March", "April", "May"],
  //       datasets: [
  //         {
  //           label: "Revenue",
  //           backgroundColor: "rgba(2,117,216,1)",
  //           borderColor: "rgba(2,117,216,1)",
  //           data: [24, 0, 0, 0, 0],
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [{
  //           time: {
  //             unit: 'month'
  //           },
  //           gridLines: {
  //             display: false
  //           },
  //           ticks: {
  //             maxTicksLimit: 6
  //           }
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             min: 0,
  //             max: 15000,
  //             maxTicksLimit: 5
  //           },
  //           gridLines: {
  //             display: true
  //           }
  //         }],
  //       },
  //       legend: {
  //         display: false
  //       }
  //     }
  //   });
  // }, []);


  const data = {
    // labels: ['Cancelled Turf', 'Users', 'Turf Approved', 'Turfs', 'Purple', 'Orange'],
    labels: [label1, label2, label3, label4 ],
    datasets: [
      {
        label: '# of Votes',
        data: [data1,data2,data3,data4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" bg-slate-200 md:w-2/4 w-fit mx-auto mt-3 p-3 rounded-xl shadow-2xl">
      <h1 className="text-sm md:text-xl font-bold"> Pie Chart </h1>
      {/* <canvas
        height={"100px"}
        width={isWeatherVisible ? "100px" : ""}
        id="myBarChart"
      ></canvas> */}
      <div className="w-80 h-80 flex mx-auto">

      <Pie data={data} />
      </div>
    </div>
  );
}

export default Graph;
