import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"VỀ"} text2={"CHÚNG TÔI"} />
      </div>

      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="Ảnh giới thiệu"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Chào mừng bạn đến với ST Collection – nơi phong cách gặp gỡ chất lượng.
            Sứ mệnh của chúng tôi là mang đến cho bạn những xu hướng thời trang
            mới nhất và các sản phẩm không thể thiếu, được tuyển chọn kỹ lưỡng
            về thiết kế và chất lượng. Chúng tôi tin rằng ai cũng xứng đáng thể
            hiện cá tính thông qua thời trang – và ST Collection sẽ giúp bạn làm điều
            đó dễ dàng và thú vị hơn.
          </p>
          <p>
            Tại ST Collection, sự hài lòng của bạn là ưu tiên hàng đầu. Từ lúc bạn
            truy cập trang web đến khi đơn hàng được giao đến tay, chúng tôi
            luôn nỗ lực mang lại trải nghiệm mua sắm trọn vẹn và mượt mà. Đội
            ngũ của chúng tôi không ngừng cập nhật xu hướng mới để bạn luôn là
            người đầu tiên sở hữu phong cách mới nhất. Cảm ơn bạn đã chọn
            ST Collection – rất vinh dự khi được đồng hành cùng phong cách của bạn.
          </p>

          <b className="text-gray-800">Sứ mệnh của chúng tôi</b>
          <p>
            ST Collection mong muốn truyền cảm hứng để bạn thể hiện phong cách riêng
            qua các sản phẩm thời trang chất lượng, hợp xu hướng. Chúng tôi
            hướng đến việc giúp ai cũng có thể tiếp cận thời trang dễ dàng, tự
            tin hơn mỗi ngày.
          </p>

          <b className="text-gray-800">Tầm nhìn của chúng tôi</b>
          <p>
            ST Collection hướng tới trở thành thương hiệu thời trang hàng đầu toàn
            cầu, nổi bật với phong cách tiên phong và chất lượng vượt trội.
            Chúng tôi muốn trở thành lựa chọn hàng đầu cho những ai mong muốn
            thể hiện bản thân qua thời trang.
          </p>
        </div>
      </div>

      <div className="py-4 text-xl">
        <Title text1={"VÌ SAO"} text2={"CHỌN CHÚNG TÔI"} />
      </div>

      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Cam kết chất lượng</b>
          <p className="text-gray-600">
            Tại ST Collection, chất lượng là trên hết. Mỗi sản phẩm đều được chọn lọc
            và kiểm tra kỹ lưỡng để đảm bảo đạt tiêu chuẩn cao. Bạn có thể yên
            tâm mua sắm với sự tin tưởng tuyệt đối vào chất lượng sản phẩm.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Tiện lợi và dễ dàng</b>
          <p className="text-gray-600">
            ST Collection mang đến trải nghiệm mua sắm mượt mà với giao diện thân
            thiện, giao hàng nhanh chóng, đổi trả dễ dàng và đa dạng phương thức
            thanh toán. Sự tiện lợi của bạn là ưu tiên của chúng tôi.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Dịch vụ khách hàng tận tâm</b>
          <p className="text-gray-600">
            ST Collection luôn cam kết mang đến dịch vụ tốt nhất. Đội ngũ hỗ trợ tận
            tình sẵn sàng giải đáp mọi thắc mắc và đồng hành cùng bạn trong suốt
            quá trình mua sắm.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
