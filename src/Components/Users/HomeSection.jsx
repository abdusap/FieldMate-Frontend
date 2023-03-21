import React from 'react'

function HomeSectionMeet() {
  return (
    <div className='flex md:flex-row flex-col'>
        <div className='md:w-1/2 flex justify-center py-8 '>
<img className='w-1/2 ' src="/image/meet-pals.png" alt="meet-pals" />
        </div>
        <div className='md:w-1/2 flex flex-col md:self-center md:gap-4'>
<div className='text-green-500'>
<h1 className='text-3xl md:text-4xl font-bold text-center'>MEET YOUR PALS OVER GAME</h1>
</div>
<div className='text-white text-center pb-3'>
<p>Want to play games ?</p>
<p>But don't get an opponent team?</p>
<p>You can Invite a team or Join a pre scheduled match Through FieldMate</p>
</div>
        </div>
    </div>
  )
}

export default HomeSectionMeet