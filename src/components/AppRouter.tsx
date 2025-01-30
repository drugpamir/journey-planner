import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import About from "../pages/About";
import Cities from "../pages/Cities";
import Journeys from "../pages/Journeys";
import JourneyEditor from "../pages/JourneyEditor";
import { AppRoutes } from "../utils/consts";
import { userApi } from "../api/userApi";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<About />} />
      <Route
        path={AppRoutes.LOGIN}
        element={<Login userApi={userApi} routeIfLogin={AppRoutes.CITIES} />}
      />
      <Route path={AppRoutes.ABOUT} element={<About />} />
      <Route
        path={AppRoutes.CITIES}
        element={<Cities route={AppRoutes.CITIES} />}
      />
      <Route path={AppRoutes.JOURNEYS} element={<Journeys />} />
      <Route path={AppRoutes.JOURNEY_EDITOR} element={<JourneyEditor />} />
    </Routes>
  );
}

export default AppRouter;
