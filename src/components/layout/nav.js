import React from "react";
import { Link } from "gatsby";

const navs = [
    {
        id: 1,
        path: '/',
        name: 'Accueil'
    },
    {
        id: 2,
        path: '/about/',
        name: 'Le Groupe'
    },
    {
        id: 3,
        path: '/nos-filieres/',
        name: 'Nos Filières'
    },
    {
        id: 4,
        path: '/nos-realisations/',
        name: 'Nos Réalisations'
    },
    {
        id: 5,
        path: '/recrutement/',
        name: 'Recrutement'
    }
]

export default function Nav() {
    return (
        <nav className="w-full bg-white p-7 shadow">
            <a href="/"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" 
            alt="logo" width="200px"/></a>
            <ul className="flex space-x-6 justify-end">
                {navs.map((navItem) => (
                    <li key={navItem.id}>
                        <Link to={navItem.path} activeClassName="border-b-2 border-gray-800 pb-2">
                            {navItem.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
);
};