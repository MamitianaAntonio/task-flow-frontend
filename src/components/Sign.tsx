import type React from "react";
import Button from "./Button.tsx";

interface Props {
  switchForm : () => void;
}

const Sign: React.FC<Props> = ({ switchForm }) => {
  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <form className="">
          <h3>Enter your name</h3>
          <input type="text" placeholder="Name" required/>
          <h3>Enter your email</h3>
          <input type="email" placeholder="Email" required/>
          <h3>Enter your password</h3>
          <input type="password" placeholder="Password" required />
          <div>
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