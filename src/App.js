import React from "react";
import LOGIN from "./Components/LOGIN&SINGUP/LOGIN";
import { Route, Routes } from "react-router-dom";
import SINGUP from "./Components/LOGIN&SINGUP/SINGUP";
import CHATAPP from "./Components/MAINAPP/CHATAPP";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LOGIN/>}/>
      <Route path="/singup" element={<SINGUP/>}/>
      <Route path="/App" element={<CHATAPP />}/>
      <Route/>
    </Routes>
    </>
  );
}

export default App;
