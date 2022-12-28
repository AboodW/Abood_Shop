import React from "react";
import LiquidDropContainer from "./LiquidDropContainer/LiquidDropContainer";
import styles from "./MainL.module.css";

const MainL = () => {
  return (
    <div className={styles.container}>
      <LiquidDropContainer />
    </div>
  );
};

export default MainL;
