import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { MainPage } from "./components/pages/MainPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { PetPage } from "./components/pages/PetPage";
import { SignInPage } from "./components/pages/SignInPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/signUp"} element={<SignUpPage />} />
        <Route path={"/signIn"} element={<SignInPage />} />
        <Route path={"/pet/:id"} element={<PetPage />} />
      </Routes>
    </div>
  );
}

export default App;
