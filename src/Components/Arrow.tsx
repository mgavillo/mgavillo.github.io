import React, { createRef, useEffect } from "react";
import "./Components.scss";

interface ArrowProps {
  side: string;
  size: number;
  clickAction?: React.MouseEventHandler<HTMLElement>;
}
export const Arrow = ({ side, size, clickAction }: ArrowProps) => {
  return (
    <i
      className={`arrow ${side}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={clickAction}
    ></i>
  );
};
