import React from "react";

import NavItem from "./NavItem";
import { AppRoutes } from "../utils/consts";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavItem to={AppRoutes.ABOUT}>About</NavItem>
        <NavItem to={AppRoutes.CITIES}>Cities</NavItem>
        <NavItem to={AppRoutes.JOURNEYS}>Journeys</NavItem>
        <NavItem to={AppRoutes.JOURNEY_EDITOR}>Editor</NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
