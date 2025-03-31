import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t">
      {/* Bên trái: Form thông tin vận chuyển */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"THÔNG TIN"} text2={"GIAO HÀNG"} />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Họ"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Tên"
          />
        </div>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="email"
          placeholder="Địa chỉ email"
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Địa chỉ (số nhà, tên đường)"
        />
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Thành phố"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Tỉnh/Thành"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="number"
            placeholder="Mã bưu điện"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Quốc gia"
          />
        </div>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="number"
          placeholder="Số điện thoại"
        />
      </div>

      {/* Bên phải: Tổng tiền & phương thức thanh toán */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        {/* Chọn phương thức thanh toán */}
        <div className="mt-12">
          <Title text1={"PHƯƠNG THỨC"} text2={"THANH TOÁN"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-600" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-600" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="RazorPay"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-600" : ""
                }`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                THANH TOÁN KHI NHẬN HÀNG
              </p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button
              onClick={() => {
                localStorage.removeItem("cartItems"); 
                navigate("/orders");
                window.location.reload();
              }}
              className="px-16 py-3 text-sm text-white bg-black active:bg-gray-800"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
