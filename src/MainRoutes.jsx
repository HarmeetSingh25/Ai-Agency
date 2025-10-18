import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Services from "./Pages/services";
import Work from "./Pages/work";
import Testimonial from "./Pages/Testimonial";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
