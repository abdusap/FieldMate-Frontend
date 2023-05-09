import React, { useEffect } from 'react'
import SlotCheckoutBox from '../../Components/Users/SlotCheckout'
import { useLocation } from 'react-router-dom';

function SlotCheckout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
<SlotCheckoutBox/>
    </>
  )
}

export default SlotCheckout