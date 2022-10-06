import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import classes from "./BoxLayout.module.css";
import Fetch from "../../Fetch";
import { useEffect, useState } from "react";
import Box from "../Container/Box";
import Loader from "../Container/Loader";

const BoxLayout = (props) => {
  const change = useLocation();
  const byUrl = props.pass;
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("Refreshing url" + byUrl);

  const f = async () => {
    setIsLoading(true);
    const url = `https://restcountries.com/v3.1${byUrl}`;
    const h = await Fetch(url);
    console.log(h);
    setIsLoading(false);
    setCountryList(h);
  };
  useEffect(() => {
    f();
    console.log("Refreshing url by " + byUrl);
  }, [byUrl]);

  console.log("gg" + byUrl);

  //   props.fetchURL("all");

  return (
    <Switch>
      <Route path={byUrl}>
        <div className={`${classes.container} ${isLoading && classes.center}`}>
          {isLoading && <Loader className={classes.center} />}
          {countryList.map((item) => {
            return <Box key={item.id} list={item} />;
          })}
        </div>
      </Route>
      {/* <Route path="/region/:Any" exact>
        <Redirect to="/all" />
      </Route> */}
    </Switch>
  );
};
export default BoxLayout;
