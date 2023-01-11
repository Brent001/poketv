import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Anime from "./pages/Anime";
import Menu from "./components/Menu";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`flex flex-col min-h-screen bg-slate-200 ${
        isOpen ? "h-screen overflow-y-hidden" : " "
      }`}
    >
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Anime />} path="/anime/:animeId" />
      </Routes>
      <ReactQueryDevtools />
      <Footer />
    </div>
  );
}

export default App;
