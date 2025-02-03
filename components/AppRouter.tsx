import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import About from "../pages/About";
import Cities from "../pages/Cities";
import Journeys from "../pages/Journeys";
import JourneyEditor from "../pages/JourneyEditor";
import Error404 from "../pages/Error404";
import { AppRoutes } from "../utils/consts";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<About />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.ABOUT} element={<About />} />
      <Route path={AppRoutes.CITIES} element={<Cities />} />
      <Route path={AppRoutes.JOURNEYS} element={<Journeys />} />
      <Route path={AppRoutes.JOURNEY_EDITOR} element={<JourneyEditor />} />
      <Route path={AppRoutes.ERROR_404} element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;
