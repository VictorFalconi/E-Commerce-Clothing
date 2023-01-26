import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addRate, getUsersDetails } from "../../redux/actions";
import styles from "./RateUs.module.css";
import { useNavigate } from "react-router-dom";

function RateUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const use = useSelector((state) => state.usersDetails);
  const [feedback, setFeedback] = useState({
    userId: use._id,
    score: 0,
    comment: "",
  });

  console.log("esto es use", feedback);

  function handleRate(e) {
    e.preventDefault();
    console.log("feedback rate", feedback);
    setFeedback({
      ...feedback,
      score: e.target.value,
    });
  }
  function handleComment(e) {
    e.preventDefault();
    console.log("feedback coment", feedback);
    setFeedback({
      ...feedback,
      comment: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addRate(feedback));
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titletext}>
        Tell us how your shopping experience was!
      </h2>
      <div className={styles.mensaje}>
        Thank you for trusting in <strong>SHINE</strong> it is important for We
        know your opinion and continue to improve.
      </div>
      <div className={styles.opciones}>
        <select onChange={handleRate}>
          <option value="All rates">All rates</option>
          <option value="5">5 ☆</option>
          <option value="4">4 ☆</option>
          <option value="3">3 ☆</option>
          <option value="2">2 ☆</option>
          <option value="1">1 ☆</option>
        </select>
        <div>
          <textarea
            className={styles.comentario}
            type="text"
            placeholder="Ingrese su comentario"
            onChange={handleComment}
          />
        </div>
      </div>
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Thanks for your purchase
      </button>
    </div>
  );
}

export default RateUs;
