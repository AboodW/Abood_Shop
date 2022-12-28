import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { StytchProvider } from "@stytch/react";
// import { stytchClient } from "../Stytch/stytchHeadLessClient";

function MyApp({ Component, pageProps }) {
  return (
    // <StytchProvider client={stytchClient}>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    // </StytchProvider>
  );
}

export default MyApp;
