import { Route, Routes } from "react-router-dom";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Stream from "./pages/Stream";
import Search from "./pages/Search";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen bg-slate-200">
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Search />} path="/search" />
        <Route element={<Anime />} path="/anime/:animeId" />
        <Route element={<Stream />} path="/watch/:animeId/:episodeId" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
