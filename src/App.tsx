import React, { FunctionComponent }  from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from './Header/Header';
import { Socials } from './Socials/Socials';
import { Home } from './Home/Home';
import { Gallery } from './Gallery/Gallery';
import { Contact } from './Contact/Contact';

const App:FunctionComponent = () => {
    return(
        <Router>
            <Header/>
            <Socials/>
            <Routes>
                <Route id="Home" path="/" element={<Home/>}></Route>
                <Route id="Gallery" path="/Gallery" element = {<Gallery/>}></Route>
                <Route id="Contact" path="/Contact" element = {<Contact/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;