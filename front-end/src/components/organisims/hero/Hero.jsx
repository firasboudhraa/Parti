"use client";
import React from 'react';

const Hero = () => {
  return (
    <div className="hero relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "linear-gradient(rgba(8,0,5,0.7), rgba(8,10,58,0.7)), url('/hero.jpg')" }}>
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative text-center text-white z-10">
        <div className="content">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue à Phenix</h1>
          <p className="text-lg md:text-2xl mb-8">Revenir Plus Fort, Bâtir Plus Haut.</p>
          <div className="buttons flex justify-center space-x-4">
            <button className="learn-more bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all duration-150 ease-in-out">
              Learn More
            </button>
            <button className="get-started bg-white text-blue-600 py-2 px-6 rounded-md hover:bg-gray-200 transition-all duration-150 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
