import type React from "react";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.ts";

interface Props {
  switchForm : () => void;
}

const Login: React.FC<Props> = ({ switchForm }) => {
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigate = useNavigate();

  // try to log an user using login function
  const handleClick = async (e : React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast.error("All fields is required")
      setIsLoading(false);
      return;
    }

    try {
      const result = await login({ email, password });
      if (result.success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 300);
      }
    } catch (error) {
      toast.error("An error occured during login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold text-dark font-quicksand">Login</h2>
        <form 
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={handleClick}
        >
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
            text={
              isLoading ? (
                <ClipLoader size={20} color="#F8FAFC"/>
              ) : (
                <span>
                  Log in <FontAwesomeIcon icon={faArrowRight} />
                </span>
              )
            }
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