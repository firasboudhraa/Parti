import React from "react";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import useSignUpStore from "@/stores/signUpStore";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUpForm = ({ setIsSignIn }) => {
  const router = useRouter();
  const { formData, errors, handleChange, handleClickSignUp, loading } =
    useSignUpStore();

  const handleSignUp = () => {
    handleClickSignUp(router);
  };

  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleFacebookSignUp = () => {
    signIn("facebook", { callbackUrl: "/" });
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-[var(--bgSoft)] rounded-2xl shadow-2xl flex w-full max-w-4xl justify-center">
        <div className="w-2/5 bg-orange-500  rounded-tl-2xl rounded-bl-2xl py-36 px-12 text-white">
          <h2 className="text-3xl font-bold mb-2">Bienvenue de nouveau !</h2>
          <div className="border-2 w-10 border-white inline-block mb-2 "></div>
          <p className="mb-10">
          Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles.
          </p>
          <a
            href="#"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-500"
            onClick={() => setIsSignIn(true)}
          >
            Se connecter
          </a>
        </div>
        <div className="w-3/5 p-5">
          <div className="py-10">
            <h2 className="text-3xl font-bold text-orange-500 mb-2">
            Créer un compte
            </h2>
            <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <button
                className="border-2 border-gray-300 rounded-full p-3 mx-1"
                onClick={handleFacebookSignUp}
              >
                <FaFacebookF className="text-sm" />
              </button>
              <button
                className="border-2 border-gray-300 rounded-full p-3 mx-1"
                onClick={handleGoogleSignUp}
              >
                <FaGoogle className="text-sm" />
              </button>
            </div>
            <p className="text-gray-400 my-3">
            ou utilisez votre email pour vous inscrire
            </p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                <MdPersonOutline className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  className="bg-gray-100 outline-none text-sm flex-1 text-black"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1 text-black"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  className="bg-gray-100 outline-none text-sm flex-1 text-black"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmer mot de passe"
                  className="bg-gray-100 outline-none text-sm flex-1 text-black"
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <button
                className="border-2 border-orange-500 text-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-500 hover:text-white"
                onClick={handleSignUp}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Inscrivez-vous"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
