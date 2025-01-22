import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Journeys from "./pages/Journeys";
import JourneyEditor from "./pages/JourneyEditor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="locations" element={<Locations />} />
        <Route path="journeys" element={<Journeys />} />
        <Route path="editor" element={<JourneyEditor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
