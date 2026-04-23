import { useInView } from "../../../../hooks/useInvew";
import { PROGRAMS } from "../../../../Mock/MockData/Home/homeMockData";

const ProgramSection = () => {
  const [programsRef, programsInView] = useInView();
  return (
    <section className="bg-gray-50 py-24 px-6" ref={programsRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-14 stagger-1 ${programsInView ? "stagger-visible" : ""}`}
        >
          <span className="inline-block text-purple-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Chương trình Học thuật
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-4">
            Sự <span className="text-blue-500">Xuất sắc</span> qua từng khối lớp
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Mỗi khối lớp đều được thiết kế tỉ mỉ để thấu hiểu trình độ hiện tại
            của trẻ — và giúp các em vươn xa hơn cả sự mong đợi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PROGRAMS.map((p, i) => (
            <div
              key={i}
              className={`program-card bg-white rounded-3xl overflow-hidden shadow-md border ${p.border} cursor-pointer stagger-${Math.min(i + 1, 5)} ${programsInView ? "stagger-visible" : ""}`}
            >
              <div className="overflow-hidden" style={{ height: 160 }}>
                <img
                  src={p.img}
                  alt={p.grade}
                  className="prog-img w-full h-full object-cover"
                />
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`bg-gradient-to-r ${p.color} text-white text-xs font-heading font-700 px-3 py-1 rounded-full`}
                  >
                    {p.grade}
                  </span>
                  <span className="text-gray-400 text-xs font-heading font-600">
                    {p.age}
                  </span>
                </div>
                <div className="text-2xl mb-2">{p.emoji}</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <button
                  className="mt-4 text-blue-500 font-heading font-700 text-sm hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Xem thêm
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
      </div>
    </section>
  );
};

export default ProgramSection;
