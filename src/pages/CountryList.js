import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BoxLayout from "../components/Layout/BoxLayout";
import ListNav from "../components/Layout/ListNav";
import classes from "./CountryList.module.css";

const CountryList = () => {
  const change = useLocation();
  const [route, setRoute] = useState(change.pathname);
  // props.fetchURL("all");
  console.log(change);

  useEffect(() => {
    setRoute(change.pathname);
  }, [change]);

  const passHandler = (props) => {
    console.log(props);
    setRoute(props);
  };

  return (
    <Fragment>
      <ListNav pass={passHandler} />
      <BoxLayout pass={route} />
    </Fragment>
  );
};
export default CountryList;
