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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-transparent" />
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
          <div className={`hero-card ${heroLoaded ? "loaded" : ""} float-card`}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 shadow-2xl min-w-[240px] border border-white/50">
              <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-200">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="font-heading font-800 text-gray-900 text-base">
                  Tổng quan về trường
                </div>
              </div>
              {[
                { value: "1,200+", label: "Học sinh hạnh phúc" },
                { value: "98%", label: "Độ hài lòng của phụ huynh" },
                { value: "25+", label: "Năm thành tựu" },
              ].map((s, i, a) => (
                <div
                  key={i}
                  className={`text-center py-3 ${i < a.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="font-heading font-900 text-3xl text-blue-600">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
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
