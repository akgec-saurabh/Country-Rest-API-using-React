import classes from "./Search.module.css";
import search from "../assets/search-outline.svg";
import { useRef } from "react";

const Search = (props) => {
  const searchRef = useRef();
  const searchHandler = () => {
    console.log(searchRef.current.value);
    props.onSearch(searchRef.current.value);
  };
  return (
    <div className={classes.search}>
      <input
        ref={searchRef}
        placeholder="Search for a Country..."
        className={classes.input}
        type="text"
      />
      <img onClick={searchHandler} className={classes.img} src={search} />
    </div>
  );
};
export default Search;
