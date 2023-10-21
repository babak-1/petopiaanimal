import React, { useEffect } from "react";
import style from "./AnnounceList.module.scss";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
const AnnounceList = () => {
  const search = JSON.parse(localStorage.getItem("search"));

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    search.city && searchParams.set("city", search.city);
    search.query && searchParams.set("query", search.query);

    setSearchParams(searchParams);
  }, [search.city, search.query, searchParams, setSearchParams]);

  const { response } = useFetch(
    `/api/announcements/getbysearch?${
      searchParams.get("city") && "cityId=" + searchParams.get("city")
    }&${searchParams.get("query") && "text=" + searchParams.get("query")}`
  );

  console.log("response", response);

  if (response?.length == 0) {
    return <div className={style.empty}>Axtarışınıza uyğun elan yoxdur</div>;
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

export default AnnounceList;
