import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink to={"cities"}>Citites</NavLink>
        <NavLink to={"countries"}>Countries</NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
