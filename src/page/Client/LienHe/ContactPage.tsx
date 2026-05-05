import React from "react";
import { MapPin, Phone, Mail, Clock, Send, Camera } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Banner Header */}
      <section
        className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center overflow-hidden"
        data-aos="fade-down"
      >
        {/* Họa tiết sóng/mây trang trí */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.15,119.58,112.55,180,105.54,235.1,99.13,283.47,70.57,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-blue-50 text-lg md:text-xl font-light max-w-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ quý phụ huynh tìm hiểu
            môi trường tốt nhất cho con.
          </p>
        </div>
      </section>

      {/* 2. Thông tin & Form */}
      <section className="py-16 bg-[#fdfdfd]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-24 relative z-20">
            {/* Cột trái: Thông tin trường */}
            <div
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-blue-50"
              data-aos="fade-right"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                Thông tin nhà trường
              </h2>

              <div className="space-y-6">
                <ContactItem
                  icon={<MapPin className="text-blue-500" />}
                  label="Địa chỉ"
                  content="Số 123 Đường Trần Phú, Phường Lộc Thọ, Nha Trang"
                />
                <ContactItem
                  icon={<Phone className="text-orange-500" />}
                  label="Hotline tuyển sinh"
                  content="0123 456 789"
                  isHighlight
                />
                <ContactItem
                  icon={<Mail className="text-blue-500" />}
                  label="Email"
                  content="tuyensinh@hanhphuc.edu.vn"
                />
                <ContactItem
                  icon={<Clock className="text-green-500" />}
                  label="Giờ làm việc"
                  content="Thứ 2 - Thứ 7: 07:30 - 17:00"
                />
              </div>
            </div>

            {/* Cột phải: Form liên hệ */}
            <div
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-t-4 border-blue-400"
              data-aos="fade-left"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="contact-input"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="contact-input"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email liên hệ"
                  className="contact-input"
                />
                <textarea
                  rows="4"
                  placeholder="Lời nhắn của phụ huynh..."
                  className="contact-input resize-none"
                ></textarea>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:scale-[1.03] flex items-center justify-center gap-2">
                  Gửi thông tin ngay
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bản đồ */}
      <section className="py-12 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 mb-8 text-center md:text-left">
          <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">
            Tìm đường đến trường
          </p>
          <h2 className="text-3xl font-bold text-blue-900">
            Vị trí của trường
          </h2>
        </div>
        <div className="relative h-[450px] w-full lg:container lg:mx-auto lg:rounded-[2rem] overflow-hidden shadow-inner border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            title="Trường tiểu học Hạnh Phúc"
          ></iframe>
          {/* Badge địa chỉ trên bản đồ */}
          <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block max-w-xs border-l-4 border-orange-500">
            <p className="font-bold text-blue-900 text-sm">
              Trường Tiểu Học Hạnh Phúc
            </p>
            <p className="text-gray-500 text-xs mt-1 italic font-light leading-relaxed">
              Nha Trang, Khánh Hòa, Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA Đăng ký tham quan */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-green-600 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-green-100">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Đăng ký tham quan trường ngay hôm nay
              </h2>
              <p className="text-green-50 mb-10 max-w-2xl mx-auto">
                Hãy đến để trực tiếp trải nghiệm cơ sở vật chất và gặp gỡ đội
                ngũ giáo viên tận tâm của chúng tôi.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-5 px-12 rounded-2xl transition-all shadow-xl animate-pulse-slow uppercase tracking-wide">
                Đặt lịch hẹn ngay
              </button>
            </div>
            {/* Trang trí icon mờ */}
            <Camera
              size={200}
              className="absolute -bottom-10 -right-10 text-white/10 rotate-12"
            />
          </div>
        </div>
      </section>

      {/* CSS Styles nội bộ */}
      <style jsx>{`
        .contact-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background-color: #f8fafc;
          border: 2px solid #f1f5f9;
          border-radius: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          background-color: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

// Component con cho từng dòng thông tin
const ContactItem = ({ icon, label, content, isHighlight = false }) => (
  <div className="flex items-start gap-4 group cursor-default">
    <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p
        className={`text-lg font-bold transition-colors ${isHighlight ? "text-orange-600" : "text-gray-700"} group-hover:text-blue-600`}
      >
        {content}
      </p>
    </div>
  </div>
);

export default ContactPage;
