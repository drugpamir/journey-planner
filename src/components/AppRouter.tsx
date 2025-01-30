import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Cities from "../pages/Cities";
import Journeys from "../pages/Journeys";
import JourneyEditor from "../pages/JourneyEditor";
import { AppRoutes } from "../utils/consts";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<About />} />
      <Route path={AppRoutes.ABOUT} element={<About />} />
      <Route path={AppRoutes.CITIES} element={<Cities />} />
      <Route path={AppRoutes.JOURNEYS} element={<Journeys />} />
      <Route path={AppRoutes.JOURNEY_EDITOR} element={<JourneyEditor />} />
    </Routes>
  );
}

export default AppRouter;
