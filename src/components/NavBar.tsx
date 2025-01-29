import React from "react";
import { TO_ABOUT } from "../pages/About";
import { TO_CITIES } from "../pages/Cities";
import { TO_JOURNEYS } from "../pages/Journeys";
import { TO_JOURNEY_EDITOR } from "../pages/JourneyEditor";
import NavItem from "./NavItem";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavItem to={TO_ABOUT}>О планировщике</NavItem>
      <NavItem to={TO_CITIES}>Локации</NavItem>
      <NavItem to={TO_JOURNEYS}>Маршруты</NavItem>
      <NavItem to={TO_JOURNEY_EDITOR}>Редактор</NavItem>
    </nav>
  );
};
