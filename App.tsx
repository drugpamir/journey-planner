import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, TO_ABOUT } from "./pages/About";
import { Locations, TO_LOCATIONS } from "./pages/Locations";
import { Journeys, TO_JOURNEYS } from "./pages/Journeys";
import { JourneyEditor, TO_JOURNEY_EDITOR } from "./pages/JourneyEditor";
import { NavBar } from "./components/NavBar";
import "./styles.css";
import { getAllCityInfo } from "./redux/actionCreators";
import { useAppDispatch } from "./hooks/redux";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCityInfo("Podolsk"));
  }, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path={TO_ABOUT} element={<About />} />
        <Route path={TO_LOCATIONS} element={<Locations />} />
        <Route path={TO_JOURNEYS} element={<Journeys />} />
        <Route path={TO_JOURNEY_EDITOR} element={<JourneyEditor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
