import { useEffect } from "react";
import "./App.css";
import AboutPage from "./page/Client/AboutPage/About";
import ClientLayout from "./page/Client/ClientLayout/ClientLayout";
import PrimarySchoolHomepage from "./page/Client/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
