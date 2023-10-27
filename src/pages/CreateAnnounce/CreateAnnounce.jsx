import React, { useState, useEffect, useRef } from "react";
import style from "./CreateAnnounce.module.scss";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import ClockLoader from "react-spinners/ClockLoader";
import useBase64 from "../../hooks/useBase64";
import axios from "axios";
import { axiosPrivate } from "../../api/api";
import { useNavigate } from "react-router-dom";

const CreateAnnounce = () => {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const { response: categories, loading } = useFetch(
    "/api/categories/getcategorieswithbreeds"
  );

  const { response: allCities } = useFetch("/api/cities");
  const [categoryId, setCategoryId] = useState("1");

  const { base64Array, handleFileSelect } = useBase64();

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
    const announce = {
      name: data.name,
      content: data.content,
      categoryId: data.categoryId,
      breedId: data.breedId,
      cityId: data.cityId,
      imagePathes: base64Array,
    };

    async function createAnnounce(data) {
      console.log(data);
      try {
        await axiosPrivate.post("/api/announcements", data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    createAnnounce(announce);
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
        <input
          ref={fileInput}
          {...register("images", { required: true })}
          type="file"
          multiple
          onChange={handleFileSelect}
        />
        <div>
          {base64Array.map((item, index) => (
            <img src={item} alt="" key={index} />
          ))}
        </div>
        <button type="submit" className={style.btn}>
          Davam et
        </button>
      </form>
    </div>
  );
};

export default CreateAnnounce;
