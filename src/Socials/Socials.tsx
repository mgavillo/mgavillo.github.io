import React, { FunctionComponent } from "react";
import { Twitter } from "./Twitter";
import { Instagram } from "./Instagram";
import "./Socials.scss";

export const Socials: FunctionComponent = () => {
  return (
    <div id="socials-wrapper">
      <Twitter />
      <Instagram />
    </div>
  );
};
