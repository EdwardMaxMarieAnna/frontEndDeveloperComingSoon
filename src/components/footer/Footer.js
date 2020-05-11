import React from 'react';
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerLinks">
                    <ul>
                    <img src={logo} alt="Future Developer logo" />
                        <li><a href="annacodes.tech"> Anna</a></li>
                        <li><a href="edwardboland.com">Edward</a></li>
                        <li><a href="tbt.com">Marie</a></li>
                        <li><a href="http://maximilianlau.com">Max</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;