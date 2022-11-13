<<<<<<< HEAD
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Waves2 from "../Assets/Waves2";
import { ActionButton } from "../Components/ActionButton";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
const setProp = (ref, prop, value) =>
  ref.current.style.setProperty(prop, value);

export const Contact: FunctionComponent = () => {
  const [cardActive, setCardActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const [send, setSend] = useState<{
    message: string;
    email: string;
    name: string;
  }>({ message: "", email: "", name: "" });
  const [emailSent, setEmailSent] = useState(0);
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

  const setMessage = (e) => {
    setSend({ message: e.target.value, email: send.email, name: send.name });
  };

  const setMail = (e) => {
    setSend({ message: send.message, email: e.target.value, name: send.name });
  };

  const setName = (e) => {
    setSend({ message: send.message, email: send.email, name: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(emailSent === -1) return
    setEmailSent(-1)
    emailjs
      .sendForm(
        process.env.REACT_EMAIL_SERVICE_ID as string,
        process.env.REACT_EMAIL_TEMPLATE_ID as string,
        form.current as any,
        process.env.REACT_EMAIL_PUB_KEY
      )
      .then((result) => setEmailSent(1));
  };
  return (
    <div id="contact-page-wrapper">
      {!emailSent && (
          <div
            ref={ref}
            id="card"
            onMouseMove={onMouseMove}
            onMouseLeave={onPointerOut}
            onMouseEnter={onMouseEnter}
          >
            <div id="card-background" />
            <div id="card-content">
              <form onSubmit={(e) => sendEmail(e)} ref={form}>
                <div>
                  Hello there !<br />
                  I'm looking for a freelancer to help me with :{" "}
                </div>
                <textarea
                  className="largeInput input"
                  placeholder="What can I help you with?"
                  onChange={(e) => setMessage(e)}
                  name="message"
                  required
                ></textarea>
                <div>
                  You can reach me at{" "}
                  <input
                    type="text"
                    placeholder="Email"
                    className="input email-input"
                    onChange={(e) => setMail(e)}
                    name="user_email"
                    required
                  ></input>
                </div>
                <div>
                  Xoxo,{" "}
                  <input
                    type="text"
                    className="input name-input"
                    placeholder="Name"
                    onChange={(e) => setName(e)}
                    name="user_name"
                    required
                  ></input>
                </div>
                <button
                  type="submit"
                  id="send-button"
                  className={`no-select ${
                    send.email && send.name && send.message ? "send-abled" : ""
                  }`}
                >
                  Send
                </button>
              </form>
            </div>
            <hr className="vertical-divider" />
            <div id="card-to">
              <div id="img-wrapper">
                <div className="Img"></div>
              </div>
              <div id="to-infos">
                <div id="my-mail">marie.gavillon@gmail.com</div>
                <hr className="horizontal-divider" />
                <hr className="horizontal-divider" />
                <hr className="horizontal-divider" />
              </div>
            </div>

            {/* <ActionButton text="SEND" /> */}
          </div>
      )}
      {emailSent === 1 && <h2>Thanks for reaching out!</h2>}
      {emailSent === -2 && <h2>Thanks for reaching out!</h2>}
      <h3 id="social-text">{emailSent ? "come on my socials":"or drop a message here"}</h3>
      <div id="wave-background-wrapper">
        <Waves2 />
      </div>
    </div>
  );
};
=======
import React, { FunctionComponent }  from 'react';

export const Contact:FunctionComponent = () => {
    return(
        <></>
    )
}
>>>>>>> 44ce0450cacafcc2fb1e72f1312ce656ea40bf60
