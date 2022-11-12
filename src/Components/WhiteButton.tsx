import React from "react";
import "./Components.scss";

interface WhiteButtonProps {
  text: string;
}
export const WhiteButton: React.FC<WhiteButtonProps> = ({ text }) => {
  return (
      <div id="white" className="button">
        <p>{text}</p>
      </div>
  );
};
