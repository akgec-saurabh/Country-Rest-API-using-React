import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHttpClient } from "../../../hooks/use-http";
import "./Detail.scss";

const Detail = (props) => {
  const [borders, setBorders] = useState([]);
  const { sendReq, loading } = useHttpClient(null);

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

  useEffect(() => {
    console.log(props);
    const gettingBorderFullName = async () => {
      console.log("getting boders");
      const temp = [];

      if (props.list.borders) {
        console.log("setting borders true");

        for (let br of props.list.borders) {
          console.log(br);
          temp.push({
            fullNames: await sendReq(
              `https://restcountries.com/v3.1/alpha/${br}`
            ),
            cca3: br.toLowerCase(),
          });
        }
        setBorders(temp);
      }
    };
    gettingBorderFullName();
    return () => {
      setBorders([]);
    };
  }, [props.list.borders]);

  console.log(props.list);
  return (
    <div className="containers">
      <div className="image">
        {props.loading ? (
          <Skeleton
            className="image_skeleton"
            variant="rectangular"
            width="100%"
            height="20rem"
          />
        ) : (
          <img src={props.list.flag} />
        )}
      </div>

      <div className="details">
        {props.loading ? (
          <Skeleton variant="text" width="100%" sx={{ fontSize: "2rem" }} />
        ) : (
          <h2 className="name">{props.list.name}</h2>
        )}
        <div className="details_container">
          <div className="left">
            <ul>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Native Name :&nbsp;<span>{props.list.name}</span>
                  </>
                )}
              </li>

              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Population :&nbsp;<span>{props.list.population}</span>
                  </>
                )}
              </li>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Region :&nbsp;<span>{props.list.region}</span>
                  </>
                )}
              </li>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Sub Region :&nbsp;<span>{props.list.subRegion}</span>
                  </>
                )}
              </li>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Capital :&nbsp;<span>{props.list.capital}</span>
                  </>
                )}
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Top Level Domain :&nbsp;<span>{props.list.tld}</span>
                  </>
                )}
              </li>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Currencies :&nbsp;
                    <span>{getCurrency(props.list.currency)}</span>
                  </>
                )}
              </li>
              <li>
                {props.loading ? (
                  <Skeleton
                    width="100%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                ) : (
                  <>
                    Languages :&nbsp;<span>{getLang(props.list.language)}</span>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        {props.list.borders && (
          <div className="border">
            {props.loading || loading ? (
              <>
                {/* <Stack gap={1} sx={{ display: "flex" }}> */}
                <Skeleton
                  width="9rem"
                  variant="text"
                  sx={{ fontSize: "1.2rem" }}
                />
                <Skeleton
                  width="15rem"
                  variant="text"
                  sx={{ fontSize: "1.2rem" }}
                />
                {/* </Stack> */}
              </>
            ) : (
              <>
                <span className="head">Border Countries&nbsp; :</span>

                <span className="brdr">
                  {borders.map((item, i) => {
                    console.log(item.fullNames[0].name);
                    return (
                      <Link key={item + i} to={`/detail/${item.cca3}`}>
                        <div className="divBorder">
                          {item.fullNames[0].name}
                        </div>
                      </Link>
                    );
                  })}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
