"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import ContactIcon from "@mui/icons-material/ContactSupport";
import PeopleIcon from '@mui/icons-material/People';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Image from "next/image";
import MyBtn from '@/components/molecules/button/MyButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import DocumentIcon from '@mui/icons-material/Description';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PasswordIcon from '@mui/icons-material/Password';
import LogoutIcon from '@mui/icons-material/Logout'

const Navbar = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setAuthenticated(true);
      setIsAdmin(parsedUser.role === 'admin');
    } else {
      setUser(null);
      setAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setAuthenticated(false);
    setDropdownOpen(false);
    router.push('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <nav className="text-white flex items-center w-full px-4 py-2 z-10 bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex w-full items-center justify-between">
        {/* Navbar Brand */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={'/phenix.jpg'}
              alt="Logo"
              width="100"
              height="100"
              className="rounded-full cursor-pointer"
              priority
            />
          </Link>
        </div>
        
        {/* Nav Links */}
        <div className="hidden sm:flex space-x-4">
          <div className="relative group">
            <Link href="/" className="flex items-center px-3 py-2 text-white hover:text-yellow-400 relative">
              <HomeIcon className="mr-2" />
              Acceuil
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </div>

          <div className="relative group">
            <Link href="/Membres" className="flex items-center px-3 py-2 text-white hover:text-yellow-400 relative">
              <PeopleIcon className="mr-2" />
              Membres
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          
          <div className="relative group">
            <Link href="/Event" className="flex items-center px-3 py-2 text-white hover:text-yellow-400 relative">
              <EventIcon className="mr-2" />
              Événements
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </div>

          <div className="relative group">
            <Link href="/Presentation" className="flex items-center px-3 py-2 text-white hover:text-yellow-400 relative">
              <BusinessIcon className="mr-2" />
              Programme
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          
          <div className="relative group">
            <Link href="/Contact" className="flex items-center px-3 py-2 text-white hover:text-yellow-400 relative">
              <ContactIcon className="mr-2" />
              Contact
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </div>
        </div>

        {/* Conditional Render for Login or User Dropdown */}
        <div className="flex items-center">
          {authenticated ? (
            <div className="relative">
              <button 
                className="bg-transparent text-white px-4 py-2 rounded-md" 
                onClick={toggleDropdown}
              >
                <Image
                  src={user?.photo || "/noavatar.png"}
                  alt="User Photo"
                  width="40"
                  height="40"
                  className="rounded-full cursor-pointer filter grayscale hover:grayscale-0"
                  priority
                />
              </button>
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    {isAdmin ? (
                      <Link href="/Dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                        <DashboardIcon className="mr-2" />
                        Dashboard
                      </Link>
                    ) : (
                      <>
                        <Link href="/User" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <DashboardIcon className="mr-2" />
                          Tableau de bord
                        </Link>
                        <Link href="/User/mes-informations" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <InfoIcon className="mr-2" />
                          Mes informations
                        </Link>
                        <Link href="/User/mes-documents" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <DocumentIcon className="mr-2" />
                          Mes documents
                        </Link>
                        <Link href="/User/coordonnees-bancaires" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <CreditCardIcon className="mr-2" />
                          Coordonnées bancaires
                        </Link>
                        <Link href="/User/mes-participations" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <EventNoteIcon className="mr-2" />
                          Mes participations
                        </Link>
                        <Link href="/User/mot-de-passe" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                          <PasswordIcon className="mr-2" />
                          Mot de passe
                        </Link>
                      </>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out w-full text-left"
                      role="menuitem"
                    >
                      <LogoutIcon className="mr-2" />
                      Déconnexion
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/Connexion">
            <MyBtn textContent="Connexion" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
