import * as React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <title>Accueil | Groupe Mantia</title>
      <div className="h-1/2 flex">
        <div className="py-8 justify-items-center">
          <h1 className="absolute z-50 text-2xl block uppercase tracking-wide text-xs font-bold home-title">Page d'Accueil</h1>
            <h2 className="absolute z-50 my-12 text-lg md:text-2xl text-red-500 font-semibold home-cover-text">Slogan / phrase d'accroche / Présentation ici</h2>
        </div>
              <img className="relative h-1/6 opacity-60 home-cover-img" src="https://via.placeholder.com/2400x1600.jpg" alt="mantia cover"/>
      </div>
    </Layout>
  );
};
