import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import "./Header.scss";

export const Header: FunctionComponent = () => {
  const [night, setNight] = useState(true);

  const onSwitchClick = () => {
    setNight(!night);
    var r = document.querySelector(":root") as HTMLElement | null;
    if (!r) return;
    if (night) {
      r.style.setProperty("--background", "white");
      r.style.setProperty("--second", "var(--darkBlue)");
    } else {
      r.style.setProperty("--background", "var(--darkBlue)");
      r.style.setProperty("--second", "white");
    }
  };

  return (
    <nav id="header-wrapper">
      <div id="header-content">
        <div className="AWrapper">
          <Link to="/">Home</Link>
        </div>
        <div className="AWrapper">
          <Link to="/Gallery">Gallery</Link>
        </div>{" "}
        <div className="AWrapper">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      {/* <div id="night-switch" onClick={onSwitchClick}>{night ? <Sun /> : <Moon />}</div> */}
    </nav>
  );
};
