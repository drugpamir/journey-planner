import React from "react";
import { TO_ABOUT } from "../pages/About";
import { TO_CITIES } from "../pages/Cities";
import { TO_JOURNEYS } from "../pages/Journeys";
import { TO_JOURNEY_EDITOR } from "../pages/JourneyEditor";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavItem to={TO_ABOUT}>About</NavItem>
        <NavItem to={TO_CITIES}>Cities</NavItem>
        <NavItem to={TO_JOURNEYS}>Journeys</NavItem>
        <NavItem to={TO_JOURNEY_EDITOR}>Editor</NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
