import Button from "../components/Button.tsx";
import BackgroundParticles from "../components/BackgroundParticles.tsx";
import { getAsset } from "../utils/assets";

function Home() {
  const homePhotos = getAsset("home-photo.png");
  const homeLogo = getAsset("Logo.png");

  return (
    <>
      <div className="relative flex flex-col items-center justify-between overflow-hidden w-full h-full min-h-screen">
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
          <h1 className="font-quicksand text-dark text-4xl font-bold">TaskFlow</h1>
          <h3 className="font-quicksand text-dark text-[1.7vh] max-sm:text-base">
            "Organize your task, keep your flow"
          </h3>
          <Button text="Get started" />
        </div>
        <h3 className="font-quicksand text-dark font-light mb-4">
          © Copyright 2025 Taskflow
        </h3>
        {/** add background particle */}
        <div className="absolute inset-0 -z-10">
          <BackgroundParticles />
        </div>
      </div>
    </>
  );
}

export default Home;
