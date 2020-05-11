import React from 'react';
import logo from '../../assets/logo.png'
import { BrowserRouter as NavLink } from "react-router-dom";

function Header() {
    return (
            <header>
            <div className="titleContainer">
                <img src={logo} alt="Future Developer logo" />
                <h1>Future Developer</h1>
            </div>
            <div className="sectionContainer">
                <ul>
                    <li>
                        <div className="sectionBubble"></div>
                    <NavLink to="/about"
                        activeStyle={{
                            display: "none"
                        }}>
                        <p>Your Information</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/styles">
                        <div className="sectionBubble"></div>
                        <p>Options</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/preview">
                        <div className="sectionBubble"></div>
                        <p>Preview</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/codeCopy">
                        <div className="sectionBubble"></div>
                        <p>Save/Submit</p>
                    </NavLink>
                    </li>
                </ul> 

            </div>
        </header>
    )
}

export default Header;