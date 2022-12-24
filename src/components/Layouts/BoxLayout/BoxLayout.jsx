import "./BoxLayout.scss";
import { useEffect, useState } from "react";
import Box from "../../Containers/Box/Box";
import { useHttpClient } from "../../../hooks/use-http";
import ListSkeleton from "../../UI/Skeleton/ListSkeleton";
import { useSearchParams } from "react-router-dom";
import empty from "../../../assets/empty.svg";

const BoxLayout = () => {
  const { sendReq, loading } = useHttpClient();
  const [countryList, setCountryList] = useState([]);
  const [search] = useSearchParams({});

  useEffect(() => {
    let url = "https://restcountries.com/v3.1/all";

    if (search.get("filter")) {
      url = `https://restcountries.com/v3.1/region/${search.get("filter")}`;
    }
    if (search.get("search")) {
      url = `https://restcountries.com/v3.1/name/${search.get("search")}`;
    }

    const startReq = async () => {
      let data;
      try {
        data = await sendReq(url);
      } catch (err) {}
      setCountryList(data);
    };

    startReq();
  }, [sendReq, search]);

  return (
    <div className="container">
      {loading && <ListSkeleton list={20} hide={false} />}
      {countryList &&
        countryList.map((item, i) => <Box key={item.id + i} list={item} />)}
      {!countryList && (
        <div className="center">
          <h2>No Result Found</h2>
          <img src={empty} alt="" />
        </div>
      )}
      <ListSkeleton list={2} hide={true} />
    </div>
  );
};
export default BoxLayout;
