import { useEffect, useState } from "react";
import { NAV_LINKS } from "./navItem";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white text-xl">🏫</span>
          </div>
          <div>
            <div className="font-heading font-900 text-lg leading-tight text-gray-900">
              TeachCrop
            </div>
            <div className="font-heading text-xs font-600 text-blue-500 leading-tight -mt-0.5">
              Trường tiểu học
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="nav-link text-sm">
              {link}
            </a>
          ))}
        </nav>

        {/* Enroll button */}
        <div className="hidden lg:block">
          <button className="btn-primary px-6 py-2.5 text-sm shadow-lg shadow-blue-200">
            Đăng ký ngay
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu lg:hidden bg-white border-t border-gray-100 ${menuOpen ? "open" : ""}`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-heading font-600 text-gray-700 py-1.5 border-b border-gray-50"
            >
              {link}
            </a>
          ))}
          <button className="btn-primary px-6 py-2.5 text-sm mt-2 w-fit">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
