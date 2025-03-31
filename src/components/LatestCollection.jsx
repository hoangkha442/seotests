import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"BỘ SƯU TẬP"} text2={"MỚI NHẤT"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Khám phá thế giới phong cách với các bộ sưu tập mới nhất của chúng
          tôi, được tuyển chọn kỹ lưỡng để mang đến cho bạn những xu hướng thời
          trang, trang trí nhà cửa và nhiều hơn thế nữa.
        </p>
      </div>

      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
