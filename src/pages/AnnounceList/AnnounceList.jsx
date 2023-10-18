import React, { useEffect } from "react";
import style from "./AnnounceList.module.scss";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
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

  return <div>AnnounceList</div>;
};

export default AnnounceList;
