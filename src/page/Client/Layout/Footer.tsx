const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-lg">🏫</span>
            </div>
            <div>
              <div className="font-heading font-800 text-white text-base">
                Trường tiểu học TechCorp
              </div>
              <div className="text-blue-400 text-xs font-600">Trường học</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Khơi nguồn trí tuệ trẻ và nuôi dưỡng những nhà lãnh đạo tương lai từ
            năm 1998.
          </p>
        </div>
        {[
          {
            title: "Liên kết nhanh",
            links: [
              "Trang chủ",
              "Về chúng tôi",
              "Chương trình học",
              "Tuyển sinh",
            ],
          },
          {
            title: "Tài nguyên",
            links: [
              "Cổng thông tin phụ huynh",
              "Lịch biểu",
              "Tin tức",
              "Liên hệ",
            ],
          },
          {
            title: "Liên hệ",
            links: [
              "Số 123 Đường Học Đường, Thành phố",
              "hello@sunriseprimary.edu",
              "+84 (24) 234-5678",
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-700 text-white mb-4 text-sm uppercase tracking-wider">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
        <span>© 2025 Trường Tiểu học TechCorp. Bảo lưu mọi quyền.</span>
        <div className="flex gap-4">
          {["Chính sách bảo mật", "Điều khoản sử dụng", "Sơ đồ trang web"].map(
            (l) => (
              <a
                key={l}
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                {l}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
