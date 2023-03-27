import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
// import { useMediaQuery } from 'react-responsive';

function Graph() {
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsWeatherVisible(true);
      } else {
        setIsWeatherVisible(false);
      }
      return () => {
        window.removeEventListener("resize", () => {});
      };
    });
  });
  useEffect(() => {
    let ctx = document.getElementById("myBarChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [3, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              time: {
                unit: "month",
              },
              gridLines: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 6,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 15000,
                maxTicksLimit: 5,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);

  return (
    <div className=" bg-slate-300 w-3/4 mx-auto mt-3 p-3 rounded-xl shadow-2xl">
      <h1 className="text-sm md:text-xl font-bold"> Bar Chart </h1>
      <canvas
        height={"100px"}
        width={isWeatherVisible ? "100px" : ""}
        id="myBarChart"
      ></canvas>
    </div>
  );
}

export default Graph;
