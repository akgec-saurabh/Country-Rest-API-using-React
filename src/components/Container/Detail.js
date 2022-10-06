import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Detail.module.css";
import Fetch from "../../Fetch";

const Detail = (props) => {
  const [haveBorders, setHaveBorders] = useState(false);
  const [borders, setBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCurrency = (c) => {
    let currency = "";
    for (let elm in c) {
      if (currency !== "") {
        currency += ", ";
      }
      currency += c[elm].name;
    }
    return currency;
  };

  const getLang = (l) => {
    let lang = "";
    for (let prop in l) {
      if (lang !== "") {
        lang += ", ";
      }
      lang += l[prop];
    }
    return lang;
  };

  const gettingBorderFullName = async () => {
    const temp = [];

    if (props.list.borders) {
      setHaveBorders(true);

      for (let br of props.list.borders) {
        temp.push({
          fullName: await fetchName(br).then((res) => res),
          cca3: br.toLowerCase(),
        });
      }
      setIsLoading(false);
      setBorders(temp);
      console.log(temp);
    }
  };

  useEffect(() => {
    gettingBorderFullName();
    console.log(props.list);
  }, [props.list.borders]);

  const borderClicked = () => {
    setIsLoading(true);
  };

  const fetchName = async (cca) => {
    const url = `https://restcountries.com/v3.1/alpha/${cca}`;
    const [h] = [...(await Fetch(url))];
    // if (h) setSucess(true);
    // setCountryList(h);

    return h.name;
  };

  return (
    <div className={classes.containers}>
      <img
        className={classes.img}
        style={imageLoaded ? {} : { display: "none" }}
        src={props.list.flag}
        onLoad={() => setImageLoaded(true)}
      />

      <div className={classes.details}>
        <div className={classes.name}>{props.list.name}</div>
        <div className={classes.container}>
          <div className={classes.one}>
            <ul>
              <li>
                Native Name :&nbsp;<span>{props.list.name}</span>
              </li>
              <li>
                Population :&nbsp;<span>{props.list.population}</span>
              </li>
              <li>
                Region :&nbsp;<span>{props.list.region}</span>
              </li>
              <li>
                Sub Region :&nbsp;<span>{props.list.subRegion}</span>
              </li>
              <li>
                Capital :&nbsp;<span>{props.list.capital}</span>
              </li>
            </ul>
          </div>
          <div className={classes.two}>
            <ul>
              <li>
                Top Level Domain :&nbsp;<span>{props.list.tld}</span>
              </li>
              <li>
                Currencies :&nbsp;
                <span>{getCurrency(props.list.currency)}</span>
              </li>
              <li>
                Languages :&nbsp;<span>{getLang(props.list.language)}</span>
              </li>
            </ul>
          </div>
        </div>
        {!isLoading && haveBorders && (
          <div className={classes.border}>
            <span className={classes.head}>Border Countries :</span>
            {borders.map((item, i) => {
              return (
                <Link
                  className={classes.actualBorder}
                  key={item + i}
                  to={`/detail/${item.cca3}`}
                  onClick={borderClicked}
                >
                  <div className={classes.divBorder}>{item.fullName}</div>
                </Link>
              );
            })}
          </div>
        )}
        {isLoading && <div className={classes.border}>Loading</div>}
      </div>
    </div>
  );
};

export default Detail;
