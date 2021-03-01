import React from "react";
import { Link } from "gatsby";

const navs = [
    {
        path: '/',
        name: 'Accueil'
    },
    {
        path: '/about/',
        name: 'Le Groupe'
    },
    {
        path: '/nos-filieres/',
        name: 'Nos Filières'
    },
    {
        path: '/nos-realisations/',
        name: 'Nos Réalisations'
    },
    {
        path: '/recrutement/',
        name: 'Recrutement'
    }
]

const Nav = () => (
        <nav className="w-full bg-white p-7 shadow">
            <ul className="flex space-x-6 justify-end">
                {navs.map((navItem) => (
                    <li>
                        <Link exact to={navItem.path} activeClassName="border-b-2 border-gray-800 pb-2">
                            {navItem.name}</Link>
                    </li>
                ))} 
            </ul>
        </nav>
);

export default Nav;