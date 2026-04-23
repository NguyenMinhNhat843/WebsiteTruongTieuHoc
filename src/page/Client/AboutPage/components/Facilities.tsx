import { ZoomIn } from "lucide-react";
import { FACILITIES } from "../../../../Mock/MockData/CoSoVatCHat/CoSoVatChat";

const Facilities = () => {
  const openLb = (index: number) => {
    // Logic mở lightbox của bạn ở đây
    console.log("Mở ảnh số:", index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-275 mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-in"
            className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[#2b8cf7] mb-3"
          >
            Cơ sở vật chất
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-['Lexend'] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] text-slate-900 mb-5"
          >
            Không gian học tập{" "}
            <span className="text-[#2b8cf7]">hiện đại & truyền cảm hứng</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[1.05rem] text-slate-500 max-w-130 mx-auto leading-relaxed"
          >
            Mỗi góc của trường Sunrise được thiết kế để kích thích trí tò mò,
            nuôi dưỡng sáng tạo và truyền cảm hứng học tập.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {FACILITIES.map((f, i) => (
            <div
              key={i}
              onClick={() => openLb(i)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm ${
                f.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Image */}
              <img
                src={f.img}
                alt={f.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>

              {/* Label - Hiển thị ở góc dưới */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
                <span className="text-white font-['Lexend'] font-semibold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300 inline-block">
                  {f.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
