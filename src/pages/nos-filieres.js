import React from "react";
import Layout from "../components/layout";

export default function Companies() {
    return (
      <Layout>
        <title>Nos Filières | Groupe Mantia</title>
        <div className="flex flex-col w-full h-24 lg:h-48 justify-center bg-black text-gray-100">
            <h1 className="self-center text-xl lg:text-4xl">Nos Filières</h1>
          </div>
        <section className="my-16 filiere-construction">
          <div className="flex justify-center mx-auto lg:px-32">
              <div className="flex flex-col md:flex-row">
                <div className="self-center w-full h-96 lg:w-full bg-black flex">
                    <h3 className="self-center text-center px-4 lg:px-8 text-xl lg:text-3xl text-gray-300">Gros oeuvre / Construction / Habitat (A choisir entre les 3)</h3>
                </div>
                <img className="self-center md:w-5/6 md:h-full" src="https://via.placeholder.com/1000x500.jpg" alt="mantia construction" />
              </div>
            </div>
            <div className="w-3/4 mt-16 flex justify-center mx-auto lg:px-32 font-light">
                <h3 className="mr-8 lg:text-2xl text-indigo-600">MAT</h3>
                <p className="lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate justo erat, et consectetur dolor efficitur nec. Duis tristique venenatis metus, eget vulputate diam sagittis tincidunt. Maecenas nec turpis ex. Phasellus cursus libero turpis, nec mollis enim laoreet laoreet. Ut hendrerit aliquam nibh, vel sagittis nulla accumsan sed. Curabitur nulla augue, rhoncus ut tristique a, finibus non enim. Sed faucibus vulputate nisl, eget molestie felis ultrices efficitur. Sed urna sem, convallis a volutpat eu, consectetur non diam. Morbi augue nunc, gravida at porta sed, luctus vitae urna.
                </p>
            </div>
        </section>
        <section className="my-16 filiere-electricite">
          <div className="flex justify-center mx-auto lg:px-32">
              <div className="flex flex-col-reverse md:flex-row-reverse">
                <div className="self-center w-full h-96 lg:w-full bg-black flex">
                    <h3 className="self-center text-center px-4 lg:px-8 text-xl lg:text-3xl text-gray-300">Electricité / Plomberie</h3>
                </div>
                <img className="self-center md:w-5/6 md:h-full" src="https://via.placeholder.com/1000x500.jpg" alt="mantia construction" />
              </div>
            </div>
            <div className="w-3/4 mt-16 flex justify-center mx-auto lg:px-32 font-light">
                <h3 className="mr-8 lg:text-2xl text-indigo-600">STEC</h3>
                <p className="lg:text-xl">
                Vivamus mollis enim id nisi feugiat lacinia. Praesent a lectus sit amet dui vulputate volutpat ac et leo. Suspendisse potenti. Vivamus vulputate magna in quam faucibus, quis efficitur tellus bibendum. Integer posuere felis a nunc ultrices accumsan. Etiam fringilla nulla eget lectus dapibus ultricies. Quisque auctor mi ac odio ullamcorper semper.
                </p>
            </div>
        </section>
        <section className="my-16 filiere-piscine">
          <div className="flex justify-center mx-auto lg:px-32">
              <div className="flex flex-col md:flex-row">
                <div className="self-center w-full h-96 lg:w-full bg-black flex">
                    <h3 className="self-center text-center px-4 lg:px-8 text-xl lg:text-3xl text-gray-300">Piscine / Sauna</h3>
                </div>
                <img className="self-center md:w-5/6 md:h-full" src="https://via.placeholder.com/1000x500.jpg" alt="mantia construction" />
              </div>
            </div>
            <div className="w-3/4 mt-16 flex justify-center mx-auto lg:px-32 font-light">
                <h3 className="mr-8 lg:text-2xl text-indigo-600 uppercase">Espace Piscines</h3>
                <p className="lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin enim quis orci tincidunt aliquam. Etiam ut felis urna. Mauris molestie mollis scelerisque. Aenean non nisi non mi tincidunt euismod vitae id turpis. Suspendisse eu nibh in ante semper sollicitudin. Cras scelerisque tellus at vehicula bibendum. Aenean a mollis lacus. Vivamus vel ex justo. Vestibulum tincidunt sit amet turpis eget luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et scelerisque ex, ut ultricies metus. Maecenas fermentum porttitor porttitor. Sed ut lacus a quam sagittis feugiat. Aliquam pellentesque orci id dui iaculis volutpat. Proin placerat sit amet nisl scelerisque dignissim.
                </p>
            </div>
            <div className="w-3/4 mt-4 flex justify-end mx-auto lg:px-32 text-gray-100">
              <button className="lg:text-xl border-gray-300 border-b-2 shadow py-3 px-4 font-light bg-black hover:text-white">Voir le site</button>
            </div>
        </section>
      </Layout>
    );
  };