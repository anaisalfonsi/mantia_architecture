import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="w-full mt-12 border-t border-black pin-b bg-black text-gray-100 text-sm">
        <div className="p-32 space-y-10 md:space-y-0 md:grid lg:grid-cols-5 2xl:grid-cols-4 md:gap-x-8 md:gap-y-10">
            <div>
                <img src="" alt="" /><h4 className="mb-2 uppercase tracking-wider text-base font-semibold">LOGO ICI</h4>
                <p>Adresse</p>
                <p>Numéro de tel ?</p>
            </div>
            <div>
                <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Contactez-nous</h4>
                <div><Link to="/contact">Contact</Link></div>
                <ul className="icons">
                    <li><FontAwesomeIcon icon={["fas", "facebook"]} /></li>
                    <li><FontAwesomeIcon icon={["fas", "linkedin"]} /></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Rubriques</h4>
                <h5 className="text-sm font-semibold"><Link to="/about">Le Groupe</Link></h5>
                <h5 className="text-sm font-semibold"><Link to="/nos-filieres">Nos Filières</Link></h5>
                <h5 className="text-sm font-semibold"><Link to="/nos-realisations">Nos Réalisations</Link></h5>
                <h5 className="text-sm font-semibold">Recrutement</h5>
                <div><Link to="/recrutement">Pourquoi nous rejoindre ?</Link></div>
                <div><Link to="/candidature-spontanee">Candidature spontanée</Link></div>
            </div>
            <div>
            <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Création du site</h4>
                <ul>
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