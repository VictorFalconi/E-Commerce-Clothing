import { style } from "@mui/system";
import React from "react";
import styles from "./Footer.module.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footercontact}>
        <div></div>
        <div>
          <h1>Contact</h1>
          <h3>
            Business Phone: +54 991 923178
          </h3>
          <h3>Wanna be sponsor?</h3>
          <h3>
            shine_clothes@hotmail.com
          </h3>
        </div>
      </div>
      <div className={styles.shineteam}>
        <h1>SHINE TEAM</h1>
        <h3 className={styles.aboutuscontainer}>
          <FontAwesomeIcon className={styles.arrowiconright} icon={faArrowRight}></FontAwesomeIcon>
          <a className={styles.aboutus} href="/aboutus">About Us</a>
          <FontAwesomeIcon className={styles.arrowiconleft} icon={faArrowLeft}></FontAwesomeIcon>
        </h3>
        <h3>Henry - Final Project - FT31b Team 17</h3>
      </div>
      <div className={styles.footerrights}>
        <h1>Shine All Rights Reserved © 2023</h1>
        <a href="/helpusimprove">Give us your feedback</a>
      </div>
    </div>
  );
}
