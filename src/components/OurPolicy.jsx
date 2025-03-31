import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-3"
          alt="Đổi trả"
        />
        <p className="mb-2 font-semibold">Chính sách đổi trả dễ dàng</p>
        <p className="text-gray-400">Hỗ trợ đổi/trả hàng trong vòng 10 ngày.</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-3"
          alt="Chất lượng"
        />
        <p className="mb-2 font-semibold">Cam kết chất lượng</p>
        <p className="text-gray-400">
          Trendify cam kết sản phẩm chất lượng cao.
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-3"
          alt="Hỗ trợ"
        />
        <p className="mb-2 font-semibold">Hỗ trợ khách hàng tận tâm</p>
        <p className="text-gray-400">
          Hỗ trợ qua email, điện thoại hoặc chat trực tuyến.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
