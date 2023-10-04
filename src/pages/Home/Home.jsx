import React from "react";
import useFetch from "../../hooks/useFetch";

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

  return <div>Home</div>;
};

export default Home;
