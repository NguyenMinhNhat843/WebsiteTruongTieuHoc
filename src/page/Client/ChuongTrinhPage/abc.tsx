import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GradePrograms = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const gradesData = {
    1: {
      title: "Khối 1: Vững vàng bước khởi đầu",
      desc: "Giai đoạn quan trọng giúp học sinh làm quen với môi trường học tập mới, hình thành nề nếp và niềm yêu thích học tập.",
      goals: [
        "Thành thạo đọc viết và tính toán cơ bản",
        "Rèn luyện sự tự tin và kỹ năng tự phục vụ",
      ],
      subjects: [
        {
          name: "Tiếng Việt & Toán",
          content:
            "Chương trình chuẩn Bộ GD, chú trọng phương pháp trực quan sinh động.",
          type: "Học thuật",
        },
        {
          name: "Tiếng Anh Cambridge",
          content:
            "10 tiết/tuần với giáo viên bản ngữ, làm quen với ngữ âm Starters.",
          type: "Ngôn ngữ",
        },
        {
          name: "STEM & Kỹ năng sống",
          content:
            "Làm quen với lập trình robot cơ bản và các bài học đạo đức.",
          type: "Năng khiếu",
        },
      ],
    },
    // Bạn có thể copy cấu trúc này cho các Khối 2, 3, 4, 5
    2: {
      title: "Khối 2: Khám phá tri thức",
      desc: "Mở rộng vốn từ và tư duy logic thông qua các hoạt động trải nghiệm.",
      goals: ["Phát triển ngôn ngữ", "Tư duy giải quyết vấn đề"],
      subjects: [],
    },
    3: {
      title: "Khối 3: Tăng tốc phát triển",
      desc: "Xây dựng nền tảng tư duy phản biện và làm việc nhóm.",
      goals: ["Nâng cao trình độ Anh ngữ", "Kỹ năng nghiên cứu nhẹ"],
      subjects: [],
    },
    4: {
      title: "Khối 4: Bứt phá kỹ năng",
      desc: "Trọng tâm vào việc tự học và quản lý dự án cá nhân nhỏ.",
      goals: ["Kỹ năng viết sáng tạo", "Toán tư duy nâng cao"],
      subjects: [],
    },
    5: {
      title: "Khối 5: Tự tin chuyển cấp",
      desc: "Hoàn thiện kiến thức tiểu học, sẵn sàng cho môi trường Trung học cơ sở.",
      goals: ["Kỹ năng thuyết trình", "Chứng chỉ Cambridge Flyers"],
      subjects: [],
    },
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* 4. TABS CHỌN KHỐI LỚP */}
        <div className="flex justify-start md:justify-center border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-8 px-4 md:px-0">
            {[1, 2, 3, 4, 5].map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveTab(grade)}
                className={`pb-4 text-lg font-bold transition-all duration-300 relative whitespace-nowrap ${
                  activeTab === grade
                    ? "text-blue-600"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                Khối {grade}
                {activeTab === grade && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 5. NỘI DUNG CHI TIẾT TỪNG KHỐI */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Bên trái: Mô tả khối */}
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {gradesData[activeTab as keyof typeof gradesData].title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed italic text-lg">
                "{gradesData[activeTab as keyof typeof gradesData].desc}"
              </p>

              <div className="space-y-4">
                <p className="font-bold text-blue-600">Mục tiêu trọng tâm:</p>
                <ul className="space-y-3">
                  {gradesData[activeTab as keyof typeof gradesData].goals.map(
                    (goal, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
                          ✓
                        </span>
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Bên phải: Danh sách môn học (Accordion) */}
            <div className="lg:col-span-7 space-y-4">
              <p className="font-bold text-gray-500 uppercase tracking-wider text-sm mb-4">
                Chi tiết các nhóm môn học
              </p>
              {gradesData[activeTab as keyof typeof gradesData].subjects
                .length > 0 ? (
                gradesData[activeTab as keyof typeof gradesData].subjects.map(
                  (sub, idx) => (
                    <AccordionItem
                      key={idx}
                      title={sub.name}
                      content={sub.content}
                      badge={sub.type}
                    />
                  ),
                )
              ) : (
                <div className="p-8 border-2 border-dashed border-gray-100 rounded-2xl text-center text-gray-400">
                  Nội dung chi tiết Khối {activeTab} đang được cập nhật...
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Component con Accordion để tối ưu UI
const AccordionItem = ({
  title,
  content,
  badge,
}: {
  title: string;
  content: string;
  badge: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-bold text-gray-800 text-lg">{title}</span>
          <span
            className={`text-[10px] uppercase font-black px-2 py-1 rounded w-fit ${
              badge === "Ngôn ngữ"
                ? "bg-green-100 text-green-600"
                : badge === "Học thuật"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-amber-100 text-amber-600"
            }`}
          >
            {badge}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-gray-600 border-t border-gray-50 pt-4 leading-relaxed">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default GradePrograms;
