import type React from "react";
import Button from "./Button.tsx";

interface Props {
  switchForm : () => void;
}

const Sign : React.FC<Props> = ({switchForm}) => {
  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Button text="Sign in" type="submit" bgColor="primary" hoverColor="secondary" /> 
        </form>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}
        >
          Déjà un compte ? Login
        </a>
      </div>
    </>
  );
}

export default Sign;