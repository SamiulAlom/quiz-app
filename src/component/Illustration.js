import signupImage from "../assets/images/SignUp.png";
import classes from "../style/Illustration.module.css";
export default function Illustration() {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={signupImage} alt="Signup" />
      </div>
    </div>
  );
}
