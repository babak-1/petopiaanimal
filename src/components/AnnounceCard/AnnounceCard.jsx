import React from "react";
import style from "./AnnounceCard.module.scss";
import img1 from "../../assets/KOA_Nassau_2697x1517.jpg";
const AnnounceCard = () => {
  return (
    <div className={style.container}>
      <img src={img1} alt="" className={style.cardImage} />

      <div className={style.cardInfo}>
        <p className={style.cityName}>Mingecevir</p>
        <h4 className={style.name}>Maine Coon</h4>
      </div>
    </div>
  );
};

export default AnnounceCard;
