<<<<<<< HEAD
import React, { FunctionComponent } from "react";
import { LightInDark } from "./LightInDark";
import "./Dual3D.scss";

export const Dual3D: FunctionComponent = () => {
  return (
    <div id="dual3D-wrapper" className="home-wrapper">
      <h2>I'm searching light in the dark</h2>
      <div id="dual-container">
        <LightInDark id="dual-left" className="dual-component" />
        <div id="dual-right" className="dual-component" />
      </div>
      <h2 id="order">Order in chaos</h2>
    </div>
  );
};
=======
import React, { FunctionComponent }  from 'react';

export const Dual3D:FunctionComponent = () => {
    return(
        <div id="dual3D-wrapper" className='home-wrapper'>
            <h2>I'm searching light in the dark</h2>
            <div>

            </div>
        </div>
    )
}
>>>>>>> 44ce0450cacafcc2fb1e72f1312ce656ea40bf60
