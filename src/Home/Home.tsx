import React, { FunctionComponent } from "react";
import { Dual3D } from "./04/Dual3D";
import { GalleryPreview } from "./03/GalleryPreview";
import { Grow } from "./05/Grow";
import { Hello } from "./01/Hello";
import { Whoami } from "./02/Whoami";
import { Contact } from "./06/Contact";
<<<<<<< HEAD
import Waves3 from "../Assets/Waves3";
=======
>>>>>>> 44ce0450cacafcc2fb1e72f1312ce656ea40bf60

export const Home: FunctionComponent = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <Hello />
      <Whoami />
      <GalleryPreview/>
      <Dual3D/>
      <Grow/>
      <Contact/>
>>>>>>> 44ce0450cacafcc2fb1e72f1312ce656ea40bf60
    </>
  );
};
