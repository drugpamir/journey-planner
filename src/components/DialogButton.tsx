import React from "react";

function DialogButton({ children, ...props }: { children: any }) {
  return (
    <button {...props} className={"dialogButton"}>
      {children}
    </button>
  );
}

export default DialogButton;
