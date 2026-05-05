import { ShieldCheck, Heart, School, Star } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Môi trường an toàn",
    desc: "Hệ thống an ninh 24/7 và quy trình chăm sóc sức khỏe học đường nghiêm ngặt.",
    delay: "0",
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Giáo viên tận tâm",
    desc: "Đội ngũ sư phạm giàu kinh nghiệm, yêu trẻ và luôn đồng hành cùng sự phát triển của con.",
    delay: "100",
  },
  {
    icon: <School className="w-10 h-10 text-green-600" />,
    title: "Cơ sở vật chất",
    desc: "Phòng học hiện đại, sân chơi rộng rãi và đầy đủ các phòng chức năng năng khiếu.",
    delay: "200",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Phát triển toàn diện",
    desc: "Chương trình học kết hợp kỹ năng sống, ngoại ngữ và tư duy sáng tạo.",
    delay: "300",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            data-aos="fade-up"
          >
            Giá Trị Cốt Lõi Của Nhà Trường
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Chúng tôi cam kết mang lại không gian giáo dục tốt nhất, nơi mỗi đứa
            trẻ đều được tôn trọng và phát triển theo cách riêng biệt.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
