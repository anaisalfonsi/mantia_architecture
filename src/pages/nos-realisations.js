import React from "react";
import Layout from "../components/layout";

export default function Achievements() {
    return (
      <Layout>
        <title>Nos Réalisations | Groupe Mantia</title>
        <div className="flex flex-col w-full h-24 lg:h-48 justify-center bg-black text-gray-100">
            <h1 className="self-center text-xl lg:text-4xl">Nos Réalisations</h1>
          </div>
        <section className="realisation-category-filter">
          <div className="mt-32 mx-32">
            <h4><span className="text-xl font-light">Chercher par Filière : </span><span><button className="ml-8 mr-8 uppercase tracking-wide font-semibold text-indigo-600">Construction/Habitat</button></span><span><button className="mr-8 uppercase tracking-wide font-semibold text-indigo-600">Electricité/Plomberie</button></span><span><button className="mr-8 uppercase tracking-wide font-semibold text-indigo-600">Piscine/Sauna</button></span></h4>
          </div>
        </section>
        <section>
          <div class="container my-12 mx-auto px-4 md:px-12">
              <div class="flex flex-wrap -mx-1 lg:-mx-4">
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden  shadow-lg">
                          <a href="#">
                              <img alt="Placeholder" class="block h-auto w-full" src="https://via.placeholder.com/600x400.jpg" />
                          </a>
                          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="no-underline hover:underline text-black" href="#">
                                      Nom Chantier
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                  Filière
                              </p>
                          </div>
                          <div class="flex items-center justify-between leading-none p-2 md:p-4">
                              <a class="flex items-center no-underline hover:underline text-black" href="#">
                                  
                                  <p class="ml-2 text-sm">
                                      Lieu
                                  </p>
                              </a>
                              <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span class="hidden">Like</span>
                                  <i class="fa fa-heart"></i>
                              </a>
                          </div>
                      </article>
                  </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  };