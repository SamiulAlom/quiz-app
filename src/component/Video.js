import classes from "../style/Video.module.css";
export default function Video({ title, id, noq, image }) {
  return (
    <div className={classes.video}>
      <img src={image} alt={title} />
      <p style={{ fontStyle: "italic" }}>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Points :{noq * 10}</p>
      </div>
    </div>
  );
}
