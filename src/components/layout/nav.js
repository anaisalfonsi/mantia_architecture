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
];

export default function Nav()  {
    return (
        <div className="w-full mx-auto p-5">
            <nav className="flex-row md:justify-around">
                <div className="flex flex-row justify-around">
                    <a href="/"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" 
                    alt="logo" width="200px"/></a>
                    <button id="hamburgerbtn" className="md:hidden">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="md:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <ul className="md:flex md:flex-row self-center">
                            {navs.map((navItem, index) => (
                                <li className="pr-5" key={index}>
                                    <Link to={navItem.path} className="menu-item" activeClassName="border-b-2 border-indigo-600">
                                        {navItem.name}</Link>
                                </li>
                            ))}
                            </ul> 
                        </div>
                    </div>
                    <ul className="hidden md:flex md:flex-row self-center">
                        {navs.map((navItem, index) => (
                        <li className="pr-5" key={index}>
                            <Link to={navItem.path} className="menu-item" activeClassName="border-b-2 border-gray-800 pb-2" aria-expanded="false">
                                {navItem.name}
                            </Link>     
                        </li>
                        ))}
                    </ul>  
                </div>  
            </nav>
        </div>
    );
}
        

  
        
