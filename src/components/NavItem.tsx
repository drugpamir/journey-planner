import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, children = "" }: { to: string; children?: any }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navbar__link active" : "navbar__link"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
