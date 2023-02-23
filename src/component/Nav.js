import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../style/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Samiul" />
            <h3 style={{ fontStyle: "italic", color: "#002333" }}>SAM IT</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
