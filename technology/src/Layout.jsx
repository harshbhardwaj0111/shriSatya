import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SstHome from "./pages/SstHome";
import SstContactus from "./pages/SstContactus";
import SstCareer from "./pages/SstCareer";

function Layout() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SstHome />} />
          <Route path="/sstcareer" element={<SstCareer />} />
          <Route path="/sstcontactus" element={<SstContactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;