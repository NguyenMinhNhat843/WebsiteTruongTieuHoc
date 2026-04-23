import { Award, Users, BookOpen, GraduationCap } from "lucide-react";

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  delay,
}: {
  icon: React.ComponentType<{ size: number }>;
  value: number | string;
  suffix?: string;
  label: string;
  color: string;
  delay: string;
}) => {
  return (
    //  Thẻ bọc ngoài cùng chỉ chịu trách nhiệm chạy AOS
    <div data-aos="fade-up" data-aos-delay={delay}>
      {/* Thẻ bên trong chịu trách nhiệm xử lý Transition và Hover */}
      <div className="group bg-white rounded-2xl p-[22px_20px] border border-slate-200 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(43,140,247,0.14)]">
        {/* Icon wrapper */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300"
          style={{ backgroundColor: `${color}1F`, color: color }}
        >
          <Icon size={22} />
        </div>

        {/* Value */}
        <div
          className="font-['Lexend'] text-[2.2rem] font-extrabold leading-none mb-1.5"
          style={{ color: color }}
        >
          {value}
          {suffix}
        </div>

        {/* Label - Sửa lỗi: text-slate-500 thay vì color-[#64748b] */}
        <div className="text-[0.82rem] text-slate-500 font-semibold uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-275 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Cột trái: Văn bản giới thiệu */}
          <div data-aos="fade-right">
            <p className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[#2b8cf7] mb-3">
              Tổng quan về trường
            </p>
            <h2 className="font-['Lexend'] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] text-slate-900 mb-5">
              Hơn 25 năm vun trồng{" "}
              <span className="text-[#2b8cf7]">thế hệ tương lai</span>
            </h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-linear-to-r from-[#2b8cf7] to-[#60c2f7] rounded-full mb-6" />

            <div className="space-y-4 text-[1.02rem] leading-[1.85] text-slate-600">
              <p>
                Trường Tiểu học Sunrise được thành lập năm 1999, là một trong
                những ngôi trường tiên phong trong việc kết hợp giáo dục toàn
                diện với phát triển cảm xúc — xã hội cho trẻ em.
              </p>
              <p>
                Với đội ngũ hơn 120 giáo viên được đào tạo chuyên sâu và cơ sở
                vật chất hiện đại trên diện tích 3 hecta, Sunrise luôn duy trì
                môi trường học tập thân thiện, sáng tạo và khuyến khích mỗi học
                sinh phát triển theo tiềm năng riêng của mình.
              </p>
            </div>
          </div>

          {/* Cột phải: Grid các con số thống kê */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={Award}
              value={25}
              suffix="+"
              label="Năm hoạt động"
              color="#2b8cf7"
              delay="100"
            />
            <StatCard
              icon={Users}
              value={1800}
              suffix="+"
              label="Học sinh"
              color="#10b981"
              delay="200"
            />
            <StatCard
              icon={BookOpen}
              value={12}
              suffix=""
              label="Chương trình"
              color="#f59e0b"
              delay="300"
            />
            <StatCard
              icon={GraduationCap}
              value={98}
              suffix="%"
              label="Tỷ lệ lên lớp"
              color="#8b5cf6"
              delay="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
