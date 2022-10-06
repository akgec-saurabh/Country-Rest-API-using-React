import classes from "./Filter.module.css";
import down from "../assets/chevron-down-outline.svg";
import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Filter = (props) => {
  const selected = useRef();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const change = useLocation();

  useEffect(() => {
    const segments = change.pathname.split("/");
    console.log(segments);
    if (segments.length === 3) {
      selected.current.value = segments[2];
    }
  }, [change]);

  const selectHandler = (e) => {
    selected.current.value = e.target.textContent;
    props.onFilter(selected.current.value);

    setOpen(false);
  };

  const openHandler = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const selectHandlerReset = () => {
    selected.current.value = null;
    history.push(`/all`);
    props.onReset("/all");

    setOpen(false);
  };
  return (
    <div className={classes.filter}>
      <div className={classes.input} onClick={openHandler}>
        <input
          className={classes.default}
          ref={selected}
          type="text"
          readOnly
          placeholder="Filter by Region"
        />
        <img
          className={`${classes.img} ${open && classes.active}`}
          src={down}
        />
      </div>
      <div className={`${classes.option} ${!open && classes.hide}`}>
        <span onClick={selectHandler}>Africa</span>
        <span onClick={selectHandler}>America</span>
        <span onClick={selectHandler}>Asia</span>
        <span onClick={selectHandler}>Europe</span>
        <span onClick={selectHandler}>Oceania</span>
        <span onClick={selectHandlerReset}>All</span>
      </div>
    </div>
  );
};
export default Filter;
