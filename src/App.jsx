import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Anime from "./pages/Anime";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Anime />} path="/anime/:animeId" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
