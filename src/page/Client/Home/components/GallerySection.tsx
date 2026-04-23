import { useInView } from "../../../../hooks/useInvew";
import { GALLERY } from "../../../../Mock/MockData/Home/homeMockData";

interface GallerySectionProps {
  setLightbox: (idx: number | null) => void;
}

const GallerySection = ({ setLightbox }: GallerySectionProps) => {
  const [galleryRef, galleryInView] = useInView();
  return (
    <section className="py-24 px-6 bg-white" ref={galleryRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-14 stagger-1 ${galleryInView ? "stagger-visible" : ""}`}
        >
          <span className="inline-block text-green-500 font-heading font-700 text-sm uppercase tracking-widest mb-3">
            Cuộc sống tại Sunrise
          </span>
          <h2 className="font-heading font-900 text-4xl text-gray-900 mb-4">
            Những khoảnh khắc <span className="text-green-500">đáng nhớ</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Từ những hội chợ khoa học đến các ngày hội thể thao — mỗi ngày tại
            đây đều tràn ngập niềm vui, sự khám phá và gắn kết.
          </p>
        </div>

        {/* Masonry grid */}
        <div className={`stagger-2 ${galleryInView ? "stagger-visible" : ""}`}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "200px",
              gap: 14,
            }}
          >
            {/* Large item spanning 2 cols x 2 rows */}
            <div
              className="gitem"
              style={{ gridColumn: "span 2", gridRow: "span 2" }}
              onClick={() => setLightbox(0)}
            >
              <img src={GALLERY[0].src} alt={GALLERY[0].caption} />
              <div className="g-overlay">
                <div>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {GALLERY[0].caption}
                  </span>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 11,
                      marginTop: 2,
                    }}
                  >
                    Click to view
                  </div>
                </div>
              </div>
            </div>
            {/* 2 smalls */}
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="gitem"
                style={{ gridColumn: "span 1", gridRow: "span 1" }}
                onClick={() => setLightbox(idx)}
              >
                <img src={GALLERY[idx].src} alt={GALLERY[idx].caption} />
                <div className="g-overlay">
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {GALLERY[idx].caption}
                  </span>
                </div>
              </div>
            ))}
            {/* Large item */}
            <div
              className="gitem"
              style={{ gridColumn: "span 2", gridRow: "span 2" }}
              onClick={() => setLightbox(3)}
            >
              <img src={GALLERY[3].src} alt={GALLERY[3].caption} />
              <div className="g-overlay">
                <div>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {GALLERY[3].caption}
                  </span>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 11,
                      marginTop: 2,
                    }}
                  >
                    Bấm để xem
                  </div>
                </div>
              </div>
            </div>
            {/* 3 smalls */}
            {[4, 5].map((idx) => (
              <div
                key={idx}
                className="gitem"
                style={{ gridColumn: "span 1", gridRow: "span 1" }}
                onClick={() => setLightbox(idx)}
              >
                <img src={GALLERY[idx].src} alt={GALLERY[idx].caption} />
                <div className="g-overlay">
                  <span
                    style={{
                      color: "white",
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {GALLERY[idx].caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-10 stagger-3 ${galleryInView ? "stagger-visible" : ""}`}
        >
          <button className="btn-primary px-8 py-3.5 text-sm shadow-lg shadow-blue-200 inline-flex items-center gap-2">
            Xem toàn bộ thư viện
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
