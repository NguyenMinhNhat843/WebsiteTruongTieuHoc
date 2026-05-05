import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Trường có tổ chức thi tuyển đầu vào không?",
    answer:
      "Nhà trường không tổ chức thi tuyển mang tính áp lực. Chúng tôi chỉ thực hiện một buổi gặp gỡ tương tác nhẹ nhàng để đánh giá khả năng ngôn ngữ và tư duy cơ bản nhằm xếp lớp phù hợp với năng lực của bé.",
  },
  {
    question: "Trường có dịch vụ xe đưa đón học sinh tận nhà không?",
    answer:
      "Có. Nhà trường có hệ thống xe bus hiện đại, có giáo viên đi kèm hỗ trợ. Dịch vụ phủ khắp các tuyến đường chính trong thành phố và các khu vực lân cận trong bán kính 10km.",
  },
  {
    question: "Chế độ dinh dưỡng và bán trú tại trường như thế nào?",
    answer:
      "Học sinh bán trú được phục vụ 2 bữa (trưa và xế chiều). Thực đơn được thiết kế bởi chuyên gia dinh dưỡng, thay đổi theo tuần và cam kết sử dụng thực phẩm sạch có nguồn gốc rõ ràng.",
  },
  {
    question: "Lớp học tối đa bao nhiêu học sinh?",
    answer:
      "Để đảm bảo chất lượng giảng dạy và sự quan tâm sát sao đến từng cá nhân, mỗi lớp học tại trường chỉ tối đa 25 học sinh với 2 giáo viên (1 giáo viên chủ nhiệm và 1 bảo mẫu).",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
            <HelpCircle size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Giải Đáp Thắc Mắc
          </h2>
          <p className="text-gray-500">
            Mọi điều phụ huynh cần biết về môi trường học tập tại trường.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`font-bold pr-4 ${activeIndex === index ? "text-blue-600" : "text-gray-800"}`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 shrink-0 ${
                    activeIndex === index ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>

              {/* Transition Height Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer của FAQ */}
        <div className="mt-12 text-center" data-aos="fade-in">
          <p className="text-gray-500 mb-4">Bạn vẫn còn thắc mắc khác?</p>
          <a
            href="tel:0123456789"
            className="inline-block bg-blue-50 text-blue-600 font-bold py-3 px-8 rounded-xl border border-blue-100 hover:bg-blue-600 hover:text-white transition-all"
          >
            Liên hệ trực tiếp: 0123 456 789
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
