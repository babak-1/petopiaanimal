import React from "react";
import { useForm } from "react-hook-form";

const ForgotPwdMail = () => {
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
        <h1
          className="registerHeading"
          style={{ textAlign: "start", fontSize: "30px", width: "200px" }}
        >
          Forgot Your Password?
        </h1>

        <p>
          To reset your password, please enter your email below. Password reset
          instructions will be sent to the email address associated with your
          account.
        </p>
        <div
          className="registerLabelInputGroups"
          style={{ height: "70px", marginTop: "25px" }}
        >
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

        <input type="submit" className="registerSbmtBtn" value="SUBMIT" />
      </form>
    </div>
  );
};

export default ForgotPwdMail;
