import { useInView } from "../../../../hooks/useInvew";

const StatBandSection = () => {
  const [statsRef, statsInView] = useInView();
  return (
    <section
      className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-14 px-6"
      ref={statsRef}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { value: "1,200+", label: "Học sinh tham gia", icon: "👧" },
          { value: "45+", label: "Giáo viên chất lượng", icon: "👩‍🏫" },
          { value: "98%", label: "Độ hài lòng của phụ huynh", icon: "❤️" },
        ].map((s, i) => (
          <div
            key={i}
            className={`stat-num ${statsInView ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="font-heading font-900 text-4xl text-white">
              {s.value}
            </div>
            <div className="text-blue-100 font-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBandSection;
