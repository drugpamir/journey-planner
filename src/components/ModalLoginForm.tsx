import React from "react";

import LoginForm from "../components/LoginForm";
import ModalDialog from "./ModalDialog";

const ModalLoginForm = () => {
  console.log("ModalLoginForm");
  return (
    <ModalDialog visible={true}>
      <LoginForm />
    </ModalDialog>
  );
};

export default ModalLoginForm;
