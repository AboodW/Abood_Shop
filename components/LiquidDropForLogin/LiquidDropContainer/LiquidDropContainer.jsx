import React from "react";
import styles from "./LiquidDropContainer.module.css";
import SignInBox from "../SignIn/SignInBox";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";

const LiquidDropContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();

  const resetPasswordByEmail = useCallback(() => {
    stytchClient.passwords.resetByEmailStart({
      email: "abed.2alwawi2000@gmail.com",
    });
  }, [stytchClient]);

  const logout = useCallback(() => {
    stytchClient.session.revoke();
  }, [stytchClient]);

  return (
    <div className={styles.container}>
      <div className={styles.drop}>
        <SignInBox />
      </div>
      <button
        // to="/reset"
        className={styles.forgetPassword}
        onClick={resetPasswordByEmail}
      >
        Forget Password
      </button>
      <Link to="/register" className={styles.signUp}>
        Sign Up
      </Link>
      <button value="Log Out" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default LiquidDropContainer;
