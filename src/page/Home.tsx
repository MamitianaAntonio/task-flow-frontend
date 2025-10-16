import Button from "../components/Button.tsx";
import { getAsset } from "../utils/assets";

function Home () {
  const homePhotos = getAsset("home-photo.jpg")

  return (
    <>
      <div>
        <img className="w-50" src={homePhotos} alt="Home photo"/>
        <h1 className="">TaskFlow</h1>
        <h3>"Organize your task, keep your flow"</h3>
        <Button text="Get started" className=""/>
      </div>
    </>
  )
}

export default Home;