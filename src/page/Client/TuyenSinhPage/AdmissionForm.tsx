import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const AdmissionForm = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentName: "",
    birthYear: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Giả lập gửi API
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  if (status === "success") {
    return (
      <section className="py-20 bg-white" id="register-form">
        <div
          className="container mx-auto px-6 max-w-xl text-center"
          data-aos="zoom-in"
        >
          <div className="bg-green-50 border border-green-100 p-12 rounded-[3rem] shadow-xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
              <CheckCircle2 className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Đăng ký thành công!
            </h2>
            <p className="text-gray-600 mb-8">
              Cảm ơn Quý phụ huynh. Ban tuyển sinh sẽ liên hệ với bạn trong vòng
              24 giờ làm việc.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-green-600 font-semibold hover:underline"
            >
              Gửi thêm yêu cầu mới
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register-form" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-blue-100">
          {/* Cột trái: Nội dung dẫn dắt */}
          <div className="md:w-2/5 bg-blue-600 p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
              Giữ chỗ ngay <br />
              cho con bạn!
            </h2>
            <ul
              className="space-y-4 text-blue-100"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  1
                </div>
                <span>Tư vấn lộ trình học phí</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  2
                </div>
                <span>Tham quan trường miễn phí</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                  3
                </div>
                <span>Nhận bộ quà tặng nhập học</span>
              </li>
            </ul>
          </div>

          {/* Cột phải: Form thực tế */}
          <div className="md:w-3/5 p-10 md:p-14">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-aos="fade-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tên phụ huynh */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Tên phụ huynh
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                  />
                </div>

                {/* Số điện thoại */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Số điện thoại
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                {/* Tên học sinh */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Tên học sinh
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Nguyễn Văn B"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                  />
                </div>

                {/* Năm sinh */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Năm sinh của con
                  </label>
                  <select
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, birthYear: e.target.value })
                    }
                  >
                    <option value="">Chọn năm sinh</option>
                    <option value="2020">2020 (Vào lớp 1)</option>
                    <option value="2019">2019 (Vào lớp 2)</option>
                    <option value="2018">2018 (Vào lớp 3)</option>
                  </select>
                </div>
              </div>

              <button
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg tracking-wide uppercase"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    Gửi yêu cầu ngay
                    <Send size={20} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Cam kết bảo mật thông tin 100% theo quy định của nhà trường.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
