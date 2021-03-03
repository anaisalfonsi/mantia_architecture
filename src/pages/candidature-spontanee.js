import React from "react";
import Layout from "../components/layout";

export default function applyNow() {
    return (
      <Layout>
        <title>Candidature spontanée | Groupe Mantia</title>
        <h1 className="pl-32 my-8 text-2xl block uppercase tracking-wide text-xs font-bold pb-2 page-title">
        Page Candidature spontanée
      </h1>
        <div className="w-screen shadow bg-gray-200 p-6 flex flex-col">
        <div>
          <h1 className="mt-4 mb-12 text-center text-2xl block uppercase tracking-wide text-xs font-bold">
            Envoyez-nous votre candidature
          </h1>
        </div>
        <div className="self-center">
          <form method="POST" id="contact-form" className="w-full max-w-6xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  for="grid-first-name"
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
                  for="grid-last-name"
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
                  for="contact-email"
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
                  for="contact-company"
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
              <label class="block text-sm font-medium text-gray-700">
                Votre CV et lettre de motivation
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Télécharger</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">ou glisser-déposer</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF jusqu'à 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  for="grid-password"
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
      </Layout>
    );
  };