import type React from "react";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import { useState } from "react";
import { signUp } from "../services/auth.ts";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

interface Props {
  switchForm: () => void;
}

const Sign: React.FC<Props> = ({ switchForm }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPass, setConfirmedPass] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  const handleClick = async (e : React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name || !email || !password || !confirmedPass) {
      toast.error("All fiels is required")
      setIsLoading(false);
      return;
    }

    if (password !== confirmedPass) {
      setIsLoading(false);
      toast.error("Password doesn't not match")
      return;
    }
    {/**call signUp service function to valid or not data */}
    try {
      await signUp({name, email, password}); 
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-dark font-quicksand">Sign Up</h2>
        <form
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={handleClick}
        >
          {/**name input */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text">Enter your name</h3>
            <Input
              placeholder="Enter your name here"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/**Email input */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your email</h3>
            <Input
              placeholder="Enter your email here"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/**password input */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Enter your password</h3>
            <Input
              placeholder="Enter your password here"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/**confirm password input */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-quicksand text-dark">Confirm your password</h3>
            <Input
              placeholder="Confirm your password here"
              type="password"
              value={confirmedPass}
              onChange={(e) => setConfirmedPass(e.target.value)}
            />
          </div>
          {/**all button on sign in form */}
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4">
            <Button
              text={
                isLoading ? (
                  <ClipLoader size={20} color="#F8FAFC" />
                ) : (
                  <span className="flex items-center justify-center">
                    Sign In
                  </span>
                )
              }
              type="submit"
              bgColor="primary"
              hoverColor="secondary"
              disabled={isLoading}
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
