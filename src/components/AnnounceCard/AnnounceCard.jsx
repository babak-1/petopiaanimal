import React from "react";
import style from "./AnnounceCard.module.scss";
import img1 from "../../assets/KOA_Nassau_2697x1517.jpg";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const AnnounceCard = ({ announce }) => {
  const navigate = useNavigate();

  const { response, loading } = useFetch("api/cities");
  const photos = useFetch(
    `/api/photos/getbyphotogroup?photoGroupId=${announce?.photoGroupId}`
  );
  console.log("anason", announce);

  console.log("seherler", response);
  const cityName = response?.find((res) => res?.id == announce?.cityId);
  return (
    <div
      className={style.container}
      onClick={() => navigate(`announce-details/${announce.id}`)}
    >
      <img
        src={photos?.response?.[0]?.url}
        alt=""
        className={style.cardImage}
      />

      <div className={style.cardInfo}>
        <p className={style.cityName}>{cityName?.name}</p>
        <h4 className={style.name}>{announce?.name}</h4>
      </div>
    </div>
  );
};

export default AnnounceCard;
