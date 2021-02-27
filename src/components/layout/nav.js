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
        path: '/contact/',
        name: 'Contactez-nous'
    }
]

const Nav = () => (
        <nav className="bg-white p-7 shadow">
            <ul className="flex space-x-6 justify-end">
                {navs.map((navItem) => (
                    <li>
                        <Link exact to={navItem.path} activeClassName="border-b-2 border-purple-400 pb-1">
                            {navItem.name}</Link>
                    </li>
                ))} 
            </ul>
        </nav>
);

export default Nav;