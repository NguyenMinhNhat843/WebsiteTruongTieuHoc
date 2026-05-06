import { useState } from "react";
import { Calendar, ArrowRight, Tag as TagIcon } from "lucide-react";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const categories = [
    "Tất cả",
    "Hoạt động",
    "Thông báo",
    "Học thuật",
    "Năng khiếu",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section
        className="relative h-62.5 md:h-80 bg-linear-to-br from-green-400 to-blue-500 flex items-center overflow-hidden"
        data-aos="fade-down"
      >
        {/* Họa tiết minh họa học sinh mờ phía sau */}
        <div className="absolute inset-0 opacity-10 flex justify-around items-center">
          {[...Array(5)].map((_, i) => (
            <TagIcon key={i} size={120} className="rotate-12" />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-sm">
              Tin tức & Hoạt động
            </h1>
            <p className="text-blue-50 text-lg">
              Cập nhật những khoảnh khắc đáng nhớ và thông tin mới nhất từ mái
              trường Hạnh Phúc.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tin tức nổi bật (Featured Section) */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bài chính bên trái */}
          <div
            className="lg:col-span-2 group relative h-100 md:h-125 rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
            data-aos="zoom-in"
          >
            <a href="/tin-tuc/testdetail" className="">
              <img
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=1200"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Featured"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 p-8 md:p-12">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  Nổi bật
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Lễ hội trải nghiệm văn hóa dân gian 2026
                </h2>
                <p className="text-gray-200 line-clamp-2 max-w-xl mb-6">
                  Khám phá hành trình các em học sinh tự tay làm bánh chưng và
                  tham gia các trò chơi dân gian đầy màu sắc...
                </p>
                <div className="flex items-center text-white font-semibold gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  Xem chi tiết <ArrowRight size={20} />
                </div>
              </div>
            </a>
          </div>

          {/* 2 Bài nhỏ bên phải */}
          <div className="flex flex-col gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group relative h-[185px] md:h-[237px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
                data-aos="fade-left"
              >
                <a href="/tin-tuc/testdetail" className="">
                  <img
                    src={`https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&sig=${i}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Minor news"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                      Hội nghị phụ huynh đầu năm: Gắn kết yêu thương
                    </h3>
                    <div className="text-blue-300 text-sm mt-2 flex items-center gap-2">
                      <Calendar size={14} /> 20/04/2026
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filter Tabs & News Grid */}
      <section className="py-12 bg-white rounded-t-[4rem] shadow-inner">
        <div className="container mx-auto px-6">
          {/* Tab Bar */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
            data-aos="fade-up"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid bài viết */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <article key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="group bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800&sig=${i}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt="News"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Hoạt động
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center text-gray-400 text-sm mb-4 gap-2">
                      <Calendar size={16} /> 15/05/2026
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      Khai mạc hội thao "Chiến binh nhí" lần thứ IV năm học 2026
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                      Sáng nay, tiếng trống khai hội đã vang lên rộn rã tại sân
                      trường, mở đầu cho chuỗi hoạt động thể thao sôi động nhất
                      trong năm...
                    </p>
                    <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                      Xem tiếp <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Nút Xem thêm */}
          <div className="mt-20 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-12 rounded-2xl shadow-xl shadow-orange-100 transition-all hover:scale-110 active:scale-95 uppercase tracking-wider">
              Khám phá thêm tin tức
            </button>
          </div>
        </div>
      </section>

      {/* 4. CTA Khối kêu gọi */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-blue-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Vòng tròn trang trí mờ */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bạn muốn tìm hiểu kỹ hơn về trường?
              </h2>
              <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                Chúng tôi luôn sẵn sàng hỗ trợ tư vấn và đón tiếp quý phụ huynh
                đến tham quan trực tiếp môi trường học tập.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-5 px-14 rounded-2xl transition-all shadow-xl shadow-yellow-400/20 animate-pulse-slow uppercase">
                Nhận tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
