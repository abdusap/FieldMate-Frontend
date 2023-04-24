import React from 'react'

function FilterForm() {
  return (
    <>
    <div className=' bg-white w-fit h-fit pl-5 self-center md:self-start px-20 my-6 md:ml-9'>
        <ul >
          <p className='font-semibold mt-3'>Location</p>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox1" className='mr-1'/>
    <label for="checkbox1">Calicut</label>
  </li >
  <li className='mt-1'>
    <input type="checkbox" id="checkbox2" className='mr-1'/>
    <label for="checkbox2">Thrissur</label>
  </li>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox3" className='mr-1'/>
    <label for="checkbox3">Thiruvanathapuram</label>
  </li>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox4" className='mr-1'/>
    <label for="checkbox4">Kannur</label>
  </li>
</ul>
        <ul>
          <p className='font-semibold mt-2'>Sports</p>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox1" className='mr-1'/>
    <label for="checkbox1">Calicut</label>
  </li>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox2" className='mr-1'/>
    <label for="checkbox2">Thrissur</label>
  </li>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox3" className='mr-1'/>
    <label for="checkbox3">Thiruvanathapuram</label>
  </li>
  <li className='mt-1'>
    <input type="checkbox" id="checkbox4" className='mr-1'/>
    <label for="checkbox4">Kannur</label>
  </li>
</ul>
<button className='w-fit h-fit bg-blue-600 text-white px-1 rounded-md mb-3 mt-2'>Submit</button>
    
        </div>
    </>
  )
}

export default FilterForm