import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAsset } from "../utils/assets";
import "../styles/animations.css";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Sign from "../components/Sign";
import BackgroundParticles from "../components/BackgroundParticles.tsx";
import clsx from "clsx";

function Auth() {
  const womenLeft = getAsset("women-left.png");
  const logo = getAsset("Logo.png");
  const [show, setShow] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [fade, setFade] = useState(true);

  const toogleForm = () => {
    setFade(false);
    setTimeout(() => {
      setDisplayLogin(!displayLogin);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col w-full h-full min-h-screen md:flex-row transition-opacity duration-700 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* left side*/}
        <div className="py-6 w-full bg-primary p-4 space-y-6 flex flex-col items-center justify-center relative z-1000">
          <FontAwesomeIcon icon={faStar} color="#E4FF5F" className="text-4xl" />
          <h1 className="font-quicksand text-4xl text-light text-center font-bold">
            Welcome to TaskFlow
          </h1>
          <h3 className="text-center font-medium text-light text-2xl font-quicksand">
            Boost your productivity today
          </h3>
          <p className="font-quicksand text-light text-center max-w-[95%] leading-relaxed md:max-w-[60%] mx-auto md:text-lg">
            TaskFlow helps you stay organized, track your tasks, and get more
            done every day. Simple, fast, and designed for your flow.
          </p>
          <img
            src={womenLeft}
            alt="Women in the left side"
            className="w-[30vh] max-h-xs animate-float drop-shadow-xl transition-transform duration-700 ease-in-out hover:scale-105 hover:rotate-1"
          />
        </div>
        {/**right side */}
        <div className="relative w-full flex flex-col items-center justify-center space-y-4">
          <BackgroundParticles />
          <img src={logo} alt="Logo" className="w-[7vw] relative z-1000" />
          <div
            className="w-[300px] lg:w-[50vh] mb-6 p-6 rounded-2xl border border-white/20
             bg-white/10 backdrop-blur-md
             shadow-lg shadow-blue-500/10
             hover:shadow-blue-500/20
             transition-all duration-300 ease-in-out"
          >
            <div
              className={clsx(
                "w-auto transition-opacity duration-300 ease-in-out",
                fade ? "opacity-100" : "opacity-0",
              )}
            >
              {displayLogin ? (
                <Login switchForm={toogleForm} />
              ) : (
                <Sign switchForm={toogleForm} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
