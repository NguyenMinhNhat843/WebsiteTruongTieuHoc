import { Users, Calendar, Award, Clock } from "lucide-react";

const admissionInfo = [
  {
    icon: <Users className="text-blue-600" />,
    label: "Đối tượng tuyển sinh",
    value: "Tất cả học sinh trên địa bàn tỉnh và các khu vực lân cận.",
  },
  {
    icon: <Calendar className="text-blue-600" />,
    label: "Độ tuổi quy định",
    value: "Trẻ sinh năm 2020 (đúng 6 tuổi) vào lớp 1.",
  },
  {
    icon: <Clock className="text-blue-600" />,
    label: "Thời gian đăng ký",
    value: "Từ 01/06/2026 đến hết ngày 30/07/2026.",
  },
  {
    icon: <Award className="text-blue-600" />,
    label: "Chỉ tiêu năm học",
    value: "200 học sinh (Chia làm 6 lớp chất lượng cao).",
  },
];

const AdmissionDetails = () => {
  return (
    <section className="py-20 bg-[#f0f7ff]">
      {" "}
      {/* Nền xanh nhạt dịu mắt */}
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-blue-100">
          {/* Cột trái: Tiêu đề & Hình ảnh trang trí */}
          <div className="lg:w-1/3 bg-blue-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">
                Thông Tin <br />
                Chi Tiết Tuyển Sinh
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-blue-100 font-light">
                Quý phụ huynh vui lòng lưu ý các mốc thời gian và điều kiện để
                đảm bảo quyền lợi tốt nhất cho con.
              </p>
            </div>
            {/* Trang trí hình tròn mờ phía sau */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Cột phải: Thông tin dạng List/Grid */}
          <div className="lg:w-2/3 p-8 md:p-12" data-aos="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {admissionInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </h4>
                    <p className="text-gray-800 font-bold text-lg leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Thông báo bổ sung */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 flex items-center gap-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <p className="text-yellow-800 text-sm italic font-medium">
                Lưu ý: Nhà trường sẽ ưu tiên các hồ sơ đăng ký sớm trước ngày
                15/06/2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDetails;
