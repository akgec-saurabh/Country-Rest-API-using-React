import "./Filter.scss";
import { useRef, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useDetectClickOutside } from "react-detect-click-outside";

const Filter = ({ onReset, onChange }) => {
  const selected = useRef();
  const [open, setOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setOpen(false);
    },
  });

  const selectHandler = (e) => {
    selected.current.value = e.target.textContent;
    onChange(selected.current.value);
    setOpen(false);
  };

  const openHandler = () => {
    setOpen(!open);
  };

  const selectHandlerReset = () => {
    selected.current.value = null;
    onReset();
    setOpen(false);
  };
  return (
    <div ref={ref} className="filter el">
      <div className="filter-box" onClick={openHandler}>
        <input
          ref={selected}
          type="text"
          readOnly
          placeholder="Filter by Region"
        />

        <ExpandMore className={`icon ${open ? "icon-active" : ""}`} />
      </div>
      <div className={`option el ${open ? "" : "hider"}`}>
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
