import { useInView } from "../../../../hooks/useInvew";

const AboutSection = () => {
  const [aboutRef, aboutInView] = useInView();

  return (
    <section className="py-24 px-6 bg-white" ref={aboutRef}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div
          className={`flex-1 about-img rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 stagger-1 ${aboutInView ? "stagger-visible" : ""}`}
        >
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop"
            alt="School classroom"
            className="w-full h-80 lg:h-[440px] object-cover"
          />
        </div>
        <div className={`flex-1 about-text ${aboutInView ? "visible" : ""}`}>
          <span className="inline-block text-green-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Về TechCorp
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-5 leading-tight">
            Xây dựng những nhà lãnh đạo tương lai,{" "}
            <span className="text-blue-500">tận tâm với từng trẻ nhỏ</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-5">
            Trong hơn 25 năm qua, Trường Tiểu học Sunrise đã là nền tảng vững
            chắc của cộng đồng chúng ta — nơi trẻ em khám phá niềm đam mê, xây
            dựng tình bạn bền vững và phát triển những kỹ năng cần thiết để vươn
            xa.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Đội ngũ nhà giáo tận tụy của chúng tôi luôn hợp tác chặt chẽ với các
            gia đình để tạo ra một trải nghiệm học tập mang tính cá nhân, vui vẻ
            và đầy ý nghĩa. Chúng tôi trân trọng mọi cột mốc trưởng thành — dù
            là lớn hay nhỏ.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🏆", text: "Chương trình học đạt giải thưởng" },
              { icon: "🌍", text: "Cộng đồng hòa nhập & đa dạng" },
              { icon: "📚", text: "Thư viện & học liệu hiện đại" },
              {
                icon: "🎭",
                text: "Chương trình nghệ thuật & thể thao phong phú",
              },
            ].map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3"
              >
                <span className="text-xl">{h.icon}</span>
                <span className="text-sm font-600 text-gray-700 font-heading">
                  {h.text}
                </span>
              </div>
            ))}
          </div>
          <button className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-200">
            Câu chuyện của chúng tôi
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
