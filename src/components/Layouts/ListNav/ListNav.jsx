import { useSearchParams } from "react-router-dom";
import Filter from "../../UI/Filter/Filter";
import Search from "../../UI/Search/Search";
import "./ListNav.scss";
const ListNav = () => {
  const [search, setSearch] = useSearchParams({});

  const onFilterChangeHandler = async (filter) => {
    setSearch({ filter });
  };

  const resetHandler = () => {
    setSearch({});
  };

  const onSearchChangeHandler = (search) => {
    setSearch({ search });
  };

  return (
    <div className="bar">
      <Search onChange={onSearchChangeHandler} />
      <Filter onReset={resetHandler} onChange={onFilterChangeHandler} />
    </div>
  );
};
export default ListNav;
