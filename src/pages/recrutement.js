import React from "react";
import Layout from "../components/layout";

export default function Hiring() {
    return (
      <Layout>
        <title>Recrutement | Groupe Mantia</title>
          <div className="flex flex-col w-full h-24 lg:h-48 justify-center bg-black text-gray-100">
            <h1 className="pt-6 pl-32 text-2xl block uppercase tracking-wide text-xs font-bold page-title">Page Recrutement</h1>
            <h2 className="self-center text-xl lg:text-4xl">Rejoignez-nous</h2>
          </div>
          <section className="why-join-us">
            <div className="flex flex-col md:flex-row-reverse mx-32 my-16">
              <div className="bg-gray-200 md:grid md:grid-cols-4 pt-16">
                <img className="opacity-60 hiring-img" src="https://via.placeholder.com/1000x500.jpg" alt="mantia recrutement"/>
              </div>
              <div className="pr-16 pt-16">
                  <h3 className="pb-4 text-xl font-medium">Pourquoi nous rejoindre ? / Métiers à la Une / Paroles de collaborateurs</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis eros dui, ut hendrerit ante tincidunt scelerisque. Vivamus elementum elit ut lorem euismod maximus. Nunc auctor nulla nec urna volutpat sodales. Vivamus elementum odio eget gravida tincidunt. Maecenas semper augue id convallis tempor. Vivamus in luctus nibh.</p>
                </div>
            </div>
          </section>
          <section className="mt-16 hiring-ads">
          <h2 class="mb-16 text-base text-xl text-indigo-600 font-semibold tracking-wide uppercase"><span>Nos Annonces</span></h2>
            <div className="w-full flex flex-col md:flex-row justify-evenly bg-gray-100 md:grid-cols-5 lg:grid-cols-3">
              <div className="rounded-2xl self-center flex flex-col justify-center text-center w-80 h-80 my-16 mx-4 bg-black text-gray-100">
                <h4 className="pb-2 text-xl">Titre Annonce 1</h4>
                <ul className="pb-4 text-sm">Détails annonce
                  <li>Métier :</li>
                  <li>Mission: </li>
                  <li>Profil recherché: </li>
                </ul>
                <a className="self-end mt-4 mr-16 text-xl px-6 py-1 border-b-2" href="/annonce-1">Postuler</a>
              </div>
              <div className="rounded-2xl self-center flex flex-col justify-center text-center w-80 h-80 my-16 mx-4 bg-black text-gray-100">
              <h4 className="pb-2 text-xl">Titre Annonce 2</h4>
                <ul className="pb-4 text-sm">Détails annonce
                  <li>Métier :</li>
                  <li>Mission: </li>
                  <li>Profil recherché: </li>
                </ul>
                <a className="self-end mt-4 mr-16 text-xl px-6 py-1 border-b-2" href="/annonce-1">Postuler</a>
              </div>
              <div className="rounded-2xl self-center flex flex-col justify-center text-center w-80 h-80 my-16 mx-4 bg-black text-gray-100">
              <h4 className="pb-2 text-xl">Titre Annonce 3</h4>
                <ul className="pb-4 text-sm">Détails annonce
                  <li>Métier :</li>
                  <li>Mission: </li>
                  <li>Profil recherché: </li>
                </ul>
                <a className="self-end mt-4 mr-16 text-xl px-6 py-1 border-b-2" href="/annonce-1">Postuler </a>
              </div>
            </div>
          </section>
          <section className="mt-16 apply-now-section">
          <h2 class="text-base text-xl text-indigo-600 font-semibold tracking-wide uppercase"><span>Candidature spontanée</span></h2>
          <div className="w-screen mt-16 px-6 flex flex-col text-gray-600">
            <div>
              <h3 className="mb-12 text-center text-lg block uppercase tracking-wide text-xs font-bold">
                Envoyer une candidature spontanée
              </h3>
            </div>
            <div className="self-center">
              <form method="POST" id="contact-form" className="w-full max-w-6xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Votre Prénom *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border 
                                                border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                                                focus:bg-white focus:border-gray-500"
                      id="grid-first-name"
                      type="text"
                      placeholder="Marie"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Votre Nom *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100  border 
                                                border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                                                focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Dupont"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2"
                      htmlFor="contact-email"
                    >
                      Votre Email *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100  border
                                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                                        focus:border-gray-500"
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="contact-company"
                    >
                      Entreprise de contact *
                    </label>
                    <select
                      className="mt-1 block w-full py-3 px-4 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      id="contact-company"
                      name="company"
                      required
                    >
                      <option value="">--</option>
                      <option value="1">Espace Piscines</option>
                      <option value="2">STEC</option>
                      <option value="3">MAT</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6 pb-3">
                  <label 
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="files-upload"
                  >
                    Votre CV et lettre de motivation
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="files-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Télécharger</span>
                          <input id="files-upload" name="files-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">ou glisser-déposer</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu'à 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Votre Message *
                    </label>
                    <textarea
                      className=" no-resize appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="w-full px-3">
                    <input
                      type="checkbox"
                      name="hasAgreed"
                      className="checked:bg-blue-600 checked:border-transparent"
                      required
                    />
                    <span className="text-xs font-bold">
                      {" "}
                      En soumettant ce formulaire, vous acceptez notre politique de
                      confidentialité décrivant la finalité des traitements de vos
                      données personnelles. Vous bénéficiez d’un droit d’accès, de
                      rectification et d’opposition. Pour plus d’information sur vos
                      droits informatique & Liberté cliquez ici.
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-red-500 text-xs italic">
                    * Champs obligatoires
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <div>
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-600 focus:shadow-outline 
                                            focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </section>
      </Layout>
    );
  };