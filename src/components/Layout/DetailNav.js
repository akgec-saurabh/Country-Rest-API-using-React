import { Link, useHistory } from "react-router-dom";
import back from "../../assets/arrow-back-outline.svg";
import home from "../../assets/home-outline.svg";
import classes from "./DetailNav.module.css";

const DetailNav = () => {
  const history = useHistory();

  return (
    <div className={classes.box}>
      <div onClick={history.goBack} className={classes.back}>
        <img src={back} />
        <span>Back</span>
      </div>
      <Link className={classes.home} to="/all">
        <img src={home} />
        <span>Home</span>
      </Link>
    </div>
  );
};
export default DetailNav;
