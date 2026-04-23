import { useState, useEffect } from "react";
import { GALLERY } from "../../../Mock/MockData/Home/homeMockData";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import StatBandSection from "./components/StatBandSection";
import AboutSection from "./components/AboutSection";
import ProgramSection from "./components/ProgramSection";
import GallerySection from "./components/GallerySection";
import FeedBackSection from "./components/FeedBackSection";
import NewsEventSection from "./components/NewsEventSection";
import CTABanner from "./components/CTABanner";

/* ─────────────────────────── COMPONENT ─────────────────────── */
export default function PrimarySchoolHomepage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div className="lightbox-bg" onClick={() => setLightbox(null)}>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
              color: "white",
              fontSize: 36,
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
            }}
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: 56,
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
              padding: "0 12px",
            }}
          >
            ‹
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 900, width: "100%", margin: "0 24px" }}
          >
            <img
              src={GALLERY[lightbox].src
                .replace("w=600", "w=1200")
                .replace("w=400", "w=800")}
              alt={GALLERY[lightbox].caption}
              style={{
                width: "100%",
                maxHeight: "78vh",
                objectFit: "contain",
                borderRadius: 16,
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            />
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 700,
                marginTop: 16,
                fontSize: 18,
              }}
            >
              {GALLERY[lightbox].caption}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % GALLERY.length);
            }}
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: 56,
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
              padding: "0 12px",
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── FEATURES ── */}
      <FeatureSection />

      {/* ── STATS BAND ── */}
      <StatBandSection />

      {/* ── ABOUT ── */}
      <AboutSection />

      {/* PROGRAM */}
      <ProgramSection />

      {/* GALLERY */}
      <GallerySection setLightbox={setLightbox} />

      {/* FEEDBACK */}
      <FeedBackSection />

      {/* NEWS & EVENTS */}
      <NewsEventSection />

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </div>
  );
}
