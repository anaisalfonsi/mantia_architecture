import React from "react";
import { Link } from "gatsby";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-12 border-t border-black pin-b bg-black text-gray-100 text-sm">
            <div className="p-32 space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 md:gap-x-8 md:gap-y-10">
                <div className="text-lg lg:text-base">
                    <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">LOGO ICI</h4>
                    <p>Adresse</p>
                    <p>Numéro de tel ?</p>
                </div>
                <div className="my-4 text-lg lg:text-base">
                    <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Contactez-nous</h4>
                    <div><Link to="/contact">Contact</Link></div>
                    <ul className="mt-4 md:mt-2 lg:mt-0 flex flex-col lg:flex-row icons">
                        <li className="mb-2 lg:mb-0 lg:mr-2"><Link to=""><FaFacebookSquare size="40px"/></Link></li>
                        <li><Link to=""><FaLinkedin size="40px"/></Link></li>
                    </ul>
                </div>
                <div className="my-4 text-lg lg:text-base">
                    <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Rubriques</h4>
                    <h5><Link to="/about">Le Groupe</Link></h5>
                    <h5><Link to="/nos-filieres">Nos Filières</Link></h5>
                    <h5><Link to="/nos-realisations">Nos Réalisations</Link></h5>
                    <h5 className="my-4 text-base font-semibold lg:text-sm uppercase tracking-wider">Recrutement</h5>
                    <div><Link to="/recrutement">Pourquoi nous rejoindre ?</Link></div>
                    <div><Link to="/candidature-spontanee">Candidature spontanée</Link></div>
                </div>
                <div className="my-4 text-lg lg:text-base">
                <h4 className="mb-2 uppercase tracking-wider text-base font-semibold">Le site</h4>
                    <ul>
                        <li><Link to="">Plan du site</Link></li>
                        <li><Link to="">Mentions Légales</Link></li>
                        <li><Link to="">Politiques de confidentialité</Link></li>
                    </ul>
                    <div className="mt-8 text-sm font-light">
                        <div>Created with <span role="img" aria-label="footer-passion">🔥❤️🔥</span> by <span className="text-indigo-500">Anaïs Alfonsi</span></div>
                        <div>Icons made by <a href="https://www.freepik.com" title="Freepik"><span className="text-indigo-500">Freepik</span></a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 