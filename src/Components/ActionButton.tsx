import React from "react";
import "./Components.scss";

interface ActionButtonProps {
  text: string;
}
export const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <div id="action-wrapper" >
      <div id="action" className="button">
        <p>{text}</p>
      </div>
    </div>
  );
};
