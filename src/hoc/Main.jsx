import "../assets/sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Landing from "../views/landing/Landing";
import Volcano from "../views/volcano_story/Volcano";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="volcano" element={<Volcano />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Main;
