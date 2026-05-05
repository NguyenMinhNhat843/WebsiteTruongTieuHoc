import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

// Đảm bảo đã import styles swiper như ở Section 3
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Chị Minh Thư",
    role: "Phụ huynh bé Gia Bảo (Lớp 2A)",
    content:
      "Tôi rất an tâm khi gửi con tại trường. Không chỉ về kiến thức, con còn trở nên tự tin và biết quan tâm đến mọi người xung quanh hơn nhờ các hoạt động ngoại khóa.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Anh Hoàng Nam",
    role: "Phụ huynh bé Tuệ Lâm (Lớp 1B)",
    content:
      "Cơ sở vật chất của trường rất hiện đại, nhưng điều tôi ấn tượng nhất là sự tận tâm của các cô giáo. Các cô luôn cập nhật tình hình của con sát sao cho gia đình.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Chị Ngọc Lan",
    role: "Phụ huynh bé Bảo Nam (Lớp 4C)",
    content:
      "Chương trình tiếng Anh của trường rất hiệu quả. Con tôi từ một đứa trẻ nhút nhát giờ đã có thể tự tin giao tiếp cơ bản với người nước ngoài.",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150",
  },
];
const doubleTestimonials = [...testimonials, ...testimonials];

const ParentFeedback = () => {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chia Sẻ Từ Phụ Huynh
          </h2>
          <p className="text-blue-200">
            Những lời động viên quý giá giúp nhà trường không ngừng hoàn thiện.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16 testimonial-swiper"
          >
            {doubleTestimonials.map((item, index) => (
              <SwiperSlide key={index} className="pb-16">
                <div className="bg-white h-75 flex flex-col justify-between text-gray-800 p-8 md:p-10 rounded-4xl shadow-2xl relative mt-10 transition-all duration-300 hover:scale-[1.02]">
                  {/* Icon nháy kép trang trí */}
                  <div className="absolute -top-6 left-10 bg-yellow-400 p-4 rounded-2xl shadow-lg text-blue-900">
                    <Quote size={24} fill="currentColor" />
                  </div>

                  <p className="text-lg leading-relaxed italic text-gray-600 mb-8 pt-4">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-blue-900">{item.name}</h4>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ParentFeedback;
