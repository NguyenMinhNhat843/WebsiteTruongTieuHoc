const CTABanner = () => {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#2563EB 0%,#3B82F6 50%,#4F46E5 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 240,
          height: 240,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
        }}
      />
      <div
        className="max-w-3xl mx-auto text-center relative"
        style={{ zIndex: 1 }}
      >
        <div className="text-5xl mb-4">🌟</div>
        <h2 className="font-heading font-900 text-4xl text-white mb-4">
          Sẵn sàng gia nhập gia đình TechCorp?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Cổng tuyển sinh cho năm học 2025–2026 hiện đã mở. Chúng tôi rất mong
          được chào đón con em của bạn gia nhập cộng đồng của chúng tôi.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="bg-white text-blue-600 font-heading font-800 px-10 py-4 rounded-full text-base shadow-xl hover:bg-blue-50 transition-all"
            style={{ cursor: "pointer", border: "none" }}
          >
            Bắt đầu nộp hồ sơ
          </button>
          <button
            className="font-heading font-700 text-white px-8 py-4 rounded-full text-base transition-colors"
            style={{
              border: "2px solid rgba(255,255,255,0.6)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Đặt lịch tham quan
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
