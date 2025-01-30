import React from "react";

interface Props {
  children: any;
  visible: boolean;
  // setVisible(): void;
}

const ModelDialog = ({ children, visible }: Props) => {
  console.log("ModelDialog children", children);
  return (
    <div className={visible ? "modalDialog active" : "modalDialog"}>
      <div className="modalContent">{children}</div>
    </div>
  );
};

export default ModelDialog;
