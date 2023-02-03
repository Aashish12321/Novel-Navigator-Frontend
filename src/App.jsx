import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetRecommedations from "./Pages/GetRecommedations";
import Homepage from "./Pages/Homepage";
import Top50Books from "./Pages/Top50Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topbooks" element={<Top50Books />}></Route>
        <Route path="/recommendations" element={<GetRecommedations />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
