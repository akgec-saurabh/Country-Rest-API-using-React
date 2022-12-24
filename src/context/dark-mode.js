import React, { useEffect, useState } from "react";

const DarkMode = React.createContext({
  darkModeBtn: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = (props) => {
  const [darkModeBtn, setDarkModeBtn] = useState(false);

  useEffect(() => {
    setDarkModeBtn(JSON.parse(localStorage.getItem("dark")));
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem("dark", !darkModeBtn);
    setDarkModeBtn(!darkModeBtn);
  };

  return (
    <DarkMode.Provider value={{ darkModeBtn, toggleDarkMode }}>
      {props.children}
    </DarkMode.Provider>
  );
};

export default DarkMode;
