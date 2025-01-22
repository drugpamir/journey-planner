import React from "react";
import { NavLink } from "react-router";
import { TO_ABOUT } from "../pages/About";
import { TO_LOCATIONS } from "../pages/Locations";
import { TO_JOURNEYS } from "../pages/Journeys";
import { TO_JOURNEY_EDITOR } from "../pages/JourneyEditor";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to={TO_ABOUT}>О планировщике</NavLink>
      <NavLink to={TO_LOCATIONS}>Локации</NavLink>
      <NavLink to={TO_JOURNEYS}>Маршруты</NavLink>
      <NavLink to={TO_JOURNEY_EDITOR}>Редактор</NavLink>
    </nav>
  );
};
