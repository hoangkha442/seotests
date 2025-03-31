import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
      {/* Thông tin sản phẩm */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* Hình ảnh sản phẩm */}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  onClick={() => setImage(item)}
                  className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${image === item ? 'border-2 border-gray-600 py-2 px-2' : ''}`}
                  alt="Ảnh sản phẩm"
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="Ảnh lớn" />
          </div>
        </div>
        {/* Thông tin chi tiết */}
        <div className='flex-1'>
          <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="Ratings" className="w-3 5" />
            <img src={assets.star_icon} alt="Ratings" className="w-3 5" />
            <img src={assets.star_icon} alt="Ratings" className="w-3 5" />
            <img src={assets.star_icon} alt="Ratings" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="Ratings" className="w-3 5" />
            <p className='pl-2'>(122 đánh giá)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Chọn kích cỡ</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 rounded-md ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'
          >
            THÊM VÀO GIỎ HÀNG
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <p>Cam kết hàng chính hãng 100% – Mua sắm an tâm!</p>
            <p>Hỗ trợ thanh toán khi nhận hàng (COD) – Giao hàng tận nơi!</p>
            <p>Đổi trả dễ dàng trong 10 ngày – Không cần lý do!</p>
          </div>
        </div>
      </div>

      {/* Mô tả & đánh giá */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='px-5 py-3 text-sm border'>Mô tả</b>
          <p className='px-5 py-3 text-sm border'>Đánh giá (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border'>
          <p>Nâng tầm phong cách của bạn với các sản phẩm chất lượng cao đến từ ST Collection. Được thiết kế tinh tế, cân bằng giữa sự thanh lịch và tính ứng dụng, sản phẩm của chúng tôi sử dụng chất liệu cao cấp, đảm bảo độ bền và sự thoải mái.</p>
          <p>Dù bạn đang chuẩn bị cho một dịp đặc biệt hay chỉ muốn thêm phần chỉnh chu cho vẻ ngoài hàng ngày, sản phẩm của ST Collection mang đến sự linh hoạt vượt trội. Thiết kế cổ điển, vừa vặn hoàn hảo – chắc chắn là item không thể thiếu trong tủ đồ của bạn. Trải nghiệm sự khác biệt ngay hôm nay.</p>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
