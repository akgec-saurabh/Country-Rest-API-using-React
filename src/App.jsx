import { Navigate, Route, Routes } from "react-router-dom";
import CountryList from "./pages/CountryList/CountryList";
import React, { useContext } from "react";
import Header from "./components/Layouts/Header/Header";
import "./App.scss";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import DarkMode from "./context/dark-mode";

function App() {
  const ctx = useContext(DarkMode);

  return (
    <div className={`app ${ctx.darkModeBtn ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/detail/:cid" element={<CountryDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
