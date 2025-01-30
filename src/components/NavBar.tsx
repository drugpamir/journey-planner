import React from "react";
import { ROUTE_ABOUT } from "../utils/consts";
import { ROUTE_CITIES } from "../utils/consts";
import { ROUTE_JOURNEYS } from "../utils/consts";
import { ROUTE_JOURNEY_EDITOR } from "../utils/consts";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavItem to={ROUTE_ABOUT}>About</NavItem>
        <NavItem to={ROUTE_CITIES}>Cities</NavItem>
        <NavItem to={ROUTE_JOURNEYS}>Journeys</NavItem>
        <NavItem to={ROUTE_JOURNEY_EDITOR}>Editor</NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
