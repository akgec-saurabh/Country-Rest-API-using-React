import classes from "./Box.module.css";
import { Link } from "react-router-dom";
const Box = (props) => {
  return (
    <Link
      to={`/detail/${props.list.cca3.toLowerCase()}`}
      className={classes.box}
      // onClick={onClick}
    >
      <div className={classes.image}>
        <img src={props.list.flag}></img>
      </div>

      <div className={classes.details}>
        <h3>{props.list.name}</h3>
        <p>
          <span>Population : </span> {props.list.population}
        </p>
        <p>
          <span>Region : </span> {props.list.region}
        </p>
        <p>
          <span>Capital : </span> {props.list.capital}
        </p>
      </div>
    </Link>
  );
};

export default Box;
