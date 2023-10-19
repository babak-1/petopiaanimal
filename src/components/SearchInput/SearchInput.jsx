import React, { useEffect, useState } from "react";
import style from "./SearchInput.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsSearchHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const SearchInput = () => {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [text, setText] = useState("");
  console.log("txt", text);

  //
  const cities = useFetch("api/cities");
  console.log("seherler", cities);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // setText(e.target.value);

    const search = JSON.parse(localStorage.getItem("search"));

    const newSearch = {
      ...search,
      query: e.target.value,
    };

    localStorage.setItem("search", JSON.stringify(newSearch));
  };

  const iconSyle = {
    width: "100%",
    height: "90px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleCityClick = (city) => {
    setIsOpenCity(false);
    setSelectedCity(city?.name);
    const search = JSON.parse(localStorage.getItem("search"));

    const newSearch = {
      ...search,
      city: city.id,
    };

    localStorage.setItem("search", JSON.stringify(newSearch));
  };

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
          <div className={style.container}>
            <ul>
              {cities.loading ? (
                <div style={iconSyle}>
                  <DotLoader color="#36d7b7" size={50} />
                </div>
              ) : (
                cities?.response?.map((city) => {
                  return (
                    <li key={city.id} onClick={() => handleCityClick(city)}>
                      {city?.name}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
      </form>

      <form action="" className={style.categorySearchCont}>
        <div className={style.searchIcons}>
          <BsSearchHeart />
        </div>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </form>

      <button className={style.btn} onClick={() => navigate("/announce-list")}>
        Axtar
      </button>
    </div>
  );
};

export default SearchInput;
