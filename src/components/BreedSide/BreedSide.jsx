import React from "react";
import style from "./BreedSide.module.scss";
import { GrFormClose } from "react-icons/gr";
import useFetch from "../../hooks/useFetch";

const BreedSide = ({ breedOpenSide, setBreedOpenSide, breeds }) => {
  if (breeds?.length === 0) {
    setBreedOpenSide(false);
  }
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
          <li key={category?.id} className={style.categoryList}>
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
