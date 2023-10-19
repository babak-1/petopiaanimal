import React from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Home.module.scss";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

const Home = () => {
  const navigate = useNavigate();
  const { response, loading } = useFetch("/api/announcements?page=1");
  console.log(response);

  if (loading) {
    return (
      <div className={style.loadingCont}>
        <ClockLoader color="#36d7b7" />
      </div>
    );
  }

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
