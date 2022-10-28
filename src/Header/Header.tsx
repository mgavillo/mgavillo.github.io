import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import "./Header.scss";

export const Header: FunctionComponent = () => {
  const [night, setNight] = useState(true);

  const onSwitchClick = () => {
    setNight(!night)
    var r = document.querySelector(':root') as HTMLElement | null;
    if(!r) return
    if(night){
        r.style.setProperty('--background-color', 'white');  
        r.style.setProperty('--text-color', 'var(--darkBlue)');
    }
    else{
        r.style.setProperty('--background-color', 'var(--darkBlue)');
        r.style.setProperty('--text-color', 'white');
    }
}

  return (
    <nav id="header-wrapper">
      <div id="header-content">
        <Link to="/">Home</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div id="night-switch" onClick={onSwitchClick}>{night ? <Sun /> : <Moon />}</div>
    </nav>
  );
};
