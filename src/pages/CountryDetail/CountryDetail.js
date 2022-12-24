import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Containers/Detail/Detail";
import DetailNav from "../../components/Layouts/DetailNav/DetailNav";
import { useHttpClient } from "../../hooks/use-http";

const CountryDetail = () => {
  const [countryList, setCountryList] = useState([]);
  const { sendReq, loading } = useHttpClient();
  const cid = useParams();

  useEffect(() => {
    const startReq = async () => {
      const url = `https://restcountries.com/v3.1/alpha/${cid.cid}`;
      let data;
      try {
        data = await sendReq(url);
      } catch (err) {}
      setCountryList(data[0]);
    };
    startReq();
  }, [cid, sendReq]);

  return (
    <>
      <DetailNav />
      <Detail list={countryList} loading={loading} />
    </>
  );
};

export default CountryDetail;
