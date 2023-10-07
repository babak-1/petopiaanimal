import React from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Home.module.scss";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";

const Home = () => {
  const user = useFetch(`api/users/profile`);
  const categories = useFetch(`api/categories`);
  const countProduct = useFetch(
    "/api/categories/getcategorieswithannouncementscount"
  );
  const altCategory = useFetch("/api/categories/getcategorieswithbreeds");
  console.log(user);
  console.log("kategory", categories);
  console.log("say kateqori", countProduct);
  console.log("alt category", altCategory);

  return (
    <div className={style.container}>
      <h1 className={style.headding}>Announces</h1>
      <div className={style.cardContainer}>
        <AnnounceCard />
        <AnnounceCard />
        <AnnounceCard />
        <AnnounceCard />
        <AnnounceCard />
      </div>
    </div>
  );
};

export default Home;
