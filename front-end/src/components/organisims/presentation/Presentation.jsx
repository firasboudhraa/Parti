import React from "react";
import Link from "next/link";
import {
  FaMedal,
  FaHandsHelping,
  FaUserGraduate,
  FaHeartbeat,
  FaDonate,
  FaHandHoldingHeart,
} from "react-icons/fa";

const Presentation = () => {
  return (
    <section className="presentation-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 text-blue-600">
        À propos de nous
        </h2>

        <div className="mission-vision-history mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mission bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-4xl font-bold mb-4 text-blue-500">Mission</h3>
            <p className="text-lg text-gray-700">
            Notre mission est de bâtir une Tunisie résiliente, unie et innovante. 
            Nous nous engageons à surmonter les défis actuels et à reconstruire une société meilleure 
            en mettant l'accent sur la solidarité et l'innovation.
            </p>
          </div>

          <div className="vision bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-4xl font-bold mb-4 text-blue-500">Vision</h3>
            <p className="text-lg text-gray-700">
            Nous envisionnons une Tunisie où chaque citoyen a accès à des opportunités
            pour réaliser son potentiel. Nous voulons créer un environnement où l'innovation 
            et la solidarité permettent à tous de prospérer.
            </p>
          </div>

          <div className="history bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-4xl font-bold mb-4 text-blue-500">Histoire</h3>
            <p className="text-lg text-gray-700">
            Depuis notre création, le parti Phenix a évolué pour 
            devenir une voix influente pour le changement. 
            Notre parcours est marqué par des initiatives qui ont eu un impact significatif sur notre société.
            </p>
          </div>
        </div>

        <div className="achievements mb-12">
          <h3 className="text-5xl font-bold mb-8 text-blue-600">
          Nos Réalisations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="achievement-item bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <FaMedal className="text-6xl text-yellow-500 mb-4" />
              <h4 className="text-3xl font-semibold mb-2 text-blue-500"> </h4>
              <p className="text-lg text-gray-700">
              Nous avons mis en œuvre plus de 100 initiatives communautaires 
              qui ont réellement fait une différence dans la vie des Tunisiens.
              </p>
            </div>
            <div className="achievement-item bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <FaUserGraduate className="text-6xl text-green-500 mb-4" />
              <h4 className="text-3xl font-semibold mb-2 text-blue-500"></h4>
              <p className="text-lg text-gray-700">
              Nos programmes de bourses ont soutenu plus de 500 étudiants, 
              les aidant à réaliser leurs ambitions éducatives.
              </p>
            </div>
            <div className="achievement-item bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <FaHeartbeat className="text-6xl text-red-500 mb-4 " />
              <h4 className="text-3xl font-semibold mb-2 text-blue-500">
              </h4>
              <p className="text-lg text-gray-700">
              Nos initiatives en santé ont touché plus de 10,000 individus, 
              fournissant un soutien médical essentiel.
              </p>
            </div>
            <div className="achievement-item bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <FaHandsHelping className="text-6xl text-blue-500 mb-4" />
              <h4 className="text-3xl font-semibold mb-2 text-blue-500">
              </h4>
              <p className="text-lg text-gray-700">
              Nous avons été honorés de recevoir de nombreuses récompenses 
              pour notre engagement envers le service communautaire et l'excellence.
              </p>
            </div>
          </div>
        </div>

        <div
          className="get-involved relative bg-cover bg-center text-white p-8 rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundImage: 'url("")' }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-5xl font-bold mb-6">Impliquer-vous</h3>
            <p className="text-lg mb-8">
            Rejoignez notre mission pour un avenir meilleur. Que ce soit en tant que volontaire, 
            en faisant un don, ou en collaborant avec nous, il existe de nombreuses façons de contribuer à notre cause.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/Connexion" className="flex items-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                  <FaHandHoldingHeart className="mr-2" />
                  Devenir volontaire
              </Link>
              <Link href="/Donation"  className="flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition">
                <FaDonate className="text-2xl mr-2" />
                 Faire un Don
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
