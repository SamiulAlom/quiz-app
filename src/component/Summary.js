import successImage from "../assets/images/success.png";
import classes from "../style/Summary.module.css";
export default function Summary({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 10}
        </p>
      </div>
      <div className={classes.badge}>
        <img src={successImage} alt="Success" />
      </div>
    </div>
  );
}
