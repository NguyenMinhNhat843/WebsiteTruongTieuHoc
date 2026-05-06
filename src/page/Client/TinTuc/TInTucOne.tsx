import { useEffect } from "react";
import HeroBanner from "./TinTucOneComponents/HeroBannerSection";
import ArticleContent from "./TinTucOneComponents/ArticleContent";
import { useScrollReveal } from "./hook/useScrollReveal";
import Sidebar from "./TinTucOneComponents/SideBar";

function CTABlock() {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`mt-8 rounded-2xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #fef9c3 100%)",
      }}
    >
      <div className="p-8 text-center">
        <div className="text-4xl mb-3">🎓</div>
        <h3
          className="text-blue-800 font-extrabold text-xl mb-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Tuyển sinh năm học 2025–2026
        </h3>
        <p
          className="text-blue-600 text-sm mb-6 max-w-sm mx-auto"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Đăng ký ngay hôm nay để con bạn được trải nghiệm môi trường học tập
          tốt nhất tại Ánh Bình Minh!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="px-8 py-3 bg-linear-to-r from-yellow-400 to-amber-400 text-yellow-900 font-extrabold text-sm rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            📋 Đăng ký tuyển sinh
          </button>
          <button
            className="px-8 py-3 bg-white text-blue-700 font-extrabold text-sm rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-blue-200"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            📞 Gọi tư vấn ngay
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ROOT: NewsDetailPage
// ============================================================
export default function NewsDetailPage() {
  // Load Nunito font
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0f7ff" }}>
      <HeroBanner />

      {/* Main Layout */}
      <main className="max-w-300 mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Column */}
          <div className="flex-1 min-w-0">
            <ArticleContent />
            <CTABlock />
          </div>

          {/* Sidebar Column */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
