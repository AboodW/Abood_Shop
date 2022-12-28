import React, { useState, useCallback } from "react";
import styles from "./SignInBox.module.css";
import { useStytch } from "@stytch/react";

const SignInBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  // const resetPasswordByEmail = useCallback(() => {
  //   stytchClient.passwords.resetByEmailStart({
  //     email: "abed.2alwawi2000@gmail.com",
  //   });
  // }, [stytchClient]);

  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log("Log In ✅");
  };

  return (
    <>
      <div className={styles.content}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className={styles.inputBox}>
            <button type="submit" value="Sign In" onClick={login}>
              Sign In
            </button>
            {/* <input type="submit" value="Login" /> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInBox;
