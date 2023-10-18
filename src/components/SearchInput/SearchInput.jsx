import React, { useEffect, useState } from "react";
import style from "./SearchInput.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsSearchHeart } from "react-icons/bs";
import CityInputNames from "../CityInputNames/CityInputNames";
const SearchInput = () => {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className={style.searchesContainer}>
      <form action="" className={style.citySearchCont}>
        <div className={style.searchIcons}>
          {isOpenCity ? (
            <IoIosArrowUp onClick={() => setIsOpenCity(false)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsOpenCity(true)} />
          )}
        </div>
        <input
          type="text"
          placeholder="City"
          disabled
          className={style.cityInput}
          value={selectedCity ? selectedCity : ""}
        />
        {isOpenCity ? (
          <CityInputNames
            setSelectedCity={setSelectedCity}
            setIsOpenCity={setIsOpenCity}
          />
        ) : (
          ""
        )}
      </form>

      <form action="" className={style.categorySearchCont}>
        <div className={style.searchIcons}>
          <BsSearchHeart />
        </div>
        <input type="text" placeholder="Search" />
      </form>

      <button className={style.btn}>Axtar</button>
    </div>
  );
};

export default SearchInput;
