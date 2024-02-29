import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className="footer-bg"> 
         
            <h2 className="email">mintmade@gmail.com</h2>
            <ul>
                <li><a href="#"><FaFacebook /> Facebook</a></li>
                <li><a href="#"><FaInstagram /> Instagram</a></li>
                <li><a href="#"><FaTwitter /> Twitter</a></li>
            </ul>

            <div className="companyName">MINTMADE</div>

        </footer>
    );
}

export default Footer;
