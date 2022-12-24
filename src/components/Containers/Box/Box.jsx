import "./Box.scss";
import { Link } from "react-router-dom";
const Box = (props) => {
  return (
    <Link to={`/detail/${props.list.cca3.toLowerCase()}`} className="box el">
      <div className="image">
        <img src={props.list.flag} alt=""></img>
      </div>

      <div className="details">
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
