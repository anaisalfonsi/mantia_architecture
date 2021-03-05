import * as React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <title>Accueil | Groupe Mantia</title>
      <section className="w-full h-cover">
        <div className="flex">
          <div className="py-8 justify-items-center">
            <h1 className="absolute z-50 pl-32 text-2xl block uppercase tracking-wide text-xs font-bold page-title">Page d'Accueil</h1>
              <h3 className="absolute z-50 pl-32 my-12 text-lg md:text-2xl text-red-500 font-semibold home-cover-text">Slogan / phrase d'accroche / Présentation ici</h3>
          </div>
            <img className="relative w-full h-1/2 md:h-screen opacity-60 home-cover-img" src="https://via.placeholder.com/2400x1600.jpg" alt="mantia cover"/>
        </div>
      </section>
      <section className="h-activities-section">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="lg:text-center text-base text-xl text-indigo-600 font-semibold tracking-wide uppercase"><span>Nos Activités</span></h2>
          <div className="w-full flex flex-wrap justify-center md:grid-cols-3">
            <img className="home-modular-img p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
            <img className="p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
            <img className="p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
            <img className="p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
            <img className="p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
            <img className="p-4" src="https://via.placeholder.com/381x381.jpg" alt="mantia modular" />
          </div>
        </div>
      </section>
      <section className="h-companies-section">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-xl text-indigo-600 font-semibold tracking-wide uppercase"><span>Nos Filières</span></h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mettre un titre ici pour cette section
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.18 512">
                      <path d="M224.55,112.45v89.62H96.45V74h89.62A38.47,38.47,0,0,1,224.55,112.45Z" transform="translate(-21.91)" style={{fill:'#ffc843'}}/>
                      <path d="M224.55,112.45v52H148.7V74h37.37A38.47,38.47,0,0,1,224.55,112.45Z" transform="translate(-21.91)" style={{fill:'#76ffd9'}}/>
                      <polyline points="145.64 503.76 30.73 503.76 30.73 459.94 224.55 459.94 224.55 503.76 172.02 503.76" style={{fill:'#ffc843'}}/>
                      <path d="M481.85,101.12h-251A46.8,46.8,0,0,0,185.5,65.73h-3.25L156.57,5a8.25,8.25,0,0,0-15.19,0L115.7,65.73H95.88A8.24,8.24,0,0,0,87.64,74v27.15H30.15a8.24,8.24,0,0,0-8.24,8.24V175.1a8.24,8.24,0,0,0,8.24,8.24H87.64v18.73a8.24,8.24,0,0,0,8.24,8.24h12V451.69H52.06a8.24,8.24,0,0,0-8.24,8.25v43.82A8.24,8.24,0,0,0,52.06,512H167a8.25,8.25,0,0,0,0-16.49H60.31V468.18H237.64v27.33H193.36a8.25,8.25,0,1,0,0,16.49h52.53a8.24,8.24,0,0,0,8.24-8.24V459.94a8.24,8.24,0,0,0-8.24-8.25H190.08V210.31H224a8.24,8.24,0,0,0,8.24-8.24V183.34H433.15v74.79h-4.94a8.24,8.24,0,1,0,0,16.48h4.94v21a8.24,8.24,0,0,0,8.25,8.24,14.93,14.93,0,1,1-14.94,14.93,8.24,8.24,0,1,0-16.48,0,31.42,31.42,0,1,0,39.66-30.32V274.61h4.94a8.24,8.24,0,1,0,0-16.48h-4.94V183.34h32.21a8.24,8.24,0,0,0,8.24-8.24V109.37A8.25,8.25,0,0,0,481.85,101.12ZM473.6,155.2,436,117.61H473.6ZM370.28,166.86,416.11,121l45.83,45.83ZM232.22,155.2V117.61h37.59Zm55-31.65,43.3,43.31h-86.6Zm17.37-5.94h91.66l-45.83,45.83ZM149,29.4l15.37,36.33H133.6ZM87.64,155.2,50.05,117.61H87.64ZM38.4,129.27,76,166.86H38.4Zm135.2,245-45.83-45.83,45.83-45.83Zm-3.42,19.9L124.35,440V348.37Zm-45.83-85.63V222l43.3,43.3ZM136,451.69,173.6,414.1v37.59ZM173.6,247.9,136,210.31H173.6ZM156.37,82.22H185.5a30.26,30.26,0,0,1,30.23,30.23v81.37H104.13V82.22h52.24Z" transform="translate(-21.91)" style={{fill:'#434c54'}}/></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      MAT
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 441.02"><path d="M503.26,408.84v58.27H383V408.84a39.44,39.44,0,0,0-39.4-39.39h-60.3a104.81,104.81,0,0,1-174.77,0H17.14V249.22h94.58a104.81,104.81,0,0,1,168.48,0h63.44C431.65,249.22,503.26,320.82,503.26,408.84Z" transform="translate(0 -35.49)" style={{fill:'#fff'}}/>
                      <path d="M166.1,90.35V74.67a29.79,29.79,0,0,1,29.79-29.79h0a29.79,29.79,0,0,1,29.79,29.79V210.13l-59.58,0V90.35Z" transform="translate(0 -35.49)" style={{fill:'#fff'}}/>
                      <path d="M415.44,431.25v35.86H383V408.84a39.44,39.44,0,0,0-39.4-39.39A62.49,62.49,0,0,1,415.44,431.25Z" transform="translate(0 -35.49)" style={{fill:'#76ffd9'}}/>
                      <path d="M141.07,311.59a104.84,104.84,0,0,1,79.85-101.8A104.79,104.79,0,0,0,93.62,334.22H17.13v35.23h91.44a104.84,104.84,0,0,0,112.35,43.94A104.85,104.85,0,0,1,141.07,311.59Z" transform="translate(0 -35.49)" style={{fill:'#76ffd9'}}/>
                      <path d="M188.8,210.08V74.67a29.81,29.81,0,0,1,18.44-27.55,29.8,29.8,0,0,0-41.13,27.55V210.08l59.57,0h0Z" transform="translate(0 -35.49)" style={{fill:'#76ffd9'}}/>
                      <path d="M331.4,64a56.28,56.28,0,0,0-26.56,4.64C271.6,83.36,236,92.05,199.69,92.05h-5.48c-36.34,0-71.92-8.69-105.16-23.38A56.3,56.3,0,1,0,90.58,171c32.74-15.66,69-22.67,105.25-22.67h2.24c36.29,0,72.5,7,105.24,22.67A56.3,56.3,0,1,0,331.4,64Z" transform="translate(0 -35.49)" style={{fill:'#ffc843'}}/>
                      <path d="M58.92,118.59a56.29,56.29,0,0,0,31.84,52.33l-.19.09a56.31,56.31,0,0,1-80.5-52.42,56.3,56.3,0,0,1,79-49.92l1.8.79A56.63,56.63,0,0,0,58.92,118.59Z" transform="translate(0 -35.49)" style={{fill:'#ffa816'}}/>
                      <path d="M470.85,298.41A169.22,169.22,0,0,0,369,241.83a9.4,9.4,0,0,0-2.89,18.57A150.49,150.49,0,0,1,493.21,408.84v48.88H391.78V408.84A48.85,48.85,0,0,0,343,360.05h-60.3a9.43,9.43,0,0,0-7.83,4.2,95.4,95.4,0,0,1-159.12,0,9.4,9.4,0,0,0-7.83-4.2H16.48a9.4,9.4,0,0,0,0,18.79H103a114.18,114.18,0,0,0,184.59,0H343a30,30,0,0,1,30,30v58.28a9.38,9.38,0,0,0,9.39,9.39H502.6a9.39,9.39,0,0,0,9.4-9.39V408.84A168.93,168.93,0,0,0,470.85,298.41Z" transform="translate(0 -35.49)" style={{fill:'#434c54'}}/>
                      <path d="M65.69,185.88A65.09,65.09,0,0,0,94,179.49a220,220,0,0,1,62.08-18.85v43.77a114.76,114.76,0,0,0-49.59,35.42h-90a9.4,9.4,0,0,0,0,18.79h94.59a9.39,9.39,0,0,0,7.54-3.8,95.42,95.42,0,0,1,153.39,0,9.39,9.39,0,0,0,7.54,3.8h51.33a9.4,9.4,0,1,0,0-18.79H284.15a114.9,114.9,0,0,0-49.73-35.47V179.53a9.4,9.4,0,1,0-18.79,0v19.71a112.1,112.1,0,0,0-40.78,0V158.49q10-.75,20.32-.75h2.25c37,0,71,7.31,101.19,21.75a65.7,65.7,0,0,0,93.95-61.16c-.93-33.49-27.81-61.46-61.19-63.68a66.14,66.14,0,0,0-31,5.43,265.31,265.31,0,0,1-66,19.75V74.67a39.18,39.18,0,1,0-78.36,0v4.84A265.92,265.92,0,0,1,92.2,60.08a66.16,66.16,0,0,0-31-5.43A9.4,9.4,0,0,0,62.47,73.4,46.58,46.58,0,0,1,84.6,77.27c36.3,16,73,24.17,109,24.17H199c36,0,72.65-8.13,109-24.17a46.62,46.62,0,0,1,22.14-3.87,47.21,47.21,0,0,1,43.66,45.45,46.93,46.93,0,0,1-67.07,43.69C274,146.88,237.21,139,197.41,139h-2.24c-39.8,0-76.57,7.93-109.3,23.59A46.84,46.84,0,0,1,33.3,86.4a9.4,9.4,0,1,0-13-13.55,65.63,65.63,0,0,0,45.42,113ZM193.55,82.65q-9.31,0-18.7-.79V74.67a20.39,20.39,0,1,1,40.78,0V82q-8.32.63-16.6.64Z" transform="translate(0 -35.49)" style={{fill:'#434c54'}}/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      STEC
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 446.08"><path d="M315.42,95H196.32C92.73,95,8.75,179,8.75,282.59h0c0,103.59,84,187.57,187.57,187.57h119.1C419,470.16,503,386.18,503,282.59h0C503,179,419,95,315.42,95Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      <path d="M196.32,430.46c-81.53,0-147.87-66.34-147.87-147.87s66.34-147.87,147.87-147.87h119.1c81.54,0,147.87,66.33,147.87,147.87S397,430.46,315.42,430.46Z" transform="translate(0 -32.96)" style={{fill:'#76ffd9'}}/>
                      <path d="M490.36,192.85A198.3,198.3,0,0,0,432.87,125a9.1,9.1,0,0,0-12,.75A8.9,8.9,0,0,0,422,139,180.26,180.26,0,0,1,474.56,201a176.91,176.91,0,0,1,19.67,83.45c-1,98.22-82,176.84-180.26,176.84H198.18C99.41,461.27,18,381.86,17.77,283.09s80-179.19,178.69-179.19H206v87.42a9.13,9.13,0,0,0,8.6,9.25,8.89,8.89,0,0,0,9.16-8.88v-7H308.9v31a8.89,8.89,0,0,0,8.89,8.88h0a8.89,8.89,0,0,0,8.88-8.88V104.24a178.67,178.67,0,0,1,74,21.22,8.88,8.88,0,0,0,12.16-3.78,9.16,9.16,0,0,0-4.05-12,196.9,196.9,0,0,0-82.15-23.18V67.09c0-18.17-14.2-33.57-32.35-34.12a33.43,33.43,0,0,0-34.41,32.74,9.17,9.17,0,0,0,7.95,9.47,8.89,8.89,0,0,0,9.81-8.84,15.64,15.64,0,0,1,16.4-15.6c8.39.42,14.83,7.66,14.83,16.05V86.13H223.77v-19c0-18.44-14.63-34-33.07-34.14A33.4,33.4,0,0,0,157,65.77a9.15,9.15,0,0,0,8.36,9.44,8.89,8.89,0,0,0,9.4-8.53,16.87,16.87,0,0,1,3.69-10.41,15.55,15.55,0,0,1,12-5.55c8.68,0,15.55,7.43,15.55,16.1V86.13h-7.65C89.76,86.13.3,173.44,0,282S87.94,479,196.45,479H313.82C422.38,479,512.48,390.22,512,281.66A194.35,194.35,0,0,0,490.36,192.85ZM223.77,143.6V103.9H308.9v63H223.77V143.6Z" transform="translate(0 -32.96)" style={{fill:'#434c54'}}/>
                      <path d="M259.23,215.68c-7.43-3.66-15.86-7.8-31.93-7.8s-24.49,4.14-31.93,7.8c-6.52,3.2-12.15,6-24.09,6s-17.57-2.77-24.09-6c-7.43-3.66-15.85-7.8-31.92-7.8a8.88,8.88,0,1,0,0,17.76c11.94,0,17.57,2.77,24.08,6,7.44,3.65,15.86,7.8,31.93,7.8s24.5-4.15,31.93-7.8c6.52-3.21,12.15-6,24.09-6s17.57,2.77,24.09,6c7.43,3.65,15.86,7.8,31.93,7.8s24.49-4.15,31.93-7.8c6.52-3.21,12.15-6,24.09-6s17.57,2.77,24.09,6c7.44,3.66,15.86,7.8,31.94,7.8a8.89,8.89,0,0,0,0-17.77c-11.94,0-17.57-2.77-24.1-6-7.43-3.66-15.86-7.8-31.93-7.8a62,62,0,0,0-12.67,1c-4.59,1-12.44,3.21-17.76,6.05-.5.27-1,.49-1.5.74-6.52,3.2-12.15,6-24.09,6S265.75,218.88,259.23,215.68Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      <path d="M395.37,320.41c-11.95,0-17.58-2.77-24.1-6-7.43-3.65-15.86-7.8-31.93-7.8s-24.5,4.15-31.93,7.8a8.88,8.88,0,0,0,7.84,15.94c6.52-3.2,12.15-6,24.09-6s17.57,2.77,24.09,6c7.44,3.66,15.86,7.8,31.94,7.8a8.88,8.88,0,0,0,0-17.76Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      <path d="M115.26,324.4c11.94,0,17.57,2.77,24.09,6,7.44,3.65,15.86,7.79,31.93,7.79s24.5-4.14,31.93-7.79c6.52-3.21,12.15-6,24.09-6s17.57,2.77,24.09,6c7.43,3.65,15.86,7.79,31.93,7.79a8.88,8.88,0,0,0,0-17.76c-11.94,0-17.57-2.77-24.09-6-7.44-3.65-15.86-7.79-31.93-7.79s-24.5,4.14-31.93,7.79c-6.52,3.21-12.15,6-24.09,6s-17.57-2.77-24.09-6c-7.43-3.65-15.86-7.79-31.93-7.79a8.88,8.88,0,0,0,0,17.76Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      <path d="M395.37,271c-11.95,0-17.58-2.77-24.1-6-7.43-3.66-15.86-7.8-31.93-7.8s-24.5,4.14-31.93,7.8c-6.52,3.2-12.15,6-24.09,6s-17.57-2.77-24.09-6c-7.44-3.66-15.86-7.8-31.93-7.8s-24.5,4.14-31.93,7.8l-.55.27a8.88,8.88,0,1,0,7.83,15.94l.56-.27c6.52-3.21,12.15-6,24.09-6s17.57,2.77,24.09,6c7.43,3.65,15.86,7.8,31.93,7.8s24.49-4.15,31.93-7.8c6.52-3.21,12.15-6,24.09-6s17.57,2.77,24.09,6c7.44,3.65,15.86,7.8,31.94,7.8a8.89,8.89,0,0,0,0-17.77Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      <path d="M115.26,275c11.94,0,17.57,2.77,24.09,6,7.44,3.65,15.86,7.8,31.93,7.8a8.89,8.89,0,0,0,0-17.77c-11.94,0-17.57-2.77-24.09-6-7.43-3.66-15.86-7.8-31.93-7.8a8.88,8.88,0,0,0,0,17.76Z" transform="translate(0 -32.96)" style={{fill:'#fff'}}/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Espace Piscines
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="h-hiring-section">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="mb-6 lg:text-center text-base text-xl text-indigo-600 font-semibold tracking-wide uppercase"><span>Travailler chez Mantia</span></h2>
          <div className="flex flex-col-reverse md:flex-row-reverse bg-gray-400 mt-8">
          <a href="/recrutement" className="my-4 md:my-32 md:self-start text-center shadow bg-gray-300 text-indigo-600 hover:bg-white focus:shadow-outline 
              focus:outline-none md:text-base text-black py-3 px-4 rounded">Nous rejoindre</a>
            <p className="z-50 py-8 px-8 md:pl-32 md:pr-16 self-center md:grid-cols-2 md:text-xl lg:text-3xl text-gray-100 font-medium">
              <span className="text-red-800 p-4 md:text-xl lg:text-2xl">Témoignage (ou juste phrase d'accroche)
            </span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut dui risus. Vestibulum ullamcorper tincidunt sem, a luctus orci ultrices vel."</p>
            <img className="relative w-full h-96 opacity-30" src="https://via.placeholder.com/2400x1600.jpg" alt="mantia temoignage"/>
          </div>
        </div>
      </section>
    </Layout>
  );
};
