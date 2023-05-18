import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./MyContext"
import Footer from "./components/Footer"

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {



  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([])

  const getFotos = async () => {
    const res = await fetch(endpoint);
    let { photos } = await res.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.large,
      desc: photo.alt,
      favorito: false
    }));
    setFotos(photos);
  }

  useEffect(() => {
    getFotos();
  }, []);


  const GlobalState = { fotos, setFotos }

  return (
    <div className="App">
      <MyContext.Provider value={GlobalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}