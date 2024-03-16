import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context, useTheme } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  
  const { setImageSearch, setNews,
     selectedMenu, setSelectedMenu } = useTheme();

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  useEffect(()=>{
    return ()=>setNews(false)
  },[])

  const clickHandler = (menu) => {
    let isTypeImage = menu.name === "Images";
    let isTypeNews = menu.name === "News";
    console.log(isTypeImage);
    setSelectedMenu(menu.name);
    setNews(isTypeNews ? true : false);
    setImageSearch(isTypeImage ? true : false);
  };

  return (
    <div
      className="p-[25px] pb-0 md:pr-5 md:pl-20
         md:pt-7 border-b border-[#bebebb] 
         flex md-block flex-col sticky top-0 bg-white"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              src={Logo}
              className="hidden md:block  w-[92px] mr-10"
              alt="Google logo"
            />
          </Link>
          <SearchInput from="searchResult" />
        </div>

        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex  ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <span
            className={`flex items-center justify-center relative p-3 mb-2  rounded-3xl 
                text-[#5f6368] cursor-pointer ${
                  selectedMenu === menu.name ? "text-[#000000] bg-black/10" : ""
                }`}
            onClick={() => clickHandler(menu)}
            key={index}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>

            <span className="text-sm">{menu.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
