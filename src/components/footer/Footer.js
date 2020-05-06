import React from 'react';
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerLinks">
                    <img src={logo} alt="Future Developer logo" />
                    <ul>
                        <li><a href="mmm.com">ANNA</a></li>
                        <li><a href="https.com">EDWARD</a></li>
                        <li><a href="lslsl.com">MARIE</a></li>
                        <li><a href="http://maximilianlau.com">MAX</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;