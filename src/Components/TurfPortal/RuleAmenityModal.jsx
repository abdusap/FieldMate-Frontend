import React,{useState} from 'react'

function RuleAmenityModal({title,modal,setModal,handleSubmit}) {
    const [numBoxes, setNumBoxes] = useState(0);
  return (
    <>
{/* {amenityModal && */}

<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded w-96 m-5">
        <div className="flex justify-between">
        <h1 className="font-semibold text-center text-2xl px-5 my-5 text-gray-700">
          {title}
        </h1>
        <button className="font-semibold mr-3 mb-8 text-xl" onClick={()=>setModal(!modal)}>X</button>
        </div> 
        <div className="flex flex-col  p-5">
        <form  onSubmit={handleSubmit}>
        {/* <input type="text" id="first_name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location" /> */}
        {/* <input type="text" id="first_name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location" /> */}
        {/* <input type="text" id="first_name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location" /> */}
        {/* <input type="text" id="first_name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location" /> */}
        {[...Array(numBoxes)].map((_, i) => (
        <input type="text" id="first_name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location" />
        ))}
        <div className={`${numBoxes>=4? 'hidden':''} bg-gray-300 rounded-lg h-10 cursor-pointer mt-1 w-full text-slate-600`} onClick={()=>setNumBoxes(numBoxes + 1)} disabled={numBoxes>=4}>
        <p className='text-center'>+</p>
        </div>
        <div className="text-center p-2">
          <button  type='submit' className=" px-5 py-1 bg-gray-700 text-white text-lg rounded">
            Submit
          </button>
        </div>
        </form>
        </div>
      </div>
    </div>
{/* } */}
    </>
  )
}

export default RuleAmenityModal