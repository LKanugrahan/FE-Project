import { useEffect, useState } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchMenu from "../pages/SearchMenu";
import AddMenu from "../pages/AddMenu";
import DetailMenu from "../pages/DetailMenu";
import ProfileMenu from "../pages/ProfileMenu";
import LandingPage from "../pages/LandingPage";
import AuthChecker from "../pages/privateRoute/authChecker";
// import tester
import { SearchLanding, SearchUpdate, Apps } from "../System/Bar";
import { Tes } from "../System/Logic/tes";
import UpdateMenu from "../pages/UpdateMenu";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/search" element={<SearchMenu />} />
          <Route path="/add-menu" element={<AuthChecker><AddMenu /></AuthChecker>} />
          <Route path="/detail/:id" element={<DetailMenu />} />
          <Route path="/profile-menu" element={<ProfileMenu />} />
          <Route path="/add-menu/:id" element={<UpdateMenu />} />
          {/* Bar Tester */}
          <Route path="/checkers/:id" element={<SearchUpdate />} />
          <Route path="/check" element={<Apps />} />
          <Route path="/checker" element={<Tes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
