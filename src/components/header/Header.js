import React from 'react';
import logo from '../../assets/logo.png'

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

export default Header;