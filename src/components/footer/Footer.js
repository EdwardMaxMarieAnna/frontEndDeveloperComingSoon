import React from 'react';
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerLinks">
                    <img src={logo} alt="Future Developer logo" />
                    <ul>
                        <li><a href="http://annacodes.tech"> Anna</a></li>
                        <li><a href="http://edwardboland.com">Edward</a></li>
                        <li><a href="tbt.com">Marie</a></li>
                        <li><a href="http://maximilianlau.com">Max</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;