import { useState, useEffect, Fragment } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import Detail from "../components/Container/Detail";
import DetailNav from "../components/Layout/DetailNav";
import Fetch from "../Fetch";
import Loader from "../components/Container/Loader";

const CountryDetail = () => {
  const [countryList, setCountryList] = useState([]);
  const [sucess, setSucess] = useState(false);
  const urlId = useParams();

  const f = async () => {
    const url = `https://restcountries.com/v3.1/alpha/${urlId.all}`;
    const [h] = [...(await Fetch(url))];
    if (h) setSucess(true);
    setCountryList(h);
    console.log("CDetail");
  };

  useEffect(() => {
    f();
  }, [urlId]);

  return (
    <Fragment>
      {/* <button onClick={history.goBack}>Back</button> */}
      <DetailNav />
      <Switch>
        <Route path={`/detail/${urlId.all}`} exact>
          {sucess && <Detail list={countryList} />}
          {!sucess && <Loader />}
        </Route>
        <Route path="/detail/">
          <Redirect to="/all" />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default CountryDetail;
