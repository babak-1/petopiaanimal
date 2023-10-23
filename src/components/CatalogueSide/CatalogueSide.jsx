import React, { useState, useEffect, useRef } from "react";
import style from "./CatalogueSide.module.scss";
import { GrFormClose } from "react-icons/gr";
import BreedSide from "../BreedSide/BreedSide";
import { useNavigate } from "react-router-dom";

const CatalogueSide = ({ openSide, setOpenSide, allCategories }) => {
  const [breedOpenSide, setBreedOpenSide] = useState(false);
  const [breeds, setBreeds] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  console.log("breedsName", breeds);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        setBreedOpenSide(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleBreedSide = (id) => {
    setBreedOpenSide(true);
    const subCategory = allCategories?.response?.find(
      (category) => category.id === id
    );
    console.log("sublength", subCategory?.breeds);
    setBreeds(subCategory?.breeds);

    if (subCategory?.breeds.length === 0) {
      navigate(`/cards-list/${subCategory?.id}`);
    }
  };

  return (
    <>
      <div
        className={`${style.container}  ${
          openSide ? style.openSidebar : style.closeSidebar
        }`}
        ref={sliderRef}
      >
        <div className={style.header}>
          <div className={style.icon}>
            <GrFormClose onClick={() => setOpenSide(false)} />
          </div>

          <h3 className={style.text}>Kataloq</h3>
        </div>

        <ul className={style.listsContainer}>
          {allCategories?.response?.map((category) => (
            <li
              key={category?.id}
              className={style.categoryList}
              onClick={() => {
                handleBreedSide(category?.id);
              }}
            >
              <div className={style.cardImageCont}>
                <img
                  src={category?.displayImageUrl}
                  alt=""
                  className={style.cardImage}
                />
              </div>
              <span className={style.categoryName} title={category?.name}>
                {category?.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <BreedSide
        breedOpenSide={breedOpenSide}
        setBreedOpenSide={setBreedOpenSide}
        breeds={breeds}
      />
    </>
  );
};

export default CatalogueSide;
