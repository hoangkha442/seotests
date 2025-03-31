import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
  <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div>
      <Link to='/'>
        <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="Trendify" />
      </Link>
      <p className='w-full text-gray-600 md:w-2/3'>
        Cảm ơn bạn đã mua sắm tại Trendify! Chúng tôi cam kết mang đến cho bạn những xu hướng thời trang mới nhất và sản phẩm chất lượng cao. Hãy theo dõi chúng tôi trên mạng xã hội để cập nhật các mẫu mới, ưu đãi độc quyền và nhiều điều thú vị khác. Nếu bạn có bất kỳ thắc mắc nào, đội ngũ chăm sóc khách hàng thân thiện của chúng tôi luôn sẵn sàng hỗ trợ. Đăng ký nhận bản tin để nhận ưu đãi đặc biệt và cập nhật chương trình khuyến mãi mới nhất. Hành trình phong cách của bạn bắt đầu từ đây – hãy cùng tạo nên điều đáng nhớ!
      </p>
    </div>

    <div>
      <p className='mb-5 text-xl font-medium'>CÔNG TY</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <Link to='/'>
          <li>Trang chủ</li>
        </Link>
        <Link to='/about'>
          <li>Về chúng tôi</li>
        </Link>
        <Link to='/about'>
          <li>Giao hàng</li>
        </Link>
        <Link to='/about'>
          <li>Chính sách bảo mật</li>
        </Link>
      </ul>
    </div>

    <div>
      <p className='mb-5 text-xl font-medium'>LIÊN HỆ</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>0981 044 227</li>
        <li>leduy@gmail.com</li>
      </ul>
    </div>
  </div>

  <div>
    <hr />
    <p className='py-5 text-sm text-center'>© 2025 Trendify. Đã đăng ký bản quyền.</p>
  </div>
</div>

  )
}

export default Footer
