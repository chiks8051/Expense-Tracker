import React from "react";
import styles from "./Card.module.css";
import Button from "./Button";

const Card = ({
  title,
  money,
  buttonText,
  buttonType,
  handleClick,
  success = true,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeading}>
        {`${title}: `}
        <span
          className={success ? styles.success : styles.failure}
        >{`₹${money}`}</span>
      </h3>
      <Button handleClick={handleClick} style={buttonType}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Card;
