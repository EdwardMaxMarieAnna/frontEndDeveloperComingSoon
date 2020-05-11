import React from 'react';
import logo from '../../assets/logo.png'
import { BrowserRouter as NavLink } from "react-router-dom";

function Header() {
    console.log(window)
    console.log(window.location.pathname)
    let where = window.location.pathname;
    if (where === '/' || where === '/login') {
        return (
            <header>
                <div className="titleContainer">
                    <img src={logo} alt="Future Developer logo" />
                    <h1>Future Developer</h1>
                </div>
                <div className="sectionContainer">
                    <h2>So we heard rumors that…</h2>
                    <p>You're accessibility guru, flex box master, and your javascript <span>wizards</span> are under control!</p>
                    <p>So you <span>made</span> it! Welcome to the club.</p>
                    <p>We want to help you! So here is a nice free <span>app</span> which will create a decent looking landing page <span>for</span> your upcoming portfolio.</p>
                    <p>Yes, that's easy. </p>
                    <p>What can we say except <span>you</span>'re welcome.</p>
                </div>
            </header>
        )
    } else if (where !== '/') {
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
                            <p>Your Information</p>
                        </li>
                        <li>
                            <div className="sectionBubble"></div>
                            <p>Options</p>
                        </li>
                        <li>
                            <div className="sectionBubble"></div>
                            <p>Preview</p>
                        </li>
                        <li>
                            <div className="sectionBubble"></div>
                            <p>Save/Submit</p>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;