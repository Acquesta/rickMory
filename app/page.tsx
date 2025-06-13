"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotbar from "./components/Hotbar";
import HomeInicial from "./pages/Home";
import { useEffect, useState } from "react";

export default function Home() {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
    <Hotbar />
    {
      isClient ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeInicial/>}/>
          </Routes>
        </BrowserRouter>
      ) : <h2>Carregando...</h2>
    }
    </>
  );
}
