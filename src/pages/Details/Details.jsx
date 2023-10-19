import React from "react";
import style from "./Details.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";
const Details = () => {
  const announceId = useParams().id;
  const { response, loading } = useFetch(`/api/announcements/${announceId}`);

  console.log("detail", response);

  const photos = useFetch(
    `/api/photos/getbyphotogroup?photoGroupId=${response?.photoGroupId}`
  );

  const allCategories = useFetch(
    "/api/categories/getcategorieswithbreeds"
  ).response;

  const cities = useFetch("/api/cities").response;

  const cityName = cities?.find((city) => city?.id == response?.cityId);

  const categoryName = allCategories?.find((res) =>
    res?.breeds?.find((breed) => breed?.id == response?.breedId)
  );

  const breedName = categoryName?.breeds?.find(
    (breed) => breed?.id == response?.breedId
  );

  return (
    <div className={style.container}>
      <div className={style.sliderPart}>
        <PhotoSlider photos={photos} />
      </div>
      <div className={style.infoPart}>
        <div className={style.nameAndContent}>
          <h3>{response?.name}</h3>
          <p>{response?.content}</p>
        </div>

        <div className={style.otherInfo}>
          <ul>
            <li>Şəhər:</li>
            <li>Kateqoriya:</li>
            <li>Alt Kateqoriya:</li>
          </ul>

          <ul className={style.otherInfoUl}>
            <li>{cityName?.name}</li>
            <li>{categoryName?.name}</li>
            <li>{breedName?.name}</li>
          </ul>
        </div>

        <div className={style.mobileNumber}>
          <h3>Murad</h3>
          <p>0552325643</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
