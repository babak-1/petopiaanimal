import React, { useState, useEffect } from "react";
import style from "./CreateAnnounce.module.scss";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";

const CreateAnnounce = () => {
  // usestate
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectBreed, setSelectBreed] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [breeds, setBreeds] = useState([]);

  // fetch
  const allCategories = useFetch(
    "/api/categories/getcategorieswithbreeds"
  ).response;

  const allCities = useFetch("/api/cities").response;

  useEffect(() => {
    if (selectCategory) {
      const selectedCategory = allCategories.find(
        (category) => category.id == selectCategory
      );
      if (selectedCategory) {
        setBreeds(selectedCategory.breeds);
      }
    } else {
      setBreeds([]);
    }
  }, [selectCategory, allCategories]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log
  console.log("active kateqori id", selectCategory);
  console.log("active alt kateqori id", selectBreed);
  console.log("active seher", selectCity);

  return (
    <div className={style.container}>
      <form>
        <h3>Create Announce</h3>
        <ul>
          <li>
            <input
              type="text"
              {...register("username", {
                required: "Username qeyd edin",
              })}
              placeholder="name"
            />
          </li>
          <li>
            <input
              type="text"
              className={`${style.contentInput}`}
              placeholder="Vacib meqamlari qeyd et"
            />
          </li>
          <li>
            <select
              name="breeds"
              id="breeds"
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              {allCategories?.map((category) => (
                <option key={category?.id} value={category?.id}>
                  {category?.name}
                </option>
              ))}
            </select>
          </li>

          <li>
            <select
              name="breeds"
              id="breeds"
              onChange={(e) => setSelectBreed(e.target.value)}
            >
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </li>
          <li>
            <select
              name="cities"
              id="cities"
              onChange={(e) => setSelectCity(e.target.value)}
            >
              {allCities?.map((city) => (
                <option key={city?.id} value={city?.id}>
                  {city?.name}
                </option>
              ))}
            </select>
          </li>
          <li></li>
        </ul>
        <button onClick={handleSubmit(onSubmit)}>Davam et</button>
      </form>
    </div>
  );
};

export default CreateAnnounce;
