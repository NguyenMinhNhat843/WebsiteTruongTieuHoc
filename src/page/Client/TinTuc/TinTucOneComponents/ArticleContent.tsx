export default function ArticleContent() {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-sky-50 p-8 md:p-10 transition-all duration-700`}
      data-aos="fade-up"
    >
      {/* Social share */}
      <div className="flex items-center gap-3 pb-6 border-b border-sky-100 mb-8">
        <span
          className="text-sm font-bold text-gray-500"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Chia sẻ:
        </span>
        {[
          { color: "bg-blue-600", label: "Facebook", icon: "f" },
          { color: "bg-sky-500", label: "Twitter", icon: "𝕏" },
          { color: "bg-green-500", label: "Zalo", icon: "Z" },
        ].map(({ color, label, icon }) => (
          <button
            key={label}
            className={`${color} text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm`}
          >
            {icon}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <span
            className="text-xs text-gray-400 font-semibold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            🔖 Lưu bài
          </span>
          <span
            className="text-xs text-gray-400 font-semibold"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            🖨️ In bài
          </span>
        </div>
      </div>

      {/* Lead paragraph */}
      <p
        className="text-gray-700 text-base leading-relaxed mb-6 font-medium border-l-4 border-yellow-400 pl-5 bg-yellow-50 py-3 rounded-r-xl"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        Sáng ngày 5 tháng 9 năm 2025, trường Tiểu học Ánh Bình Minh đã long
        trọng tổ chức lễ khai giảng năm học mới 2025–2026 trong không khí tưng
        bừng, phấn khởi của toàn thể thầy cô giáo, học sinh và phụ huynh toàn
        trường.
      </p>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2
          className="text-xl font-extrabold text-blue-700 mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-sm">
            🎉
          </span>
          Không khí lễ hội tràn ngập sân trường
        </h2>
        <p
          className="text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px" }}
        >
          Ngay từ sáng sớm, khuôn viên trường đã rực rỡ với cờ hoa và bong bóng
          đủ màu sắc. Các em học sinh trong những bộ đồng phục trắng tinh tươm,
          nét mặt ai nấy đều rạng ngời niềm vui và háo hức khi bước vào năm học
          mới. Phụ huynh cùng đồng hành, ghi lại những khoảnh khắc đáng nhớ này.
        </p>
        <p
          className="text-gray-600 leading-relaxed mb-6"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px" }}
        >
          Ban giám hiệu nhà trường đã chào đón hơn 500 học sinh từ khối lớp 1
          đến lớp 5, trong đó có 120 em học sinh lớp 1 – những "mầm non" đang
          lần đầu tiên bước qua cánh cổng trường với bao bỡ ngỡ và thích thú.
        </p>
      </div>

      {/* Image */}
      <div data-aos="fade-up" data-aos-delay="150">
        <figure className="mb-8">
          <div className="overflow-hidden rounded-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=85"
              alt="Lễ khai giảng"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption
            className="text-center text-xs text-gray-400 mt-2 italic"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Các em học sinh trong lễ khai giảng năm học 2025–2026
          </figcaption>
        </figure>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <h2
          className="text-xl font-extrabold text-blue-700 mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-sm">
            📚
          </span>
          Định hướng năm học mới đầy kỳ vọng
        </h2>
        <p
          className="text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px" }}
        >
          Trong phát biểu khai giảng, Hiệu trưởng Trần Thị Hoa nhấn mạnh mục
          tiêu năm học 2025–2026: tập trung phát triển toàn diện cho học sinh,
          kết hợp giữa học tập chất lượng cao và rèn luyện kỹ năng sống. Trường
          sẽ tiếp tục đổi mới phương pháp giảng dạy, ứng dụng công nghệ vào lớp
          học và tăng cường các hoạt động trải nghiệm thực tế.
        </p>

        {/* Highlight box */}
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 mb-6">
          <p
            className="text-blue-800 font-bold text-sm mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            ✨ Những điểm mới năm học 2025–2026:
          </p>
          <ul className="space-y-2">
            {[
              "Triển khai phòng học thông minh cho toàn khối lớp 4 và 5",
              "Chương trình câu lạc bộ kỹ năng sống mỗi thứ Sáu",
              "Mở rộng chương trình tiếng Anh tăng cường với giáo viên bản ngữ",
              "Hệ thống thư viện số dành cho học sinh mượn sách trực tuyến",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-blue-700"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <span className="text-green-500 mt-0.5 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="250">
        <h2
          className="text-xl font-extrabold text-blue-700 mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-sm">
            🌟
          </span>
          Trao thưởng và vinh danh học sinh xuất sắc
        </h2>
        <p
          className="text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px" }}
        >
          Nhân dịp khai giảng, nhà trường đã trao tặng 45 học bổng khuyến học
          cho những em đạt thành tích xuất sắc trong năm học trước, cùng với 12
          phần thưởng đặc biệt dành cho các em có hoàn cảnh khó khăn vươn lên
          trong học tập. Đây là nguồn động viên lớn để các em tiếp tục cố gắng
          trong năm học mới.
        </p>
        <p
          className="text-gray-600 leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px" }}
        >
          Buổi lễ kết thúc trong tiếng vỗ tay và nụ cười rạng rỡ của tất cả mọi
          người. Năm học mới 2025–2026 chính thức bắt đầu với bao hy vọng và
          quyết tâm từ toàn thể cộng đồng trường Tiểu học Ánh Bình Minh.
        </p>
      </div>

      {/* Tags */}
      <div data-aos="fade-up" data-aos-delay="300">
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-sky-100">
          <span
            className="text-sm font-bold text-gray-500 mr-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Tags:
          </span>
          {["Khai giảng", "Năm học mới", "Hoạt động trường", "Học sinh"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full cursor-pointer hover:bg-sky-200 transition-colors duration-200"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                #{tag}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
