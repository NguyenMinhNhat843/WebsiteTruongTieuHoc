import { useInView } from "../../../../hooks/useInvew";
import { NEWS } from "../../../../Mock/MockData/Home/homeMockData";

const NewsEventSection = () => {
  const [newsRef, newsInView] = useInView();

  return (
    <section className="py-24 px-6 bg-gray-50" ref={newsRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-14 stagger-1 ${newsInView ? "stagger-visible" : ""}`}
        >
          <span className="inline-block text-blue-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Cập nhật mới nhất
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-4">
            Tin tức & <span className="text-blue-500">Sự kiện</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Cập nhật mọi hoạt động đang diễn ra tại Sunrise — từ những cột mốc
            quan trọng, thành tích nổi bật đến các sự kiện sắp tới.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((n, i) => (
            <div
              key={i}
              className={`news-card bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 cursor-pointer stagger-${i + 1} ${newsInView ? "stagger-visible" : ""}`}
            >
              <div className="overflow-hidden" style={{ height: 210 }}>
                <img
                  src={n.img}
                  alt={n.title}
                  className="news-img w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-heading font-700 px-3 py-1 rounded-full ${
                      n.category === "Events"
                        ? "bg-blue-100 text-blue-600"
                        : n.category === "Achievement"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {n.category}
                  </span>
                  <span className="text-gray-400 text-xs">{n.date}</span>
                </div>
                <h3 className="font-heading font-800 text-gray-900 text-lg leading-snug mb-3">
                  {n.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {n.preview}
                </p>
                <button
                  className="text-blue-500 font-heading font-700 text-sm hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Đọc thêm
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`text-center mt-12 stagger-4 ${newsInView ? "stagger-visible" : ""}`}
        >
          <button
            className=" font-heading font-700 text-blue-600 border-2 border-blue-200 rounded-full px-8 py-3.5 text-sm hover:bg-blue-50 transition-colors"
            style={{ background: "white", cursor: "pointer" }}
          >
            Xem tất cả tin tức & sự kiện
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventSection;
