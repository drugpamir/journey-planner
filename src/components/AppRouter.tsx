import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Cities from "../pages/Cities";
import Journeys from "../pages/Journeys";
import JourneyEditor from "../pages/JourneyEditor";
import {
  ROUTE_ABOUT,
  ROUTE_CITIES,
  ROUTE_JOURNEYS,
  ROUTE_JOURNEY_EDITOR,
} from "../utils/consts";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<About />} />
      <Route path={ROUTE_ABOUT} element={<About />} />
      <Route path={ROUTE_CITIES} element={<Cities />} />
      <Route path={ROUTE_JOURNEYS} element={<Journeys />} />
      <Route path={ROUTE_JOURNEY_EDITOR} element={<JourneyEditor />} />
    </Routes>
  );
}

export default AppRouter;
