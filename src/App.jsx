import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Top50Books from "./Pages/Top50Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topbooks" element={<Top50Books />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
