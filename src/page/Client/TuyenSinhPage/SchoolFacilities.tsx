import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const facilities = [
  {
    id: 1,
    title: "Lớp học tiêu chuẩn",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    desc: "Không gian học tập đầy đủ ánh sáng tự nhiên và trang thiết bị hiện đại.",
  },
  {
    id: 2,
    title: "Sân chơi trải nghiệm",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=1200",
    desc: "Nơi các em vận động tự do và gắn kết tình bạn qua các trò chơi ngoài trời.",
  },
  {
    id: 3,
    title: "Phòng chức năng",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200",
    desc: "Phòng âm nhạc, mỹ thuật giúp khơi dậy tiềm năng nghệ thuật của học sinh.",
  },
  {
    id: 4,
    title: "Hoạt động ngoại khóa",
    image:
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=1200",
    desc: "Các buổi dã ngoại thực tế giúp học sinh khám phá thế giới xung quanh.",
  },
  {
    id: 5,
    title: "Hoạt động ngoại khóa",
    image:
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=1200",
    desc: "Các buổi dã ngoại thực tế giúp học sinh khám phá thế giới xung quanh.",
  },
];

const SchoolFacilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Tiêu đề Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Cơ Sở Vật Chất Hiện Đại
            </h2>
            <p className="text-gray-500">
              Môi trường tốt nhất để trẻ phát huy tối đa khả năng
            </p>
          </div>
          <div className="hidden md:block" data-aos="fade-left">
            <button className="text-blue-600 font-semibold hover:underline">
              Xem tất cả hình ảnh &rarr;
            </button>
          </div>
        </div>

        {/* 1. Desktop Layout: Grid 2-3 cột */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group ${index === 0 ? "lg:col-span-2" : ""}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[16/9] lg:aspect-auto lg:h-[300px]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy" // Native Lazy Load
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-gray-200 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Mobile Layout: Slider ngang */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {facilities.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg text-blue-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
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

export default SchoolFacilities;
