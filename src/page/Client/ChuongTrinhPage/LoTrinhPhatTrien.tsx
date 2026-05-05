import React from "react";
import { motion } from "framer-motion";

const StudentJourney = () => {
  const steps = [
    {
      grade: "Khối 1-2",
      focus: "Thích nghi & Nền tảng",
      desc: "Hình thành thói quen học tập tự giác và kỹ năng đọc viết vững vàng.",
    },
    {
      grade: "Khối 3",
      focus: "Khám phá & Tư duy",
      desc: "Bắt đầu tiếp cận tư duy phản biện và các dự án khoa học thực tế.",
    },
    {
      grade: "Khối 4-5",
      focus: "Bứt phá & Về đích",
      desc: "Hoàn thiện kỹ năng thuyết trình, làm việc nhóm và đạt chứng chỉ quốc tế.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <h3 className="text-2xl font-bold text-center mb-12 text-blue-600">
        Lộ trình phát triển 5 năm
      </h3>
      <div className="max-w-4xl mx-auto relative">
        {/* Đường kẻ nối giữa (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {idx + 1}
              </div>
              <h4 className="font-bold text-lg text-gray-800">{step.grade}</h4>
              <p className="text-blue-500 text-sm font-semibold mb-2">
                {step.focus}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentJourney;
