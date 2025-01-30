import React from "react";

import NavItem from "./NavItem";
import DialogButton from "./DialogButton";
import ModalLoginForm from "./ModalLoginForm";
import useUser from "../hooks/useUser";
import { AppRoutes } from "../utils/consts";
import { useAppDispatch } from "../hooks/redux";
import { logoutUser } from "../redux/userActionCreators";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useUser();

  const handleLogButton = () => {
    if (user) {
      dispatch(logoutUser());
      setUser(null);
    } else {
      console.log("handleLogButton");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavItem to={AppRoutes.ABOUT}>About</NavItem>
        <NavItem to={AppRoutes.CITIES}>Cities</NavItem>
        <NavItem to={AppRoutes.JOURNEYS}>Journeys</NavItem>
        <NavItem to={AppRoutes.JOURNEY_EDITOR}>Editor</NavItem>
      </div>
      <div className="navbar__btns">
        <DialogButton onClick={handleLogButton}>
          {user ? "Logout" : "Login"}
        </DialogButton>
      </div>
      {!user && <ModalLoginForm />}
    </nav>
  );
};

export default NavBar;
