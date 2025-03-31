import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
    <div className='pt-10 text-2xl text-center border-t'>
      <Title text1={'LIÊN HỆ'} text2={'VỚI CHÚNG TÔI'} />
    </div>
  
    <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Ảnh liên hệ" />
  
      <div className='flex flex-col items-start justify-center gap-6'>
        <p className='text-xl font-semibold text-gray-600'>Cửa hàng của chúng tôi</p>
        <p className='text-gray-500'>
          Đại học Văn Lang Cơ sở 3 <br />
          69/68 Đ. Đặng Thuỳ Trâm
        </p>
        <p className='text-gray-500'>
          Điện thoại: 0981 044 227 <br />
          Email: leduy@gmail.com
        </p>
  
        <p className='text-xl font-semibold text-gray-600'>Cơ hội nghề nghiệp tại Trendify</p>
        <p className='text-gray-500'>
          Hãy gia nhập Trendify! Khám phá các vị trí tuyển dụng và cùng chúng tôi định hình tương lai ngành thời trang. <br />
          Tìm hiểu các cơ hội việc làm hiện tại và khám phá cách bạn có thể đóng góp vào sứ mệnh tạo nên xu hướng và phong cách của chúng tôi.
        </p>
  
        <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-gray-800 hover:text-white'>
          Khám phá việc làm
        </button>
      </div>
    </div>
  
    <NewsLetterBox />
  </div>
  
  )
}

export default Contact
