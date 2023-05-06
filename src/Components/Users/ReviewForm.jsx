import React from "react";
import { addReviewApi } from "../../Helpers/UserApi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";



function ReviewForm({ modal, setModal}) {
    const {id}=useSelector((state)=>state.user)
    const location=useLocation()

const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
        userId:id,
        turfId:location.state,
        title:e.target[0].value,
        rating:e.target[1].value,
        message:e.target[2].value
    }
    
    addReviewApi(data).then((res)=>{
console.log(res.data.review);
if(res.data.review){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1200
      })
      setModal(!modal)
}
    })
}

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-2 rounded w-96 m-5">
          <div className="flex justify-between">
            <h1 className="font-semibold text-center text-2xl px-5 my-5 text-gray-700">
              Write a Review
            </h1>
            <button
              className="font-semibold mr-3 mb-8 text-xl"
              onClick={() => setModal(!modal)}
            >
              X
            </button>
          </div>
          <div className="flex flex-col px-5">
          <form onSubmit={handleSubmit}>
              <label htmlFor="" className="text-base">
                Title
              </label>
              <input
                type="text"
                name="price"
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                placeholder="Title"
                required
              />
              <label htmlFor="" className="text-base">
                Rating
              </label>
              <select  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label htmlFor="" className="text-base">
                Message
              </label>
              <textarea id="message" rows="4" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Leave a comment..." required></textarea>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center my-4">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewForm;
