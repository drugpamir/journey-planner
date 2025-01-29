import React from "react";

function DialogButton({
  children,
  onClick,
  ...props
}: {
  children: any;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  props?: any;
}) {
  return (
    <button onClick={onClick} {...props} className={"dialogButton"}>
      {children}
    </button>
  );
}

export default DialogButton;
