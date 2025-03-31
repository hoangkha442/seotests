import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-10 text-center">
      <p className="text-2xl font-medium text-gray-800">
        Nhận ưu đãi 20% | Đăng ký ngay hôm nay!
      </p>
      <p className="mt-3 text-gray-400">
        Đừng bỏ lỡ – đăng ký bên dưới để nhận ngay ưu đãi hấp dẫn!
      </p>
      <form
        onClick={onSubmitHandler}
        className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2"
      >
        <input
          className="w-full outline-none sm:flex-1"
          type="email"
          placeholder="nhapemail@gmail.com"
          required
        />
        <button
          type="submit"
          className="px-10 py-4 text-xs text-white bg-black"
        >
          ĐĂNG KÝ
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
