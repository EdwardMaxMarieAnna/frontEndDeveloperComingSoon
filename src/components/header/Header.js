import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/about"
                        activeStyle={{
                            background: "white"
                        }}>
                        <div className="sectionBubble"></div>
                    </NavLink>
                        <p>Your Information</p>
                    </li>
                    <li>
                    <NavLink to="/styles"
                            activeStyle={{
                                background: "white"
                            }}>
                        <div className="sectionBubble"></div>
                    </NavLink>
                        <p>Options</p>
                    </li>
                    <li>
                    <NavLink to="/preview"
                            activeStyle={{
                                background: "white"
                            }}>
                        <div className="sectionBubble"></div>
                    </NavLink>
                        <p>Preview</p>
                    </li>
                    <li>
                    <NavLink to="/codeCopy"
                            activeStyle={{
                                background: "white"
                            }}>
                        <div className="sectionBubble"></div>
                    </NavLink>
                        <p>Save/Submit</p>
                    </li>
                </ul> 

            </div>
        </header>
    )
}

export default Header;