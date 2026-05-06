import { useState } from "react";
import type { RelatedPost } from "./SideBar";

// ============================================================
export default function RelatedPostCard({ post }: { post: RelatedPost }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className={`flex gap-3 group transition-all duration-200 rounded-xl p-2 -mx-2 ${hovered ? "bg-sky-50" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
        <img
          src={post.thumbnail}
          alt={post.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${hovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <span
          className="text-[10px] font-bold text-sky-500 uppercase tracking-wide"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {post.category}
        </span>
        <p
          className={`text-xs font-bold leading-snug mt-0.5 line-clamp-2 transition-colors duration-200 ${hovered ? "text-blue-600" : "text-gray-700"}`}
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {post.title}
        </p>
        <p
          className="text-[10px] text-gray-400 mt-1 font-semibold"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          📅 {post.date}
        </p>
      </div>
    </a>
  );
}
