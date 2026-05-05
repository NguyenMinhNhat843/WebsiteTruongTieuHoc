import React from "react";
import { Check, Info } from "lucide-react";

const feeData = [
  {
    type: "Học phí chính quy",
    price: "3.500.000",
    period: "tháng",
    description:
      "Bao gồm chương trình học của Bộ GD&ĐT và tiếng Anh tăng cường.",
    isHighlight: true,
  },
  {
    type: "Phí bán trú",
    price: "1.200.000",
    period: "tháng",
    description: "Bao gồm ăn trưa, ăn xế và chăm sóc giấc ngủ trưa tại trường.",
    isHighlight: false,
  },
  {
    type: "Phí cơ sở vật chất",
    price: "2.000.000",
    period: "năm",
    description: "Phí duy trì, nâng cấp trang thiết bị và học liệu hàng năm.",
    isHighlight: false,
  },
];

const TuitionFees = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Minh Bạch Tài Chính
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Chúng tôi cam kết mức học phí ổn định, tương xứng với chất lượng
            giáo dục và môi trường chăm sóc trẻ.
          </p>
        </div>

        {/* Fees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feeData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border ${
                item.isHighlight
                  ? "border-blue-500 bg-blue-50/30"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              {item.isHighlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Phổ biến nhất
                </span>
              )}

              <h3 className="text-gray-600 font-medium mb-4">{item.type}</h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl md:text-4xl font-black text-blue-900">
                  {item.price}
                </span>
                <span className="text-gray-500 text-sm">VNĐ/{item.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Phí khác ước tính (Dòng nhỏ) */}
              <div className="pt-6 border-t border-dashed border-gray-200">
                <p className="text-xs text-gray-400 italic">
                  * Các khoản phí ngoại khóa, đồng phục sẽ được báo giá chi tiết
                  theo nhu cầu thực tế.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note cuối section */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600"
          data-aos="fade-in"
        >
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
            <Info size={16} className="text-blue-500" />
            <span>Chi tiết sẽ được tư vấn thêm khi phụ huynh đăng ký</span>
          </div>

          <button className="text-blue-600 font-bold hover:underline transition-all">
            Tải về biểu phí chi tiết (.PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default TuitionFees;
