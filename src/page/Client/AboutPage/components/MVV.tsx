const ValueCard = ({
  icon: Icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  delay: string;
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      style={{ "--icon-color": color } as React.CSSProperties}
    >
      <div
        className="group flex flex-col justify-center items-center text-center relative bg-white border border-slate-200 rounded-[20px] p-9 
      transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] 
      hover:border-transparent overflow-hidden"
      >
        {/* Top line effect on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-0.75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: color }}
        />

        {/* Icon Wrap */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
          style={{ backgroundColor: `${color}1F`, color: color }}
        >
          <Icon size={28} />
        </div>

        <h3 className="font-['Lexend'] text-xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <p className="text-[0.97rem] leading-[1.75] text-slate-500">{desc}</p>
      </div>
    </div>
  );
};

import { Target, Eye, Heart } from "lucide-react";

const MVV = () => {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Dot Pattern - Tạo họa tiết chấm bi nhẹ nhàng */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-275 mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-in"
            className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[#2b8cf7] mb-3"
          >
            Định hướng giáo dục
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-['Lexend'] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] text-slate-900 mb-5"
          >
            Sứ mệnh – Tầm nhìn –{" "}
            <span className="text-[#2b8cf7]">Giá trị cốt lõi</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[1.05rem] text-slate-500 max-w-130 mx-auto leading-relaxed"
          >
            Ba trụ cột định hình mọi quyết định giáo dục và nuôi dưỡng hành
            trình phát triển của từng học sinh.
          </p>
        </div>

        {/* MVV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon={Target}
            title="Sứ mệnh"
            desc="Tạo ra môi trường học tập an toàn, bao dung và đầy cảm hứng — nơi mỗi học sinh được khuyến khích tư duy sáng tạo, phát triển toàn diện về trí tuệ, cảm xúc và thể chất."
            color="#2b8cf7"
            delay="100"
          />
          <ValueCard
            icon={Eye}
            title="Tầm nhìn"
            desc="Trở thành trường tiểu học kiểu mẫu tại khu vực, dẫn đầu về chất lượng giáo dục toàn diện và là nền tảng vững chắc để học sinh bước vào tương lai với sự tự tin và bản lĩnh."
            color="#10b981"
            delay="250"
          />
          <ValueCard
            icon={Heart}
            title="Giá trị cốt lõi"
            desc="Yêu thương – Tôn trọng – Sáng tạo – Trách nhiệm. Bốn giá trị này không chỉ là phương châm mà là nền tảng mà mọi hoạt động giảng dạy và sinh hoạt tại Sunrise đều dựa trên đó."
            color="#f59e0b"
            delay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default MVV;
