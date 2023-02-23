import image from "../assets/images/Title-image/1.png";
import classes from "../style/Video.module.css";
export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="" />
        <p style={{ fontStyle: "italic" }}>
          Test your skill on Basic C programming
        </p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
