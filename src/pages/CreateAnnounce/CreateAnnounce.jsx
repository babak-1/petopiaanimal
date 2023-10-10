import React, { useState } from "react";
import style from "./CreateAnnounce.module.scss";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";

const CreateAnnounce = () => {
  const allCategories = useFetch("/api/categories/getcategorieswithbreeds");

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
          <li></li>

          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button onClick={handleSubmit(onSubmit)}>Davam et</button>
      </form>
    </div>
  );
};

export default CreateAnnounce;
