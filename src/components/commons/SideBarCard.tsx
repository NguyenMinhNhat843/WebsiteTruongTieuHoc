import { useScrollReveal } from "../../page/Client/TinTuc/hook/useScrollReveal";

// ============================================================
export default function SidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-sm border border-sky-50 p-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
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
