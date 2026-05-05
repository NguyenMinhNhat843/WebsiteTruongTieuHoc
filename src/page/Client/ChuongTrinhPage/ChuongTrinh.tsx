import CTABanner from "../../../components/views/CTABanner";
import UniqueSellingPoints from "./DiemKhacBietSection";
import StudentJourney from "./LoTrinhPhatTrien";

const AcademicProgram = () => {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* 2. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/80 to-green-500/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Chương trình học toàn diện
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl mb-10 font-light opacity-95"
          >
            Phát triển tư duy – kỹ năng – nhân cách
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-xl active:scale-95"
          >
            Xem chương trình theo khối
          </button>
        </div>
      </section>

      {/* 3. SECTION TỔNG QUAN (OVERVIEW) */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-3xl font-bold text-blue-600 mb-4"
            >
              Cấu trúc chương trình học
            </h2>
            <div
              className="w-20 h-1 bg-amber-500 mx-auto rounded-full"
              data-aos="zoom-in"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bộ GD */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="group bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Chương trình Bộ GD
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Đảm bảo kiến thức nền tảng vững chắc theo chuẩn quốc gia, áp
                dụng phương pháp dạy học tích cực.
              </p>
            </div>

            {/* Card 2: Tiếng Anh */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Tiếng Anh tăng cường
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tối ưu khả năng giao tiếp với giáo viên bản ngữ và lộ trình
                chuẩn Cambridge ngay từ bậc tiểu học.
              </p>
            </div>

            {/* Card 3: Năng khiếu */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-amber-50 p-8 rounded-2xl border border-amber-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Năng khiếu & Kỹ năng
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Phát triển toàn diện năng khiếu nghệ thuật, thể thao và kỹ năng
                sống cần thiết cho tương lai.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StudentJourney />

      <UniqueSellingPoints />
      <CTABanner />
    </div>
  );
};

export default AcademicProgram;
