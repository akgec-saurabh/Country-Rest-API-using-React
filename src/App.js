import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CountryList from "./pages/CountryList";
import Layout from "./components/Layout/Layout";
import React, { Suspense } from "react";
import Loader from "./components/Container/Loader";
const CountryDetail = React.lazy(() => import("./pages/CountryDetail"));
function App() {
  // const [countryList, setCountryList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchCountryList = useCallback(async () => {
  //   setIsLoading(true);
  //   const url = `https://restcountries.com/v3.1/all`;

  //   try {
  //     const response = await fetch(url);
  //     const responseBody = await response.json();
  //     if (!response.ok) {
  //       throw new Error("Some Error Occured");
  //     }

  //     //Mapping data when everything is Good
  //     const transformData = responseBody.map((data) => {
  //       return {
  //         id: data.cca3 + data.ccn3,
  //         name: data.name.common,
  //         capital: data.capital,
  //         population: data.population,
  //         region: data.region,
  //         subRegion: data.subregion,
  //         tld: data.tld,
  //         language: data.languages,
  //         flag: data.flags.svg,
  //         currency: data.currencies,
  //         borders: data.borders,
  //       };
  //     });

  //     setIsLoading(false);
  //     setCountryList(transformData);
  //     console.log("transformData");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // });

  // useEffect(() => {
  //   fetchCountryList();
  // }, []);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all" />
          </Route>
          <Route path="/all">
            <CountryList />
          </Route>
          <Route path="/name/:anysearch">
            <CountryList />
          </Route>
          <Route path="/region/:anyregion">
            <CountryList />
          </Route>
          <Route path="/detail/:all">
            <CountryDetail />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
