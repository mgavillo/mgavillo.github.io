import React, { FunctionComponent } from "react";
import { Twitter } from "./Twitter";
import { Instagram } from "./Instagram";
import "./Socials.scss";
import { useLocation } from "react-router-dom";

export const Socials: FunctionComponent = () => {
  const loc = useLocation()
  console.log(loc)
  return (
    <div id="socials-wrapper" className={loc.pathname === "/Contact" ? "socials-contact-page" : ""}>
      <Twitter />
      <Instagram />
    </div>
  );
};
