import React from "react";
import style from "./BreedSide.module.scss";
import { GrFormClose } from "react-icons/gr";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BreedSide = ({ breedOpenSide, setBreedOpenSide, breeds }) => {
  const navigate = useNavigate();
  if (breeds?.length === 0) {
    setBreedOpenSide(false);
  }

  const handleBreedSide = (id) => {
    const selectedBreed = breeds?.find((breed) => breed.id === id);
    navigate(`/breed-cards-list/${selectedBreed?.id}`);
  };

  console.log("selectBreed", breeds);
  return (
    <div
      className={`${style.container}  ${
        breedOpenSide ? style.openSidebar : style.closeSidebar
      }`}
    >
      <div className={style.header}>
        <div className={style.icon}>
          <GrFormClose onClick={() => setBreedOpenSide(false)} />
        </div>

        <h3 className={style.text}>Kataloq</h3>
      </div>

      <ul className={style.listsContainer}>
        {breeds?.map((category) => (
          <li
            key={category?.id}
            className={style.categoryList}
            onClick={() => handleBreedSide(category?.id)}
          >
            <span className={style.categoryName} title={category?.name}>
              {category?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreedSide;
