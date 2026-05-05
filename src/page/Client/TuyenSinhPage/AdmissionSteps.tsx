import React from "react";
import { ClipboardEdit, FileText, CheckCircle2, UserPlus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Đăng ký online",
    desc: "Phụ huynh điền thông tin đăng ký tại form trực tuyến trên website.",
    icon: <ClipboardEdit className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    number: "02",
    title: "Nộp hồ sơ",
    desc: "Nhà trường liên hệ hướng dẫn hoàn thiện hồ sơ bản cứng.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-indigo-500",
  },
  {
    number: "03",
    title: "Xét tuyển",
    desc: "Hội đồng tuyển sinh xem xét và phỏng vấn đầu vào cho bé.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "bg-purple-500",
  },
  {
    number: "04",
    title: "Nhập học",
    desc: "Hoàn tất học phí và chính thức trở thành thành viên của trường.",
    icon: <UserPlus className="w-8 h-8" />,
    color: "bg-green-500",
  },
];

const AdmissionSteps = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Quy Trình Tuyển Sinh
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Chỉ với 4 bước đơn giản để con bạn bắt đầu hành trình tri thức tại
            môi trường giáo dục hạnh phúc.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Đường nối (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
            <div
              className="h-full bg-blue-500 w-0 transition-all duration-1000 ease-out"
              data-aos="width-grow" // Cần thêm class CSS custom bên dưới
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Số thứ tự & Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 ${step.color} text-white rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-12 duration-300 relative z-10`}
                  >
                    {step.icon}
                  </div>
                  <span className="absolute -top-4 -right-4 text-4xl font-black text-gray-200/50 italic z-0">
                    {step.number}
                  </span>
                </div>

                {/* Nội dung */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>

                {/* Mũi tên chỉ hướng (Mobile/Tablet) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-gray-300 animate-bounce">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Nút đăng ký nhanh cuối quy trình */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all hover:shadow-blue-200/50">
            Bắt đầu đăng ký ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;
