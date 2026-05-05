import { useEffect } from "react";
import "./App.css";
import AboutPage from "./page/Client/AboutPage/About";
import ClientLayout from "./page/Client/ClientLayout/ClientLayout";
import PrimarySchoolHomepage from "./page/Client/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import AcademicProgram from "./page/Client/ChuongTrinhPage/ChuongTrinh";
import TuyenSinhPage from "./page/Client/TuyenSinhPage/TuyenSinhPage";
import ContactPage from "./page/Client/LienHe/ContactPage";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route path="/" element={<PrimarySchoolHomepage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/chuong-trinh-hoc" element={<AcademicProgram />} />
          <Route path="/tuyen-sinh" element={<TuyenSinhPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
