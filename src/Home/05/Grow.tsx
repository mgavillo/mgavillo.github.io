import React, { FunctionComponent, useEffect, useRef } from "react";
import Svg from "./Svg";
import "./Grow.scss";
import Waves1 from "../../Assets/Waves1";
import { ActionButton } from "../../Components/ActionButton";
const setProp = (ref: any, prop: any, value: any) =>
  ref.current.style.setProperty(prop, value);

export const Grow: FunctionComponent = () => {
  let paths;
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      let top = ref?.current?.getBoundingClientRect().top;
      if (!top) return;
      top *= -1;

      let scrollPercentage = top < 0 ? 0 : top / (window.innerHeight * 2); // Length to offset the dashes

      let tree = document.getElementById("tree");

      console.log(scrollPercentage);
      setProp(ref, "--scroll", `${-400 + scrollPercentage * 600}px`);
    });
  }, []);
  return (
    <div ref={ref} id="grow-wrapper" className="home-wrapper">
      <div id="scroll-wrapper">
        <h2>
          And i'm always
          <br />
          keen to grow
        </h2>
        <div id="svg-container">
          <div id="svg-wrapper">
            <Svg />
          </div>
          <div id="contact-wrapper">
            <ActionButton text="contact" />
          </div>
        </div>
        <div id="background-wrapper">
          <Waves1 />
        </div>
      </div>
    </div>
  );
};
