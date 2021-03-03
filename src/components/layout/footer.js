import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="w-full mt-12 border-t border-black pin-b bg-black text-gray-100 text-sm">
        <div className="p-32 space-y-10 md:space-y-0 md:grid lg:grid-cols-5 2xl:grid-cols-4 md:gap-x-8 md:gap-y-10">
            <div>
                <img src="" alt="" /><h4 className="uppercase tracking-wider font-bold">LOGO ICI</h4>
                <p>Adresse</p>
                <p>Numéro de tel ?</p>
            </div>
            <div>
                <h4 className="uppercase tracking-wider font-bold">Suivez-nous</h4>
                <ul className="icons">
                    <li><FontAwesomeIcon icon={["fas", "facebook"]} /></li>
                    <li><FontAwesomeIcon icon={["fas", "linkedin"]} /></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-4 uppercase tracking-wider font-bold"><Link to="/contact">Contact</Link></h4>
                <h4 className="uppercase tracking-wider font-bold">Recrutement</h4>
                <div><Link to="/recrutement">Pourquoi nous rejoindre ?</Link></div>
                <div><Link to="/candidature-spontanee">Candidature spontanée</Link></div>
            </div>
            <div>
                <ul className="mt-4">
                    <li>Plan du site</li>
                    <li>Mentions Légales</li>
                    <li>Politiques de confidentialité</li>
                </ul>
    
            </div>
        </div>
        <div className="mt-6">
            
        </div>
        <div className="static bottom-0 w-full p-2 bg-gray-100 text-center text-black text-xs font-semibold">
            <div>Created with <span role="img" aria-label="footer-passion">🔥❤️🔥</span> by Anaïs Alfonsi</div>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </footer>
);

export default Footer;