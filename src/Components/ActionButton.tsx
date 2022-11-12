import React from "react";
import "./Components.scss";

interface ActionButtonProps {
  text: string;
  action?: any;
}
export const ActionButton: React.FC<ActionButtonProps> = ({ text, action}) => {
  return (
    <div id="action-wrapper" className="no-drag no-select" onClick={action}>
      <div id="action" className="button">
        <p>{text}</p>
      </div>
    </div>
  );
};
