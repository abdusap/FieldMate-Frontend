import React, { useEffect, useState } from "react";
import {
  bookSlotApi,
  createOrderApi,
  getWalletAndPriceApi,
  paymentSuccessApi,
} from "../../Helpers/UserApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SlotCheckoutBox() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const [wallet, setWallet] = useState(0);
  const [walletUsed, setWalletUsed] = useState(0);
  const [slotPrice, setSlotPrice] = useState("");
  const [total, setTotal] = useState("");

  const turfId = location.state.turfId;
  const { id } = useSelector((state) => state.user);
  useEffect(() => {
    getWalletAndPriceApi(id, turfId).then((res) => {
      console.log(res);
      setWallet(res.data.wallet);
      setSlotPrice(res.data.slotPrice);
      setTotal(res.data.slotPrice * location.state.slots.length);
    });
  }, []);

  function handleChecked() {
    setIsChecked(true);
    if (wallet < total) {
      setWalletUsed(wallet);
      setTotal(total - wallet);
    } else {
      setWalletUsed(location.state.slots.length * slotPrice);
      setTotal(0);
    }
  }

  function handleUnchecked() {
    setIsChecked(false);
    setWalletUsed(0);
    setTotal(location.state.slots.length * slotPrice);
  }

  const handleBooking = () => {
    if (total !== 0) {
      displayRazorpay(total);
    } else {
      const data = {
        userId: id,
        turfId: location.state.turfId,
        date: location.state.date,
        slots: location.state.slots,
        sportsId: location.state.sportsId,
        sportsName: location.state.sportsName,
        total: location.state.slots.length * slotPrice,
        walletUsed: walletUsed,
      };
      bookSlotApi(data).then((res) => {
        navigate("/success");
      });
    }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(total) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await createOrderApi(total);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "FieldMate",
      description: "Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await paymentSuccessApi(data);
        console.log(result);
        if (result.data.msg) {
          if (walletUsed === 0) {
            const data = {
              userId: id,
              turfId: location.state.turfId,
              date: location.state.date,
              slots: location.state.slots,
              sportsId: location.state.sportsId,
              sportsName: location.state.sportsName,
              total: location.state.slots.length * slotPrice,
              paymentAmount: total,
            };
            bookSlotApi(data).then((res) => {
              if (res.data.success) {
                navigate("/success");
              }
            });
          } else {
            const data = {
              userId: id,
              turfId: location.state.turfId,
              date: location.state.date,
              slots: location.state.slots,
              sportsId: location.state.sportsId,
              sportsName: location.state.sportsName,
              total: location.state.slots.length * slotPrice,
              paymentAmount: total,
              walletUsed: walletUsed,
            };
            bookSlotApi(data).then((res) => {
              if (res.data.success) {
                navigate("/success");
              }
            });
          }
        }
        //   alert(result.data.msg);
      },
      prefill: {
        name: "Abdulla",
        email: "sapabdu@gmail.com",
        contact: "7736600289",
      },
      notes: {
        address: "FieldMate Hilite Business Park",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      <div className="bg-white w-80  px-10 py-8 mx-auto my-10 rounded-md ">
        <p className="text-base  font-semibold  text-center">Slot Checkout</p>

        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Selected Sports:
            </label>
          </div>
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
            >
              {location.state.sportsName}
            </label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Selected Date:
            </label>
          </div>
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
            >
              {new Date(location.state.date).toLocaleDateString("en-GB")}
            </label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Selected Slots:
            </label>
          </div>
          <div className="w-1/2">
            {location.state.slots.map((data) => (
              <label
                for="first_name"
                class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
              >
                {data}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Slot Price:
            </label>
          </div>
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
            >
              ₹{slotPrice}
            </label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Sub Total:
            </label>
          </div>
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
            >{`₹${location.state.slots.length * slotPrice}`}</label>
          </div>
        </div>
        <div className="flex flex-row">
  
          {wallet !== 0 ? (
            <div className="flex">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={isChecked ? handleUnchecked : handleChecked}
              />
              <p className="font-medium text-sm ml-2">{`Use your ₹${wallet} Wallet Balance`}</p>
            </div>
          ) : (
            <p className="font-normal text-sm ml-2">
              Your wallet Balance is ₹0
            </p>
          )}
        </div>
        {walletUsed !== 0 && (
          <div className="flex flex-row">
            <div className="w-1/2">
              <label
                for="first_name"
                class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
              >
                Wallet Used:
              </label>
            </div>
            <div className="w-1/2">
              <label
                for="first_name"
                class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
              >
                ₹{walletUsed}
              </label>
            </div>
          </div>
        )}
        <div className="flex flex-row">
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-normal text-gray-900 "
            >
              Total:
            </label>
          </div>
          <div className="w-1/2">
            <label
              for="first_name"
              class="block mb-1 mt-2 text-sm font-medium text-gray-900 "
            >
              ₹{total}
            </label>
          </div>
        </div>

    

        <div className="grid grid-cols-3 gap-4"></div>
        <div className="flex ">
          <button
            type="submit"
            onClick={handleBooking}
            className="mx-auto bg-black text-white px-2 rounded-lg py-1 mt-4"
          >{`${total === 0 ? "Book" : "Pay"}`}</button>
        </div>
      </div>
    </>
  );
}

export default SlotCheckoutBox;
