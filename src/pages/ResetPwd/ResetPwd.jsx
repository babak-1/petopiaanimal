import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
const ResetPwd = () => {
  const [toggle1, settToggle1] = useState(false);
  const [toggle2, settToggle2] = useState(false);
  let password;
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
    <div className="registerContainer" style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="registerHeading">Reset Your Password</h1>

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
            placeholder="Yeni parolunuzu qeyd edin"
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
            placeholder="Yeni parolunuzu təkrar qeyd edin"
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

        <input
          type="submit"
          className="registerSbmtBtn"
          value="Change Password"
        />
      </form>
    </div>
  );
};

export default ResetPwd;
