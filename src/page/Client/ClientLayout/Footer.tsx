import { MapPin, Phone, Mail, Globe, Factory } from "lucide-react";

const SchoolFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002d5b] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Cột 1: Giới thiệu ngắn */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Globe className="text-blue-900" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                TRƯỜNG TIỂU HỌC <br /> TECHCORP
              </span>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Nơi ươm mầm những tài năng nhí, giúp các em phát triển toàn diện
              về Đức - Trí - Thể - Mỹ trong môi trường an toàn và yêu thương.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Factory size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Factory size={20} />
              </a>
            </div>
          </div>

          {/* Cột 2: Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-yellow-400 shrink-0 mt-1" size={20} />
                <span className="text-blue-100/80 group-hover:text-white transition-colors">
                  Số 123 Đường Trần Phú, <br />
                  Phường Lộc Thọ, Nha Trang
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-yellow-400 shrink-0" size={20} />
                <span className="text-blue-100/80 group-hover:text-white transition-colors">
                  0123 456 789 - 0258 3XX XXX
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-yellow-400 shrink-0" size={20} />
                <span className="text-blue-100/80 group-hover:text-white transition-colors">
                  tuyensinh@tieuhoc.edu.vn
                </span>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Liên Kết Nhanh
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <a
                  href="#"
                  className="text-blue-100/70 hover:text-yellow-400 transition-colors"
                >
                  Chương trình đào tạo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100/70 hover:text-yellow-400 transition-colors"
                >
                  Cơ sở vật chất
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100/70 hover:text-yellow-400 transition-colors"
                >
                  Tin tức nhà trường
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100/70 hover:text-yellow-400 transition-colors"
                >
                  Lịch công tác tháng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100/70 hover:text-yellow-400 transition-colors"
                >
                  Cổng thông tin phụ huynh
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Google Map Mini */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Vị Trí Trường
            </h3>
            <div className="rounded-xl overflow-hidden h-40 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.711883395982!2d109.1944!3d12.2452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE0JzQyLjciTiAxMDnCsDExJzM5LjgiRQ!5e0!3m2!1svi!2svn!4v1683280000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/50">
          <p>© {currentYear} Bản quyền thuộc về Trường Tiểu Học TechCorp.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;
