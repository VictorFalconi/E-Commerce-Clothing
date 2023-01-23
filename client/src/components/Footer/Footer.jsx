import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footercontact}>
        <div className="m-8"></div>
        <div className="m-8">
          <h1 className="text-white text-sm text-center ">Contact</h1>
          <h3 className="text-white text-xs text-center">
            Business Phone: +54 991 923178
          </h3>
          <h3 className="text-white text-xs text-center">Wanna be sponsor?</h3>
          <h3 className="text-white text-xs text-center">
            shine_clothes@hotmail.com
          </h3>
        </div>
      </div>
      <div className={styles.shineteam}>
        <h1 className="text-white text-sm text-center">SHINE TEAM</h1>
        <h3 className="text-white text-xs text-center">
          <a
            href="/aboutus"
            className="text-white text-xs text-center no-underline"
          >
            About Us
          </a>
        </h3>
        <h3 className="text-white text-xs text-center">
          Henry - Final Project - FT31b Team 17
        </h3>
      </div>
      <div className={styles.footerrights}>
        <h1 className="text-white text-sm">Shine All Rights Reserved © 2023</h1>
        <a
          href="/helpusimprove"
          className="text-white text-xs text-center no-underline"
        >
          Give us your feedback
        </a>
      </div>
    </div>
  );
}
