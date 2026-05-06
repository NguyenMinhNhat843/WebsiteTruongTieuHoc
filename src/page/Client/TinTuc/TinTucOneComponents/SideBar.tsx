import RelatedPostCard from "./RelatedPosstCard";

interface Category {
  id: number;
  label: string;
  count: number;
}

export interface RelatedPost {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  category: string;
}

export default function Sidebar() {
  const CATEGORIES: Category[] = [
    { id: 1, label: "Tin tức trường", count: 24 },
    { id: 2, label: "Hoạt động", count: 18 },
    { id: 3, label: "Học tập", count: 32 },
    { id: 4, label: "Ngoại khoá", count: 11 },
    { id: 5, label: "Thông báo", count: 9 },
  ];

  const RELATED_POSTS: RelatedPost[] = [
    {
      id: 1,
      title: "Hội trại xuân 2025 – Ngày hội vui tươi của các em học sinh",
      thumbnail:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      date: "15/04/2025",
      category: "Hoạt động",
    },
    {
      id: 2,
      title: "Kết quả thi học kỳ 1 năm học 2024–2025",
      thumbnail:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
      date: "08/04/2025",
      category: "Học tập",
    },
    {
      id: 3,
      title: "Chương trình ngoại khoá tham quan bảo tàng lịch sử",
      thumbnail:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
      date: "01/04/2025",
      category: "Ngoại khoá",
    },
  ];

  return (
    <aside className="space-y-6">
      {/* Search */}
      <SidebarCard title="🔍 Tìm kiếm">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Tìm bài viết..."
            className="flex-1 px-4 py-2 rounded-full border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 bg-sky-50"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold hover:bg-blue-600 transition-colors">
            →
          </button>
        </div>
      </SidebarCard>

      {/* Related Posts */}
      <SidebarCard title="📰 Tin liên quan">
        <div className="space-y-4">
          {RELATED_POSTS.map((post) => (
            <RelatedPostCard key={post.id} post={post} />
          ))}
        </div>
      </SidebarCard>

      {/* Categories */}
      <SidebarCard title="📂 Danh mục">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className="flex items-center gap-1 px-3 py-1.5 bg-sky-50 text-sky-700 text-xs font-bold rounded-full border border-sky-100 hover:bg-sky-200 hover:border-sky-300 transition-all duration-200"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {cat.label}
              <span className="bg-sky-200 text-sky-800 text-[10px] font-extrabold px-1.5 rounded-full">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </SidebarCard>

      {/* Admission Banner */}
      <div
        className="rounded-2xl p-6 text-center overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)" }}
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-4 translate-x-4" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-300/20 rounded-full translate-y-4 -translate-x-4" />
        <div className="relative">
          <div className="text-3xl mb-2">🌟</div>
          <h4
            className="text-white font-extrabold text-sm mb-1"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nhập học 2025
          </h4>
          <p
            className="text-sky-100 text-xs mb-4 leading-snug"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Hạn nộp hồ sơ:
            <br />
            <strong>30/06/2025</strong>
          </p>
          <button
            className="px-5 py-2 bg-yellow-400 text-yellow-900 text-xs font-extrabold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Đăng ký ngay →
          </button>
        </div>
      </div>
    </aside>
  );
}

// ============================================================
// COMPONENT: SidebarCard wrapper
// ============================================================
function SidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-sky-50 p-5 transition-all duration-700 `}
      data-aos="fade-up"
    >
      <h3
        className="font-extrabold text-gray-700 text-sm mb-4 pb-3 border-b border-sky-100"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
