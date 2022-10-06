import Fetch from "../../Fetch";
import classes from "./ListNav.module.css";

import { useHistory } from "react-router-dom";
import Filter from "../Filter";
import Search from "../Search";
const ListNav = (props) => {
  const history = useHistory();

  const filterHandler = async (filter) => {
    const url = `https://restcountries.com/v3.1/region/${filter}`;

    console.log(await Fetch(url));
    // console.log(history.push(`/region/${e.target.value}`));

    //for passing the url
    history.push(`/region/${filter}`);

    console.log("This is filtered url " + filter);
    props.pass(`/region/${filter}`);
  };

  const resetHandler = () => {
    props.pass(`/all`);
  };

  const searchHandler = async (searching) => {
    console.log(searching);

    const url = `https://restcountries.com/v3.1/name/${searching}`;

    console.log(await Fetch(url));
    history.push(`/name/${searching}`);

    //for passing the url
    props.pass(`/name/${searching}`);
  };

  return (
    <div className={classes.bar}>
      {/* <form onSubmit={searchHandler} className={classes.search}>
        <label>
          <input placeholder="Search a Country" type="text" name="search" />
        </label>
        <input type="submit" value="submit" />
      </form> */}
      <Search onSearch={searchHandler} />

      {/* <select onChange={changeHandler} name="region" className={classes.filter}>
        <option value="" hidden>
          Filter by Region
        </option>

        <option value="africa">Africa</option>

        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select> */}
      <Filter onReset={resetHandler} onFilter={filterHandler} />
    </div>
  );
};
export default ListNav;
