import Button from "../components/Button.tsx";
import BackgroundParticles from "../components/BackgroundParticles.tsx";
import { getAsset } from "../utils/assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function Home() {
  const homePhotos = getAsset("home-photo.png");
  const homeLogo = getAsset("Logo.png");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setFade(true);
    setTimeout(() => {
      navigate('/auth');
    }, 300)
  }

  return (
    <>
      <div className="relative flex flex-col items-center justify-between overflow-hidden w-full h-full min-h-screen scroll-smooth">
        <img
          src={homeLogo}
          alt="Logo image"
          className="w-12 top-4 left-4 absolute"
        />
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 text-center px-4">
          <img
            className="w-[20vh] max-h-xs"
            src={homePhotos}
            alt="Home photo"
          />
          <h1 className="font-quicksand text-dark text-4xl font-bold">
            TaskFlow
          </h1>
          <h3 className="font-quicksand text-dark text-[1.7vh] max-sm:text-base">
            "Organize your task, keep your flow"
          </h3>
          <Button
            text={
              loading ? <ClipLoader size={20} color="#F8FAFC" /> : "Get started"
            }
            onClick={handleClick}
          />
        </div>
        <h3 className="font-quicksand text-dark font-light mb-4">
          © Copyright 2025 Taskflow
        </h3>
        {/** add background particle */}
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          } absolute inset-0 -z-10`}
        >
          <BackgroundParticles />
        </div>
      </div>
    </>
  );
}

export default Home;
