import React from 'react'

function ReviewDetailsBox({title,id,message,rating,date}) {
  return (
    <div className='w-full  h-fit text-base px-4 rounded-lg py-1 my-2 border-2'>
<div className='flex justify-between'>
<span className='font-semibold'>Title <span className='font-normal'>{title}</span></span>
<span className='font-semibold'>Id <span className='font-normal'>{id}</span></span>
</div>
<div>
    <span className='font-semibold'>Message <span className='font-normal'>{message}</span></span>
</div>
<div className='flex justify-between'>
<span className='font-semibold'>Rating <span className='font-normal'>{rating} Star</span></span>
<span className='font-semibold'>Date <span className='font-normal'>{new Date(date).toLocaleDateString('en-GB')}</span></span>
</div>
    </div>
  )
}

export default ReviewDetailsBox