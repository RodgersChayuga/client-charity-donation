import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, moon, sun } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
import Tooltip from "./ToolTip";

const Icon = ({
  styles = "",
  name = "",
  imgUrl = "",
  isActive = false,
  disabled = false,
  handleClick = () => { },
}) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px]  ${isActive && "bg-red-400"
      } flex justify-center items-center  ${!disabled && "cursor-pointer "
      } ${!disabled && !isActive && "hover:border-2 hover:border-[#4acd8d]"} ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt={name}
      className={`
        w-1/2 h-1/2 
        transition-all duration-200
        ${isActive ? 'brightness-100' : 'brightness-75 dark:brightness-50'}
      `}
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const { address } = useStateContext();

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  const handleNavigation = useCallback((link) => {
    if (!link.disabled) {
      setIsActive(link.name);
      navigate(link.link);
    }
  }, [navigate]);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <img className="w-[52px] h-[52px] " src={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#ffffff] dark:bg-gray-900 rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => {
            if (link.name === "logout" && !address) return null;

            return (
              <Tooltip message={link.name} navLink={link.disabled}>
                <Icon
                  key={link.name}
                  {...link}
                  isActive={location.pathname === link.link}
                  handleClick={() => handleNavigation(link)}
                />
              </Tooltip>
            );
          })}
        </div>

        <Icon
          styles={`bg-black dark:bg-white rounded-full hover:shadow-lg ${isDarkMode ? 'rotate-[-180]' : ''
            }`}
          imgUrl={isDarkMode ? moon : sun}
          handleClick={toggleTheme}
          name="theme-toggle"
        />
      </div>
    </div>
  );
};

export default Sidebar;
