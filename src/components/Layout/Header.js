import classes from "./Header.module.css";
import Logo from "../../assets/moon-outline.svg";

const Header = () => {
  return (
    <nav>
      <h1>Where in the world ?</h1>
      <div className={classes["dark-mode"]}>
        <img className={classes.light} src={Logo} alt="darkicon" />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};
export default Header;
