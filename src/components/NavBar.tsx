import React from "react";
import { TO_ABOUT } from "../pages/About";
import { TO_LOCATIONS } from "../pages/Locations";
import { TO_JOURNEYS } from "../pages/Journeys";
import { TO_JOURNEY_EDITOR } from "../pages/JourneyEditor";
import NavItem from "./NavItem";

export const NavBar = ({ activeTo: activeLink }: { activeTo: string }) => {
  console.log("activeTo:", activeLink);
  return (
    <nav className="navbar">
      <NavItem to={TO_ABOUT}>О планировщике</NavItem>
      <NavItem to={TO_LOCATIONS}>Локации</NavItem>
      <NavItem to={TO_JOURNEYS}>Маршруты</NavItem>
      <NavItem to={TO_JOURNEY_EDITOR}>Редактор</NavItem>
    </nav>
  );
};
