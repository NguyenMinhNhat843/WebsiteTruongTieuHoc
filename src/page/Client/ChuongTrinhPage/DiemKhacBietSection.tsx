const UniqueSellingPoints = () => {
  const points = [
    {
      title: "Học qua trải nghiệm",
      desc: "Học sinh không chỉ học lý thuyết mà được thực hành qua các dự án thực tế, tham quan và thí nghiệm khoa học.",
      icon: (
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.808 0l-.63-.282a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245A2 2 0 004.547 21h14.905a2 2 0 001.415-3.414l-1.439-1.44z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10V3m0 0l-3 3m3-3l3 3"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Lớp học sĩ số nhỏ",
      desc: "Tối đa 25 học sinh/lớp, đảm bảo mỗi cá nhân đều được giáo viên quan tâm, sát sao và hỗ trợ kịp thời.",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "green",
    },
    {
      title: "Giáo viên tận tâm",
      desc: "Đội ngũ giáo viên giỏi chuyên môn, giàu lòng yêu trẻ và luôn cập nhật các phương pháp sư phạm hiện đại.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      color: "amber",
    },
    {
      title: "Kết hợp kỹ năng mềm",
      desc: "Lồng ghép các bài học về giao tiếp, làm việc nhóm và tư duy phản biện vào chương trình chính khóa.",
      icon: (
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "blue",
    },
  ];

  const colorConfig = {
    blue: "bg-blue-50 text-blue-600 hover:shadow-blue-200/50",
    green: "bg-green-50 text-green-600 hover:shadow-green-200/50",
    amber: "bg-amber-50 text-amber-600 hover:shadow-amber-200/50",
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Tại sao phụ huynh tin tưởng chúng tôi?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500">
            Những giá trị khác biệt làm nên chất lượng giáo dục tại trường
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group p-8 rounded-3xl transition-all duration-500 border border-transparent hover:border-white hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden ${colorConfig[item.color]}`}
            >
              {/* Hiệu ứng Glow khi hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute -right-8 -top-8 w-32 h-32 blur-3xl rounded-full opacity-20 bg-current`}
                ></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                <div
                  className={`p-4 rounded-2xl bg-white shadow-sm flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPoints;
