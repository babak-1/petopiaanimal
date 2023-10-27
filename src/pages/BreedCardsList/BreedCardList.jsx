import React from "react";
import style from "./BreedCardList.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
import ClockLoader from "react-spinners/ClockLoader";

const BreedCardList = () => {
  const breedId = useParams().id;

  const { response, loading } = useFetch(
    `/api/announcements/getbybreed?breedId=${breedId}`
  );

  if (response?.length == 0) {
    return (
      <div className={style.empty}>
        Seçdiyiniz kateqoriyaya uyğun elan yoxdur
      </div>
    );
  }

  if (loading) {
    return (
      <div className={style.loadingCont}>
        <ClockLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h2>Elanlar</h2>
      <div className={style.cardList}>
        {response?.map((announce) => (
          <AnnounceCard announce={announce} key={announce?.id} />
        ))}
      </div>
    </div>
  );
};

export default BreedCardList;
