import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <title>Contact | Groupe Mantia</title>
      <h1 className="pl-32 my-8 text-2xl block uppercase tracking-wide text-xs font-bold pb-2 page-title">
        Page Contact
      </h1>
      <div className="w-screen shadow bg-gray-200 p-6 flex flex-col">
        <div>
          <h1 className="mt-4 mb-12 text-center text-2xl block uppercase tracking-wide text-xs font-bold">
            Contactez-nous
          </h1>
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
                  htmlFor="contact-phone"
                >
                  Votre Téléphone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100  border
                                        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                                        focus:border-gray-500"
                  id="contact-phone"
                  name="phone"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="contact-subject"
                >
                  Objet *
                </label>
                <select
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  id="contact-subject"
                  name="subject"
                  required
                >
                  <option value="">--</option>
                  <option>Demande de Devis</option>
                  <option>Recrutement</option>
                  <option>Démarchage</option>
                  <option>Autre</option>
                </select>
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
    </Layout>
  );
}
