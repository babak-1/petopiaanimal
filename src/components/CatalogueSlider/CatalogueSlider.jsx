import React from "react";
import style from "./CatalogueSlider.module.scss";
import { GrCatalog } from "react-icons/gr";
import useFetch from "../../hooks/useFetch";

const CatalogueSlider = () => {
  // const categories = useFetch(`api/categories`);
  const categories = useFetch(
    "/api/categories/getcategorieswithannouncementscount"
  );
  return (
    <ul className={style.container}>
      <li className={style.categoryList}>
        <div className={style.cardImageCont}>
          <GrCatalog />
        </div>
        <span className={style.categoryName}>Kataloq</span>
      </li>

      {categories?.response?.map((category) => (
        <li key={category?.categoryDTO.id} className={style.categoryList}>
          <div className={style.cardImageCont}>
            <img
              src={category?.categoryDTO?.displayImageUrl}
              alt=""
              className={style.cardImage}
            />
            <div className={style.announceCount}>
              {category?.announcementCount}
            </div>{" "}
          </div>
          <span
            className={style.categoryName}
            title={category?.categoryDTO?.name}
          >
            {category?.categoryDTO?.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CatalogueSlider;
