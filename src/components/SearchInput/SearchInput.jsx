import React from "react";
import style from "./SearchInput.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearchHeart } from "react-icons/bs";
const SearchInput = () => {
  return (
    <div className={style.searchesContainer}>
      <form action="" className={style.citySearchCont}>
        <div className={style.searchIcons}>
          <IoIosArrowDown />
        </div>
        <input
          type="text"
          placeholder="City"
          disabled
          className={style.cityInput}
        />
      </form>

      <form action="" className={style.categorySearchCont}>
        <div className={style.searchIcons}>
          <BsSearchHeart />
        </div>
        <input type="text" placeholder="Category" />
      </form>
    </div>
  );
};

export default SearchInput;
