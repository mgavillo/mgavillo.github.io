import React, { FunctionComponent } from "react";
import { Dual3D } from "./04/Dual3D";
import { GalleryPreview } from "./03/GalleryPreview";
import { Grow } from "./05/Grow";
import { Hello } from "./01/Hello";
import { Whoami } from "./02/Whoami";
import { Contact } from "./06/Contact";

export const Home: FunctionComponent = () => {
  return (
    <>
      <Hello />
      <Whoami />
      <GalleryPreview/>
      <Dual3D/>
      <Grow/>
      <Contact/>
    </>
  );
};
