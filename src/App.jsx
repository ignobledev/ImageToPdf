import React from "react";
import Navbar from "./components/Navbar"
import Tools from "./components/Tools"
import Toolkit from "./components/Toolkit"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from "./components/Tools/Tools";
import ImageToPdf from ".components/ImageToPdf";

function app(){
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tools />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
      </Routes>
    </BrowserRouter>
  );
}
export default app;
