import { ArrowRight, GraduationCap } from "lucide-react";

const SchoolHero = () => {
  return (
    <header className="relative w-full overflow-hidden">
      {/* 1. Thanh Navigation Phụ (Top Bar) */}
      <div className="bg-[#0056b3] text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Chào mừng bạn đến với Ngôi Trường Hạnh Phúc</span>
          <div className="flex gap-4">
            <span>Hotline: 0123 456 789</span>
            <span>Email: lienhe@truongtieuhoc.edu.vn</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Content Area */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Lớp nền Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" // Thay bằng ảnh thật của trường
            alt="Học sinh trường tiểu học"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/40 to-transparent"></div>
        </div>

        {/* Nội dung chính */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            {/* Logo hoặc Badge nhỏ */}
            <div
              className="flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full border border-white/30"
              data-aos="fade-down"
            >
              <GraduationCap size={20} className="text-yellow-400" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Hệ thống giáo dục chuẩn quốc tế
              </span>
            </div>

            {/* Slogan */}
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Môi trường học tập <br />
              <span className="text-yellow-400">an toàn – phát triển</span>{" "}
              <br />
              toàn diện cho trẻ
            </h1>

            {/* Sub-text */}
            <p
              className="text-lg md:text-xl mb-8 text-blue-50 font-light"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Nơi mỗi học sinh đều được khơi nguồn tiềm năng, rèn luyện nhân
              cách và trang bị kiến thức vững chắc cho tương lai.
            </p>

            {/* CTA Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={() =>
                  document
                    .getElementById("register-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>ĐĂNG KÝ TUYỂN SINH 2026–2027</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>

        {/* Hiệu ứng sóng nhấp nhô mạnh mẽ nhưng mượt mà */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[70px] md:h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 
              C300,120 900,0 1200,60 
              L1200,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
    </header>
  );
};

export default SchoolHero;
