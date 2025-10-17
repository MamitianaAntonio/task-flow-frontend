import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAsset } from "../utils/assets";
import "../styles/animations.css"
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Sign from "../components/Sign";

function Auth() {
  const womenLeft = getAsset("women-left.png");
  const [ show, setShow ] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);

  const toogleForm = () => setDisplayLogin(!displayLogin);

  useEffect(() => {
    setShow(true);
  }, [])

  return (
    <>
      <div
        className={`flex flex-col w-full h-full min-h-screen md:flex-row transition-opacity duration-700 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* left side*/}
        <div className="py-6 w-full bg-primary space-y-6 flex flex-col items-center justify-center">
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
        <div className="w-full">
          <h1>Right side</h1>
          {displayLogin ? (
            <Login switchForm={toogleForm} />
          ) : (
            <Sign switchForm={toogleForm} />
          )}
        </div>
      </div>
    </>
  );
}

export default Auth;
