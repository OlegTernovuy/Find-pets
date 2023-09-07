import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";
import { PetPage } from "./pages/PetPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/auth"} element={<AuthPage />} />
        <Route path={"/pet/:id"} element={<PetPage />} />
      </Routes>
    </div>
  );
}

export default App;
