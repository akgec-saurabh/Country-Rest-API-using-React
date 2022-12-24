import { ArrowBackIosNew, HomeOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./DetailNav.scss";

const DetailNav = () => {
  const history = useNavigate();

  return (
    <div className="detail_nav">
      <div onClick={() => history(-1)} className="back">
        <ArrowBackIosNew className="icon" />
        <span>Back</span>
      </div>
      <Link className="home" to="/">
        <HomeOutlined className="icon" />
        <span>Home</span>
      </Link>
    </div>
  );
};
export default DetailNav;
