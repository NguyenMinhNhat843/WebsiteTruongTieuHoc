import { Star, GraduationCap } from "lucide-react";

const Hero = () => {
  const scrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-150 overflow-hidden flex items-center justify-center">
      {/* Hero Background */}
      <div className="absolute inset-[-20%] bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80')] bg-center bg-cover bg-no-repeat will-change-transform" />

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a1e50]/62 via-[#0e3c6e]/50 to-[#061432]/55" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-195">
        {/* Badge */}
        <div
          data-aos="fade-in"
          className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4.5 py-1.5 text-[0.85rem] font-semibold tracking-wider uppercase text-[#d4eaff] mb-6 backdrop-blur-md"
        >
          <Star size={13} /> Trường Tiểu học TechCorp
        </div>

        {/* Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-['Lexend'] text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-[1.15] mb-[1.2rem] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]"
        >
          Giới thiệu về
          <br />
          <span className="text-[#60c2f7]">Trường Tiểu học TechCorp</span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[clamp(1rem,2vw,1.2rem)] font-normal leading-relaxed text-white/88 max-w-130 mx-auto mb-10"
        >
          Nơi mỗi đứa trẻ được trân trọng, nuôi dưỡng và truyền cảm hứng để trở
          thành phiên bản tốt nhất của chính mình.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="300">
          <a
            href="#overview"
            onClick={scrollToOverview}
            className="inline-flex items-center gap-2.5 bg-[#2b8cf7] text-white font-['Lexend'] text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#1a7ae8] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(43,140,247,0.45)] no-underline"
          >
            <GraduationCap size={18} /> Khám phá câu chuyện của chúng tôi
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/60 text-[0.75rem] tracking-widest">
        <div className="w-6 h-9.5 border-2 border-white/35 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-bounce" />
        </div>
        <span>Cuộn xuống</span>
      </div>
    </section>
  );
};

export default Hero;
