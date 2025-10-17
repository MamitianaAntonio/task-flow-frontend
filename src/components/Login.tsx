import type React from "react";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import { useState } from "react";

interface Props {
  switchForm : () => void;
}

const Login: React.FC<Props> = ({ switchForm }) => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-dark font-quicksand">Login</h2>
        <form className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your email</h3>
            <Input 
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your password</h3>
            <Input 
              type="password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            text="Login"
            bgColor="primary"
            hoverColor="secondary"
          />
        </form>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}
          className="font-quicksand underline text-dark"
        >
          Dont't have an account ?
        </a>
      </div>
    </>
  );
};

export default Login;