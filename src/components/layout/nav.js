import React from "react";
import { Link } from "gatsby";

const navs = [
    {
        path: '/',
        name: 'Accueil'
    },
    {
        path: '/about',
        name: 'Le Groupe'
    },
    {
        path: '/nos-filieres',
        name: 'Nos Filières'
    },
    {
        path: '/nos-realisations',
        name: 'Nos Réalisations'
    },
    {
        path: '/recrutement',
        name: 'Recrutement'
    }
]

export default function Nav() {
    return (
        <nav className="flex items-center sm:justify-evenly md:justify-between w-full bg-white p-7 shadow">
            <div><a href="/"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" 
            alt="logo" width="200px"/></a></div>
            <ul className="flex space-x-6">
                {navs.map((navItem, index) => (
                    <li key={index}>
                        <Link to={navItem.path} activeClassName="border-b-2 border-gray-800 pb-2">
                            {navItem.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
);
};