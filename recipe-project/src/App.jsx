import { useEffect, useState } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchMenu from "./pages/SearchMenu";
import AddMenu from "./pages/AddMenu";
import DetailMenu from "./pages/DetailMenu";
import ProfileMenu from "./pages/ProfileMenu";
import LandingPage from "./pages/LandingPage";
import { SearchLanding, SearchUpdate } from "./System/Bar";
import { Tes } from "./System/Logic/tes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/search" element={<SearchMenu />} />
          <Route path="/add-menu" element={<AddMenu />} />
          <Route path="/detail" element={<DetailMenu />} />
          <Route path="/profile-menu" element={<ProfileMenu />} />
          <Route path="/tas" element={<SearchLanding />} />
          <Route path="/tis" element={<Tes />} />
          <Route path="/update/:ids" element={<SearchUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
