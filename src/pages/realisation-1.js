import React from "react";
import Layout from "../components/layout";

export default function achievement() {
  return (
    <Layout>
      <title>Chantier 1 | Groupe Mantia</title>
      <h1 className="my-8 pl-32 text-2xl block uppercase tracking-wide text-xs font-bold pb-6 page-title">
        Page Chantier 1
      </h1>
      <section className="px-8 md:px-32 lg:px-0 lg:w-2/3 lg:mx-auto text-lg realisation-overview">
        <h3 className="mb-8 text-xl lg:text-2xl font-semibold">Nom Chantier</h3>
        <ul className="mb-8">
          <span className="text-indigo-600">Détails : </span>
          <li>Client</li>
          <li>
            Réalisé par <span className="text-base italic">Nom Entreprise</span>
          </li>
          <li>Lieu</li>
          <li>Surface</li>
          <li>Montant</li>
          <li>Durée, etc...</li>
        </ul>
        <p className="font-light">
          Novo denique perniciosoque exemplo idem Gallus ausus est inire
          flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando
          dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi
          per tabernas palabatur et conpita quaeritando Graeco sermone, cuius
          erat inpendio gnarus, quid de Caesare quisque sentiret.
        </p>
      </section>
      <section className="realisation-gallery">
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4">
              <div class="overflow-hidden shadow-lg">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://via.placeholder.com/600x400.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
