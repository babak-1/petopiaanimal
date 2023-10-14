import React, { useState, useEffect } from "react";
import style from "./CreateAnnounce.module.scss";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import ClockLoader from "react-spinners/ClockLoader";

const CreateAnnounce = () => {
  const { response: categories, loading } = useFetch(
    "/api/categories/getcategorieswithbreeds"
  );

  const { response: allCities } = useFetch("/api/cities");

  const [categoryId, setCategoryId] = useState("1");

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    const firstBreedId = categories?.find(
      (cat) => cat.id === parseInt(categoryId)
    )?.breeds[0]?.id;
    setValue("breedId", firstBreedId);
  }, [categoryId, categories, setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  if (loading) {
    return (
      <div className={style.loadingCont}>
        <ClockLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h3 className={style.headding}>Create Announce</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <input
          type="text"
          {...register("name")}
          placeholder="name"
          className={`${style.input} ${style.nameInput}`}
        />
        <input
          type="text"
          className={`${style.contentInput} ${style.input}`}
          placeholder="Vacib meqamlari qeyd et"
          {...register("content")}
        />
        <select
          {...register("categoryId")}
          onChange={(e) => setCategoryId(e.target.value)}
          className={style.select}
        >
          {categories?.map((cat) => (
            <option key={cat?.id} value={cat?.id} className={style.options}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          {...register("breedId")}
          onChange={(e) => setValue("breedId", e.target.value)}
          className={style.select}
        >
          {categories
            .find((cat) => cat?.id === parseInt(categoryId))
            .breeds?.map((breed) => (
              <option
                key={breed?.id}
                value={breed?.id}
                className={style.options}
              >
                {breed?.name}
              </option>
            ))}
        </select>
        <select {...register("cityId")} className={style.select}>
          {allCities?.map((city) => (
            <option key={city?.id} value={city?.id} className={style.options}>
              {city.name}
            </option>
          ))}
        </select>
        <button type="submit" className={style.btn}>
          Davam et
        </button>
      </form>
    </div>
  );
};

export default CreateAnnounce;
