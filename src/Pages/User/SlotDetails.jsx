import React,{useEffect} from 'react'
import SlotDetailsForm from '../../Components/Users/SlotDetailsForm'
import { useLocation } from "react-router-dom";

function SlotDetails() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <div className='py-6 flex'>
    <SlotDetailsForm/>
    </div>
    </>
  )
}

export default SlotDetails