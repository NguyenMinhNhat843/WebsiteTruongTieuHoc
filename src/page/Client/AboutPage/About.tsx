import Overview from "./components/OverviewSection";
import MVV from "./components/MVV";
import TeamSection from "./components/Team";
import Facilities from "./components/Facilities";
import Hero from "./components/Hero";
import CTABanner from "../../../components/views/CTABanner";

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <Hero />

      {/* ── OVERVIEW ── */}
      <Overview />

      {/* ── MISSION / VISION / VALUES ── */}
      <MVV />

      {/* ── TEAM ── */}
      <TeamSection />

      {/* ── FACILITIES ── */}
      <Facilities />

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </div>
  );
}
