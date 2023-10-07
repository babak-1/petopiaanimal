import React, { useState } from "react";
import style from "./CatalogueSlider.module.scss";
import { GrCatalog } from "react-icons/gr";
import useFetch from "../../hooks/useFetch";
import CatalogueSide from "../CatalogueSide/CatalogueSide";

const CatalogueSlider = () => {
  const [openSide, setOpenSide] = useState(false);
  const categories = useFetch(
    "/api/categories/getcategorieswithannouncementscount"
  );
  const allCategories = useFetch("/api/categories/getcategorieswithbreeds");
  return (
    <>
      <ul className={style.container}>
        <li className={style.categoryList} onClick={() => setOpenSide(true)}>
          <div className={style.cardImageCont}>
            <GrCatalog />
          </div>
          <span className={style.categoryName}>Kataloq</span>
        </li>

        {allCategories?.response?.map((category) => (
          <li key={category?.id} className={style.categoryList}>
            <div className={style.cardImageCont}>
              <img
                src={category?.displayImageUrl}
                alt=""
                className={style.cardImage}
              />
              <div className={style.announceCount}>
                {category?.announcementCount}
              </div>{" "}
            </div>
            <span className={style.categoryName} title={category?.name}>
              {category?.name}
            </span>
          </li>
        ))}
      </ul>
      <CatalogueSide
        openSide={openSide}
        setOpenSide={setOpenSide}
        allCategories={allCategories}
      />
    </>
  );
};

export default CatalogueSlider;
