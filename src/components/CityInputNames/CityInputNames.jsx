import React from "react";
import style from "./CityInputName.module.scss";
import useFetch from "../../hooks/useFetch";
import DotLoader from "react-spinners/DotLoader";
import { useNavigate } from "react-router-dom";

const CityInputNames = ({ setSelectedCity, setIsOpenCity }) => {
  const cities = useFetch("api/cities");
  console.log("seherler", cities);
  const navigate = useNavigate();

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

    navigate(`/announce-list`);
  };

  return (
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
  );
};

export default CityInputNames;
