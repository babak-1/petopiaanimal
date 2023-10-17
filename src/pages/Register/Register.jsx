import { useEffect, useState, useRef } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

// const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const USER_REGEX =
  /^[A-Za-zƏəĞğIıİiÖöŞşÜüÇç][A-Za-zƏəĞğIıİiÖöŞşÜüÇç0-9_]{2,9}$/;

const Register = () => {
  const [toggle1, settToggle1] = useState(false);
  const [toggle2, settToggle2] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  console.log("emailValue", emailValue);

  let password;

  const handleButtonClick = async () => {
    try {
      await axios.get(
        `http://murad161-001-site1.ctempurl.com/api/users/sendcodetoemailforregister?email=${emailValue}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  password = watch("password", "");

  const onSubmit = async (data) => {
    data.profilePhotoUrl = null;
    try {
      await axios.post(
        "http://murad161-001-site1.ctempurl.com/api/users/register",
        data
      );
    } catch (error) {
      console.log(error);
    } finally {
      console.log(data);
    }
    reset();
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerHeading">SIGN UP</h1>
        <div className="registerLabelInputGroups">
          <label htmlFor="username" className="registerLabels">
            İstifadəçi adı
          </label>
          <input
            className="registerInputs"
            {...register("username", {
              required: "İstifadəçi adınızı qeyd edin",
              pattern: {
                value: USER_REGEX,
                message:
                  "İstifadəçi adı qaydaları. (Başlanğıcda simvol hərf olmalıdır,ümumilikdə isə hərf,rəqəm və alt xətt '_'  ola bilər, 3simvoldan az və 10 simvoldan çox olmamalıdır.)",
              },
            })}
            type="text"
            placeholder="İstifadəçi adınızı daxil edin"
            id="username"
          />
          {errors.username && (
            <span className="registerErrMsg">{errors.username.message}</span>
          )}
        </div>

        <div className="registerLabelInputGroups">
          <label htmlFor="firstName" className="registerLabels">
            Ad
          </label>
          <input
            className="registerInputs"
            {...register("firstName", {
              required: "Adınızı qeyd edin",
              pattern: {
                value: USER_REGEX,
                message:
                  "İstifadəçi adı qaydaları. (Başlanğıcda simvol hərf olmalıdır,ümumilikdə isə hərf,rəqəm və alt xətt '_'  ola bilər, 3simvoldan az və 10 simvoldan çox olmamalıdır.)",
              },
            })}
            type="text"
            placeholder="Adınızı daxil edin"
            id="firstName"
          />
          {errors.firstName && (
            <span className="registerErrMsg">{errors.firstName.message}</span>
          )}
        </div>

        <div className="registerLabelInputGroups">
          <label htmlFor="lastName" className="registerLabels">
            Soyad
          </label>
          <input
            className="registerInputs"
            {...register("lastName", {
              required: "Soyadınızı qeyd edin",
              pattern: {
                value: USER_REGEX,
                message:
                  "İstifadəçi adı qaydaları. (Başlanğıcda simvol hərf olmalıdır,ümumilikdə isə hərf,rəqəm və alt xətt '_'  ola bilər, 3simvoldan az və 10 simvoldan çox olmamalıdır.)",
              },
            })}
            type="text"
            placeholder="Soyadınızı daxil edin"
            id="lastName"
          />
          {errors.lastName && (
            <span className="registerErrMsg">{errors.lastName.message}</span>
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
            onChange={(e) => setEmailValue(e.target.value)}
            type="email"
            placeholder="nümunə@gmail.com"
          />
          {errors.email && (
            <span className="registerErrMsg">{errors.email.message}</span>
          )}

          <button
            className="emailButton"
            onClick={() => {
              handleButtonClick();
            }}
            title="butona klik etdikdə email ünvanına 4 rəqəmli verifikasiya kodu göndəriləcək"
          >
            Click
          </button>
        </div>

        <div className="registerLabelInputGroups">
          <label htmlFor="veritificationCode" className="registerLabels">
            Verifikasiya kodu
          </label>
          <input
            className="registerInputs"
            {...register("veritificationCode", {
              required: "Verifikasiya kodun daxil edin",
              maxLength: {
                value: 4,
              },
            })}
            type="number"
            placeholder="4 rəqəmli kodu daxil edin"
            id="veritificationCode"
          />
          {errors.veriticationCode && (
            <span className="registerErrMsg">
              {errors.veriticationCode.message}
            </span>
          )}
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
                value: 8,
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
