import "./Search.scss";
import { useRef } from "react";
import { SearchOutlined } from "@mui/icons-material";

const Search = ({ onChange }) => {
  const searchRef = useRef();

  const onChangeHandler = (e) => {
    onChange(searchRef.current.value);
  };

  return (
    <div className="search el">
      <input
        ref={searchRef}
        placeholder="Search for a Country..."
        type="text"
        onChange={onChangeHandler}
      />
      <SearchOutlined className="icon" />
    </div>
  );
};
export default Search;
