import React from "react";
import styles from "./Payment.module.css";
import logo from "../../Utils/Images/logo .png"
const Paymentnavbar = () => {
  return (
    <div className={styles.nav}>
      <img
        src={logo}
        alt=""
      />

      <h1>100% Secure Payments</h1>
    </div>
  );
};

export default Paymentnavbar;
