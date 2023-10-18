import React from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Home.module.scss";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { response } = useFetch("/api/announcements?page=1");
  console.log(response);

  return (
    <div className={style.container}>
      <h1 className={style.headding}>Announces</h1>
      <div className={style.cardContainer}>
        {response?.map((announce) => (
          <AnnounceCard announce={announce} key={announce?.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
