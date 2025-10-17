import type React from "react";
import Button from "./Button.tsx";

interface Props {
  switchForm : () => void;
}

const Login: React.FC<Props> = ({ switchForm }) => {
  return (
    <>
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
        >
          Dont't have an account ?
        </a>
      </div>
    </>
  );
};

export default Login;