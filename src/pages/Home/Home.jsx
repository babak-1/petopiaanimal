import React from "react";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const user = useFetch(`api/users/profile`);
  const categories = useFetch(`api/categories`);

  console.log(user);
  console.log(categories);

  return <div>Home</div>;
};

export default Home;
