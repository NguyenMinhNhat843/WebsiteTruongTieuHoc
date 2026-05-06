// ============================================================
// COMPONENT: Hero Banner

import { useEffect, useState } from "react";

// ============================================================
export default function HeroBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-85 mt-16 overflow-hidden">
      {/* BG Image with zoom */}
      <div
        className={`absolute inset-0 transition-transform duration-6000 ease-out ${loaded ? "scale-110" : "scale-100"}`}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1400&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-blue-800/40 to-transparent" />
      {/* Decorative shapes */}
      <div className="absolute top-6 right-12 w-20 h-20 rounded-full bg-yellow-400/20 blur-xl" />
      <div className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-sky-300/15 blur-2xl" />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end pb-10 px-6 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-300 mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sky-200 text-sm font-semibold">
              Trang chủ
            </span>
            <span className="text-sky-300 text-sm">›</span>
            <span className="text-sky-200 text-sm font-semibold">Tin tức</span>
            <span className="text-sky-300 text-sm">›</span>
            <span className="text-yellow-300 text-sm font-semibold">
              Chi tiết
            </span>
          </div>

          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full mb-3">
            🏫 Hoạt động trường
          </span>

          {/* Title */}
          <h1 className="text-white font-extrabold text-2xl md:text-3xl leading-snug max-w-3xl drop-shadow-md">
            Lễ khai giảng năm học 2025–2026: Ngày hội tựu trường đầy sắc màu và
            niềm vui
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            {[
              { icon: "📅", text: "22/04/2025" },
              { icon: "✍️", text: "Nguyễn Thị Lan" },
              { icon: "👁️", text: "1.248 lượt xem" },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-sky-100 text-xs font-semibold"
              >
                <span>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
