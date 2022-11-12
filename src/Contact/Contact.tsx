import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Waves2 from "../Assets/Waves2";
import { ActionButton } from "../Components/ActionButton";
import "./Contact.scss";
const setProp = (ref, prop, value) =>
  ref.current.style.setProperty(prop, value);

export const Contact: FunctionComponent = () => {
  const [cardActive, setCardActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setProp(ref, "--dx", "0deg");
    setProp(ref, "--dy", "0deg");
  }, []);

  const onMouseMove = (e) => {
    if (cardActive) {
      if (!ref.current) return;
      let width = ref.current.offsetWidth;
      let XRel = e.pageX - ref.current.offsetLeft;
      let YRel = e.pageY - ref.current.offsetTop;

      let YAngle = -(0.5 - XRel / width) * 40;
      let XAngle = (0.5 - YRel / width) * 40;
      // console.log(XAngle,Math.sqrt(XAngle * XAngle ))
      setProp(ref, "--dx", `${XAngle}deg`);
      setProp(ref, "--dy", `${YAngle}deg`);
      setProp(
        ref,
        "--dp",
        `${Math.sqrt(XAngle * XAngle) + Math.sqrt(YAngle * YAngle) / 2}%`
      );
    }
  };

  const onPointerOut = (e) => {
    setProp(ref, "--dx", "0deg");
    setProp(ref, "--dy", "0deg");
    setProp(ref, "--dp", "0%");
    setCardActive(false);
  };

  const onMouseEnter = () => {
    setCardActive(true);
  };

  return (
    <div id="contact-page-wrapper">
      <div
        ref={ref}
        id="card"
        onMouseMove={onMouseMove}
        onMouseLeave={onPointerOut}
        onMouseEnter={onMouseEnter}
      >
        <div id="card-background" />
        <div id="card-content">
          <div>
            Hello there !<br />
            I'm looking for a freelancer to help me with :{" "}
          </div>
          <textarea
            className="largeInput input"
            placeholder="What can I help you with?"
          ></textarea>
          <div>
            You can reach me at{" "}
            <input
              type="text"
              placeholder="Email"
              className="input email-input"
            ></input>
          </div>
          <div>
            Xoxo,{" "}
            <input
              type="text"
              className="input name-input"
              placeholder="Name"
            ></input>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div id="card-to">
          <div id="img-wrapper">
            <div className="Img"></div>
          </div>
          <div id="to-infos">
            <div id="my-mail">marie.gavillon@gmail.com</div>
            <hr className="horizontal-divider"/>
            <hr className="horizontal-divider"/>
            <hr className="horizontal-divider"/>
          </div>
        </div>
        <div id="send-button" className={"no-select " + "send-abled"}>
          Send
        </div>
        {/* <ActionButton text="SEND" /> */}
      </div>
      <h3>or drop a message here</h3>
      <div id="wave-background-wrapper">
        <Waves2 />
      </div>
    </div>
  );
};
