"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotbar from "./components/Hotbar";
import HomeInicial from "./pages/Home";
import { useEffect, useState } from "react";
import Personagens from "./pages/Personagens";

export default function Home() {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
    {
      isClient ? (
        <BrowserRouter>
          <Hotbar />
          <Routes>
            <Route path="/" element={<HomeInicial/>}/>
            <Route path="/personagens" element={<Personagens/>}/>
          </Routes>
        </BrowserRouter>
      ) : <h2 className="text-center">Carregando...</h2>
    }
    </>
  );
}
