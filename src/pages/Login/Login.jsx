import React from "react";
import "./Login.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [toggle1, settToggle1] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="registerContainer" style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerHeading">LOG IN</h1>

        <div className="registerLabelInputGroups">
          <label className="registerLabels">E-mail</label>
          <input
            className="registerInputs"
            {...register("email", {
              required: "Emailinizi qeyd edin",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email düzgün qeyd olunmayıb",
              },
            })}
            type="email"
            placeholder="nümunə@gmail.com"
          />
          {errors.email && (
            <span className="registerErrMsg">{errors.email.message}</span>
          )}
        </div>

        <div className="registerLabelInputGroups">
          <label htmlFor="password" className="registerLabels">
            Parolunuz
          </label>
          <input
            className="registerInputs"
            {...register("password", {
              required: "Parolunuzu qeyd edin",
              minLength: {
                value: 4,
                message: "Simvol sayı 4-dən çox olmalıdır",
              },
            })}
            type={toggle1 ? "text" : "password"}
            placeholder="Parolunuzu qeyd edin"
            id="password"
          />
          {errors.password && (
            <span className="registerErrMsg">{errors.password.message}</span>
          )}
          <span onClick={() => settToggle1(!toggle1)} className="registerEyes">
            {toggle1 ? <FaEyeSlash /> : <AiFillEye />}
          </span>
        </div>

        <input type="submit" className="registerSbmtBtn" value="LOG IN" />

        <Link
          style={{ textAlign: "center", padding: "10px 0px" }}
          to={"/forgot-pwd-mail"}
        >
          Forgot password?
        </Link>

        <p className="registerToLogin">
          Need an account? <Link to={"/register"}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
