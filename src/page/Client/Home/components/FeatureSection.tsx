import { FEATURES } from "../../../../Mock/MockData/Home/homeMockData";
import { useInView } from "../../../../hooks/useInvew";

const FeatureSection = () => {
  const [featuresRef, featuresInView] = useInView();
  return (
    <section className="bg-gray-50 py-24 px-6" ref={featuresRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-14 stagger-1 ${featuresInView ? "stagger-visible" : ""}`}
        >
          <span className="inline-block text-blue-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Tại sao các gia đình tin chọn chúng tôi
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-4">
            Nơi để <span className="text-blue-500">Trưởng thành</span>,{" "}
            <span className="text-green-500">Học tập</span> &{" "}
            <span className="text-yellow-500">Phát triển</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Chúng tôi tin rằng giáo dục không chỉ nằm ở sách vở — đó còn là hành
            trình phát triển toàn diện cho mỗi đứa trẻ.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`feature-card ${f.bg} border ${f.border} rounded-3xl p-7 cursor-default stagger-${i + 1} ${featuresInView ? "stagger-visible" : ""}`}
            >
              <div
                className={`${f.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-3xl shadow-sm`}
              >
                {f.icon}
              </div>
              <h3 className="font-heading font-800 text-gray-900 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
