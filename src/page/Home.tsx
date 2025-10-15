import Button from "../components/Button";
import { getAsset } from "../utils/assets";

function Home () {
  const homePhotos = getAsset("home-photo.jpg")

  return (
    <>
      <div>
        <img className="w-50" src={homePhotos} alt="Home photo"/>
        <h1>TaskFlow</h1>
        <h3>"Organize your task, keep your flow"</h3>
        <Button text="Get started" className="bg-primary text-light hover:text-dark"/>
      </div>
    </>
  )
}

export default Home;