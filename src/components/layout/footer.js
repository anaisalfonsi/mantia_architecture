import React from "react";
import { Link } from "gatsby";

const Footer = () => (
    <footer className="w-full mt-12 border-t border-black pin-b bg-black text-white text-center p-10">
        <div>
            <div>
                <img src="" alt="" /><h4>Logo</h4>
                <p>Adresse</p>
                <p>Numéro de tel ?</p>
            </div>
            <div>
                <Link to="/contact/">Contactez-nous</Link>
            </div>
        </div>
        Created with <span role="img" aria-label="footer-passion">🔥❤️🔥</span> by Anaïs Alfonsi 
    </footer>
);

export default Footer;