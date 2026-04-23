import { TEAM } from "../../../../Mock/MockData/NhanVien/NhanVien";
import type { NhanVien } from "../../../../Mock/MockType/NhanVien";

const MemberCard = ({ member, delay }: { member: NhanVien; delay: string }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Image Wrap */}
        <div className="aspect-4/5 overflow-hidden relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient khi hover */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white text-sm italic opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
              "{member.quote || "Tận tâm vì sự nghiệp giáo dục"}"
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-['Lexend'] text-lg font-bold text-slate-900 mb-1 group-hover:text-[#2b8cf7] transition-colors">
            {member.name}
          </h3>
          <p className="text-[0.85rem] font-semibold text-[#2b8cf7] uppercase tracking-wider mb-3">
            {member.role}
          </p>
          <div className="w-8 h-0.5 bg-slate-200 mx-auto group-hover:w-16 group-hover:bg-[#2b8cf7] transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-275 mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-in"
            className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[#2b8cf7] mb-3"
          >
            Con người của chúng tôi
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-['Lexend'] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] text-slate-900 mb-5"
          >
            Ban giám hiệu &{" "}
            <span className="text-[#2b8cf7]">Đội ngũ lãnh đạo</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[1.05rem] text-slate-500 max-w-130 mx-auto leading-relaxed"
          >
            Những người thầy, người cô tận tâm — truyền cảm hứng và định hướng
            cho cả một thế hệ học sinh Sunrise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((m, i) => (
            <MemberCard
              key={m.name}
              member={m}
              // Tạo delay tăng dần: 100, 200, 300, 400...
              delay={String((i + 1) * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
