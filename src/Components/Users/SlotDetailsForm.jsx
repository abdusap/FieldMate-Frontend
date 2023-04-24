import React, { useState } from 'react'

function SlotDetailsForm() {
    const [minDate, setMinDate] = useState(new Date().toISOString().split('T')[0]);
  return (
    <>
         <div className='bg-white w-fit p-10 mx-auto rounded-md'>
          <p className='text-base font-semibold  text-center'>Slot Details</p>
            <form action="">
                <div>
                <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Select Sports</label>
                <select name="" id=""  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5">
                    <option value="football">football</option>
                    <option value="football">football</option>
                </select>
                </div>
                    <div>
            <label  for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Select Date</label>
            <input   type="date" min={minDate} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Email" />
        </div>
        {/* <div>
        <label for="slot1"><span className='bg-green'>Available</span></label>
  <input type="radio" id="slot1" name="slot" value="slot1"/>

  <label for="slot2"><span className='bg-red'>Booked</span></label>
  <input type="radio" id="slot2" name="slot" value="slot2"/>

  <label for="slot3"><span className='bg-green'>Available</span></label>
  <input type="radio" id="slot3" name="slot" value="slot3"/>
  <label for="slot3"><span className='bg-green'>Available</span></label>
  <input type="radio" id="slot3" name="slot" value="slot3"/>
        </div> */}
        <div className="grid grid-cols-3 gap-4">
        <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1 ">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>
  <div>
    <label htmlFor="slot2" className="block cursor-pointer">
      <span className="bg-red p-1">Booked</span>
      <input type="radio" id="slot2" name="slot" value="slot2" className="appearance-none checked:bg-red-500" />
    </label>
  </div>
  <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1 checked:bg-blue-500">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>
  <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>
  <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>
  <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>
  <div>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1">Available</span>
      <input type="radio" id="slot3" name="slot" value="slot3" className="" />
    </label>
  </div>

</div>
<div className='flex '>
    <button className='mx-auto bg-black text-white px-2 rounded-lg py-1'>Submit</button>
</div>

        {/* <p className="text-green-500 hover:text-red-500 active:text-red-500">
      Click me to change my color!
    </p>
    <p className="text-green-500 focus:text-red-500 cursor-pointer">
      Click me to change my color!
    </p> */}
            </form>

        </div>
    </>
  )
}

export default SlotDetailsForm