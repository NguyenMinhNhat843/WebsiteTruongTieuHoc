import { Award, Heart, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-bg hero-zoom absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/30 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white max-w-2xl">
            <div className={`hero-text-1 ${heroLoaded ? "loaded" : ""}`}>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-heading font-700 px-4 py-1.5 rounded-full mb-5 border border-white/30">
                🎉 Đăng ký nhập học 2025–2026
              </span>
              <h1 className="font-heading text-5xl lg:text-6xl font-900 leading-tight mb-5">
                Nơi mọi đứa trẻ{" "}
                <span className="text-yellow-300 relative inline-block">
                  Tỏa sáng
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 C 50 2, 150 2, 198 6"
                      stroke="#FDE68A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Rạng ngời
              </h1>
            </div>
            <div className={`hero-text-2 ${heroLoaded ? "loaded" : ""}`}>
              <p className="text-white/85 text-lg leading-relaxed mb-8 font-light max-w-lg">
                Tại Tiểu học TerchCorp, chúng tôi xây dựng những trí tuệ ham học
                hỏi, những trái tim nhân ái và những người học tự tin — trong
                một môi trường nuôi dưỡng nơi mọi trẻ em đều thuộc về.
              </p>
            </div>
            <div
              className={`hero-btns ${heroLoaded ? "loaded" : ""} flex flex-wrap gap-4`}
            >
              <button className="btn-primary px-8 py-3.5 text-base shadow-xl shadow-blue-900/30">
                Đăng ký ngay →
              </button>
              <button className="btn-outline px-8 py-3.5 text-base">
                Khám phá Chương trình
              </button>
            </div>
          </div>
          <div
            className={`hero-card ${heroLoaded ? "loaded" : ""} float-card relative group`}
          >
            {/* Đổ bóng trang trí phía sau để tạo chiều sâu */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-100 to-indigo-100 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white/90 backdrop-blur-xl rounded-4xl p-6 shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-white/60 w-70">
              {/* Header: Làm gọn lại và dùng icon Lucide */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100/50">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="font-heading font-bold text-gray-800 text-sm leading-tight">
                  Tổng quan <br />{" "}
                  <span className="text-blue-600">về trường</span>
                </div>
              </div>

              {/* List stats: Sử dụng Lucide Icons và màu sắc tinh tế hơn */}
              <div className="space-y-5">
                {[
                  {
                    value: "1,200+",
                    label: "Học sinh",
                    icon: Users,
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    value: "98%",
                    label: "Hài lòng",
                    icon: Heart,
                    color: "text-pink-500",
                    bg: "bg-pink-50",
                  },
                  {
                    value: "25+",
                    label: "Năm kinh nghiệm",
                    icon: Award,
                    color: "text-amber-500",
                    bg: "bg-amber-50",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div
                      className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center transition-transform group-hover/item:scale-110`}
                    >
                      <s.icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div>
                      <div
                        className={`font-heading font-900 text-xl ${s.color} leading-none`}
                      >
                        {s.value}
                      </div>
                      <div className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mt-1">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trang trí thêm một chút ở góc */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm rotate-12">
                TOP 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-divider absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,20 1080,80 1440,40 L1440,80 L0,80 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
