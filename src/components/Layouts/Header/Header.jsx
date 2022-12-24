import "./Header.scss";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DarkMode from "../../../context/dark-mode";

const Header = () => {
  const navigate = useNavigate();
  const ctx = useContext(DarkMode);
  return (
    <header className="el">
      <nav>
        <h1 onClick={() => navigate("/")}>Where in the world ?</h1>
        <div
          className="dark-mode"
          onClick={() => {
            ctx.toggleDarkMode();
          }}
        >
          {ctx.darkModeBtn ? (
            <DarkModeOutlined className="icon" />
          ) : (
            <LightModeOutlined className="icon" />
          )}

          <span>Dark Mode</span>
        </div>
      </nav>
    </header>
  );
};
export default Header;
