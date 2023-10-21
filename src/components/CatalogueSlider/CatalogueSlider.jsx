import React, { useRef, useState, useEffect } from "react";
import style from "./CatalogueSlider.module.scss";
import { GrCatalog } from "react-icons/gr";
import useFetch from "../../hooks/useFetch";
import CatalogueSide from "../CatalogueSide/CatalogueSide";
import { useNavigate } from "react-router-dom";

const CatalogueSlider = () => {
  const navigate = useNavigate();
  const [openSide, setOpenSide] = useState(false);

  const allCategories = useFetch("/api/categories/getcategorieswithbreeds");

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        setOpenSide(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (allCategories.loading) {
    return (
      <>
        <ul className={style.container}>
          {[
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
            "kateqori",
          ].map((category, index) => (
            <li key={index} className={style.categoryList}>
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
              <span
                className={style.categoryName}
                title={category?.name}
              ></span>
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <>
      <ul className={style.container} ref={sliderRef}>
        <li className={style.categoryList} onClick={() => setOpenSide(true)}>
          <div className={style.cardImageCont}>
            <GrCatalog />
          </div>
          <span className={style.categoryName}>Kataloq</span>
        </li>

        {allCategories?.response?.map((category) => (
          <li
            key={category?.id}
            className={style.categoryList}
            title={category?.name}
            onClick={() => navigate(`/cards-list/${category?.id}`)}
          >
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
            <span className={style.categoryName}>{category?.name}</span>
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
