import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, TO_ABOUT } from "../pages/About";
import { Cities, TO_CITIES } from "../pages/Cities";
import { Journeys, TO_JOURNEYS } from "../pages/Journeys";
import { JourneyEditor, TO_JOURNEY_EDITOR } from "../pages/JourneyEditor";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path={TO_ABOUT} element={<About />} />
      <Route path={TO_CITIES} element={<Cities />} />
      <Route path={TO_JOURNEYS} element={<Journeys />} />
      <Route path={TO_JOURNEY_EDITOR} element={<JourneyEditor />} />
    </Routes>
  );
}

export default AppRouter;
