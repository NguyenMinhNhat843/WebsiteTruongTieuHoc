import { useCallback, useEffect, useState } from "react";
import { useInView } from "../../../../hooks/useInvew";
import { TESTIMONIALS } from "../../../../Mock/MockData/Home/homeMockData";

const FeedBackSection = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [testimonialAnim, setTestimonialAnim] = useState(true);
  const [testimonialsRef, testimonialsInView] = useInView();
  const goToTestimonial = useCallback((idx: number) => {
    setTestimonialAnim(false);
    setTimeout(() => {
      setTestimonialIdx(idx);
      setTestimonialAnim(true);
    }, 300);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialAnim(false);
      setTimeout(() => {
        setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
        setTestimonialAnim(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-white to-blue-50"
      ref={testimonialsRef}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-14 stagger-1 ${testimonialsInView ? "stagger-visible" : ""}`}
        >
          <span className="inline-block text-yellow-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Tiếng nói Phụ huynh
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-4">
            Gia đình{" "}
            <span className="text-yellow-500">nói gì về chúng tôi</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Những câu chuyện thực tế từ các bậc phụ huynh — bởi không có gì minh
            chứng tốt hơn sự hài lòng của những gia đình chúng tôi phục vụ.
          </p>
        </div>

        <div
          className={`stagger-2 ${testimonialsInView ? "stagger-visible" : ""}`}
        >
          <div
            className="relative bg-white rounded-3xl shadow-xl px-8 py-10 md:px-14 md:py-12 border border-gray-100 overflow-hidden"
            style={{ boxShadow: "0 16px 48px rgba(59,130,246,0.1)" }}
          >
            {/* Decorative quote mark */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 28,
                fontSize: 100,
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 900,
                color: "#EFF6FF",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              "
            </div>

            <div className={`t-slide ${testimonialAnim ? "on" : "off"}`}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8 relative italic"
                style={{ zIndex: 1 }}
              >
                "{TESTIMONIALS[testimonialIdx].text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full ${TESTIMONIALS[testimonialIdx].color} flex items-center justify-center text-white font-heading font-800 text-lg shadow-lg`}
                >
                  {TESTIMONIALS[testimonialIdx].avatar}
                </div>
                <div>
                  <div className="font-heading font-800 text-gray-900">
                    {TESTIMONIALS[testimonialIdx].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {TESTIMONIALS[testimonialIdx].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`dot-btn w-2.5 h-2.5 rounded-full ${i === testimonialIdx ? "bg-blue-500 active" : "bg-gray-300"}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex justify-center gap-4 mt-5">
            {[
              [
                "‹",
                () =>
                  goToTestimonial(
                    (testimonialIdx - 1 + TESTIMONIALS.length) %
                      TESTIMONIALS.length,
                  ),
              ] as const,
              [
                "›",
                () =>
                  goToTestimonial((testimonialIdx + 1) % TESTIMONIALS.length),
              ] as const,
            ].map(([ch, fn], i) => (
              <button
                key={i}
                onClick={fn}
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-blue-400 text-gray-500 hover:text-blue-500 transition-all font-heading font-700 text-lg flex items-center justify-center"
                style={{ background: "white", cursor: "pointer" }}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBackSection;
