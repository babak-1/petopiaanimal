import React from "react";
import style from "./UserProfile.module.scss";
import useFetch from "../../hooks/useFetch";
import { AiOutlineUser } from "react-icons/ai";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
import ClockLoader from "react-spinners/ClockLoader";

const UserProfile = () => {
  const { response, loading } = useFetch("/api/users/profile");
  const announces = useFetch("/api/announcements");
  console.log("user", response);
  console.log("announces", announces);

  if (loading) {
    return (
      <div className={style.loadingCont}>
        <ClockLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.infoCont}>
        <div className={style.profilPhoto}>
          <AiOutlineUser />
        </div>

        <h3 className={style.userFullname}>
          {response?.firstName} {response?.lastName}
        </h3>
        <h5 className={style.username}>@{response?.username}</h5>
        <h5 className={style.emailName}>{response?.email}</h5>
      </div>

      <div className={style.userAnnounceCont}>
        {response?.announcements.length === 0 ? (
          <div className={style.empty}>Elanınız yoxdur</div>
        ) : (
          <div className={style.announcements}>
            <h4>Elanlariniz</h4>
            {response?.announcements.map((announce) => {
              <AnnounceCard key={announce?.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
