import React, { FunctionComponent } from "react";
import { Dual3D } from "./04/Dual3D";
import { GalleryPreview } from "./03/GalleryPreview";
import { Grow } from "./05/Grow";
import { Hello } from "./01/Hello";
import { Whoami } from "./02/Whoami";
import { Contact } from "./06/Contact";
import Waves3 from "../Assets/Waves3";

export const Home: FunctionComponent = () => {
  return (
    <>
      <div id="background-wave-2">
        <Waves3 />
        <div id="background-verlay" />
        {/* <Waves2 /> */}
      </div>
      <Hello />
      <Whoami />
      <GalleryPreview />
      <Dual3D />
      <Grow />
      <Contact />
    </>
  );
};
