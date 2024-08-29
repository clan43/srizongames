import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  //   useEffect(() => {
  //     console.log(theme);
  //   }, []);
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-orange-400 p-2 w-full items-center mx-5 rounded-full">
        <IoSearch />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search Game"
        />
      </div>
      <div>
        {theme == "light" ? (
          <IoIosMoon
            size={35}
            className="bg-slate-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            cursor={"pointer"}
          />
        ) : (
          <IoSunny
            size={35}
            className="bg-slate-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            cursor={"pointer"}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
