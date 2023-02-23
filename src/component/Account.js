import { Link } from "react-router-dom";
import classes from "../style/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link style={{ color: "var(--fontPrimary)" }} to="/signup">
        Signup
      </Link>
      {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
