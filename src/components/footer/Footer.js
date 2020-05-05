import React from 'react';
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerLinks">
                    <img src={logo} alt="Future Developer logo" />
                    <ul>
                        <li><a href="">ANNA</a></li>
                        <li><a href="">EDWARD</a></li>
                        <li><a href="">MARIE</a></li>
                        <li><a href="http://maximilianlau.com">MAX</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;