import React from 'react';
import Navb from '@/components/molecules/nav';
import Auth from '@/components/organisims/signUpIn/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import Footer from '@/components/molecules/Footer';


const Connexion = () => {
  return (
    <div>
      <Navb/>
      <br /><br /><br /><br />
      <Auth/>
      <br /><br /><br /><br />
      <Footer/>
    </div>
  );
};

export default Connexion;