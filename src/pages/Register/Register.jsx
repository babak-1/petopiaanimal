import { useEffect, useState, useRef } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";

// const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const USER_REGEX =
  /^[A-Za-zƏəĞğIıİiÖöŞşÜüÇç][A-Za-zƏəĞğIıİiÖöŞşÜüÇç0-9_]{2,9}$/;

const Register = () => {
  const [toggle1, settToggle1] = useState(false);
  const [toggle2, settToggle2] = useState(false);

  const emailInputRef = useRef("");
  let password;

  const handleButtonClick = () => {
    const emailValue = emailInputRef.current.value;
    console.log("Girilen mail", emailValue);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerHeading">SIGN UP</h1>
        <div className="registerLabelInputGroups">
          <label htmlFor="username" className="registerLabels">
            Ad
          </label>
          <input
            className="registerInputs"
            {...register("username", {
              required: "Adınızı qeyd edin",
              pattern: {
                value: USER_REGEX,
                message:
                  "İstifadəçi adı qaydaları. (Başlanğıcda simvol hərf olmalıdır,ümumilikdə isə hərf,rəqəm və alt xətt '_'  ola bilər, 3simvoldan az və 10 simvoldan çox olmamalıdır.)",
              },
            })}
            type="text"
            placeholder="Adınızı daxil edin"
            id="username"
          />
          {errors.username && (
            <span className="registerErrMsg">{errors.username.message}</span>
          )}
        </div>

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
            ref={emailInputRef}
            type="email"
            placeholder="nümunə@gmail.com"
          />
          {errors.email && (
            <span className="registerErrMsg">{errors.email.message}</span>
          )}

          <button onClick={handleButtonClick}>click</button>
        </div>

        <div className="registerLabelInputGroups">
          <label className="registerLabels">Mobil nömrə</label>
          <InputMask
            className="registerInputs"
            mask="999 999 99 99"
            maskChar={null}
            placeholder="055 555 55 55"
            {...register("phone", {
              required: "Nömrənizi qeyd edin",
              minLength: {
                value: 13,
                message: "Nömrə düzgün qeyd olunmayıb",
              },
            })}
          ></InputMask>
          {errors.phone && (
            <span className="registerErrMsg">{errors.phone.message}</span>
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

        <div className="registerLabelInputGroups">
          <label htmlFor="cpassword" className="registerLabels">
            Confirm Password
          </label>
          <input
            className="registerInputs"
            type={toggle2 ? "text" : "password"}
            placeholder="Parolunuzu qeyd edin"
            id="cpassword"
            {...register("cpassword", {
              required: "Parolunuzu qeyd edin",
              validate: (val) => {
                if (watch("password") != val) {
                  console.log("uygun deyil");
                  return "Parolunuz uyğun deyil";
                }
              },
            })}
          />
          {errors.cpassword && (
            <span className="registerErrMsg">{errors.cpassword.message}</span>
          )}
          <span onClick={() => settToggle2(!toggle2)} className="registerEyes">
            {toggle2 ? <FaEyeSlash /> : <AiFillEye />}
          </span>
        </div>

        <input type="submit" className="registerSbmtBtn" value="SIGN UP" />

        <p className="registerToLogin">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
