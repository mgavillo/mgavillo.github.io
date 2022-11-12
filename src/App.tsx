import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./Header/Header";
import { Socials } from "./Socials/Socials";
import { Home } from "./Home/Home";
import { Gallery } from "./Gallery/Gallery";
import { Contact } from "./Contact/Contact";
import Waves2 from "./Assets/Waves2";
import Waves3 from "./Assets/Waves3";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div id="background-wave-2">
        <Waves3 />
        <div id="background-verlay" />
        {/* <Waves2 /> */}
      </div>
      <Header />
      <Socials />
      <Routes>
        <Route id="Home" path="/" element={<Home />}></Route>
        <Route id="Gallery" path="/Gallery" element={<Gallery />}></Route>
        <Route id="Contact" path="/Contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
