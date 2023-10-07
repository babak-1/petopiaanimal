import React, { useEffect } from "react";
import "./Login.scss";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/user";

const Login = () => {
  const [toggle1, settToggle1] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    dispatch(getUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerHeading">LOG IN</h1>

        <div className="registerLabelInputGroups">
          <label className="registerLabels">Username</label>
          <input
            className="registerInputs"
            {...register("username", {
              required: "Username qeyd edin",
            })}
            type="text"
            placeholder="nümunə"
          />
          {errors.username && (
            <span className="registerErrMsg">{errors.username.message}</span>
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
          {error && <span className="registerErrMsg">{error}</span>}
          <span onClick={() => settToggle1(!toggle1)} className="registerEyes">
            {toggle1 ? <FaEyeSlash /> : <AiFillEye />}
          </span>
        </div>

        <input
          type="submit"
          className="registerSbmtBtn"
          value="LOG IN"
          disabled={loading}
        />

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
