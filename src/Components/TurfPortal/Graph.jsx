import React, { useEffect,useState } from 'react'
import Chart from 'chart.js/auto';
// import { useMediaQuery } from 'react-responsive';


function Graph() {
    const [isWeatherVisible, setIsWeatherVisible] = useState(false);
    // const isMdScreen = useMediaQuery({ minWidth: '768px' });
    // const isLgScreen = useMediaQuery({ minWidth: '1024px' });
    // const isXlScreen = useMediaQuery({ minWidth: '1280px' });
//  console.log('scre'+isMdScreen)
//     useEffect(() => {
//         if (isMdScreen) {
//           setIsWeatherVisible(true);
//         } else {
//           setIsWeatherVisible(false);
//         }
//       }, [isMdScreen]);

      
useEffect(() => {
    window.addEventListener("resize", () => {
    //    console.log(window.innerWidth)
       if(window.innerWidth < 768){
        setIsWeatherVisible(true)
       }else{
        setIsWeatherVisible(false)
       }
       return () => {
           window.removeEventListener('resize',()=>{})
       }
    })   
   })
// console.log("hai"+isWeatherVisible)
    useEffect(()=>{
        let ctx = document.getElementById("myBarChart");
        new Chart(ctx, {
         type: 'bar',
         data: {
           labels: ["January", "February", "March", "April", "May", "June"],
           datasets: [{
             label: "Revenue",
             backgroundColor: "rgba(2,117,216,1)",
             borderColor: "rgba(2,117,216,1)",
             data: [3, 0, 0, 0, 0, 0],
           }],
         },
         options: {
           scales: {
             xAxes: [{
               time: {
                 unit: 'month'
               },
               gridLines: {
                 display: false
               },
               ticks: {
                 maxTicksLimit: 6
               }
             }],
             yAxes: [{
               ticks: {
                 min: 0,
                 max: 15000,
                 maxTicksLimit: 5
               },
               gridLines: {
                 display: true
               }
             }],
           },
           legend: {
             display: false
           }
         }
       });
    },[])

  return (
    <div className=" bg-slate-300 w-3/4 mx-auto mt-3 p-3 rounded-xl shadow-2xl">
            {/* <i className=""></i> */}
           <h1 className='text-sm md:text-xl font-bold'>  Bar Chart  </h1> 
           <canvas height={'100px'} width={isWeatherVisible ? '100px':''} id="myBarChart"></canvas>
</div>
  )
}

export default Graph