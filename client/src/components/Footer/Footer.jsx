import { style } from "@mui/system";
import React from "react";
import styles from "./Footer.module.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

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
          <p className={styles.aboutus} onClick={() => {navigate('/aboutus')}} style={{cursor: 'pointer'}}>About Us</p>
          <FontAwesomeIcon className={styles.arrowiconleft} icon={faArrowLeft}></FontAwesomeIcon>
        </h3>
        <h3>Henry - Final Project - FT31b Team 17</h3>
      </div>
      <div className={styles.footerrights}>
        <h1>Shine All Rights Reserved © 2023</h1>
        <p onClick={() => {navigate('/helpusimprove')}} style={{cursor: 'pointer'}}>Give us your feedback</p>
      </div>
    </div>
  );
}
