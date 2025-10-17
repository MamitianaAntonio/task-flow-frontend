import type React from "react";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import { useState } from "react";

interface Props {
  switchForm : () => void;
}

const Sign: React.FC<Props> = ({ switchForm }) => {
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-dark font-quicksand">Sign Up</h2>
        <form className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text">Enter your name</h3>
            <Input
              placeholder="Enter your name here"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your email</h3>
            <Input
              placeholder="Enter your email here"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your password</h3>
            <Input
              placeholder="Enter your password here"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              text="Sign in"
              type="submit"
              bgColor="primary"
              hoverColor="secondary"
            />
            <Button
              text="Go back to log in"
              type="button"
              bgColor="tertiary"
              hoverColor="secondary"
              onClick={switchForm}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Sign;