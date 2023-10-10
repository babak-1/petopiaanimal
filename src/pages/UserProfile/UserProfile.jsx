import React from "react";
import style from "./UserProfile.module.scss";
import useFetch from "../../hooks/useFetch";
import { AiOutlineUser } from "react-icons/ai";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";

const UserProfile = () => {
  const userProfile = useFetch("/api/users/profile").response;
  console.log(userProfile);
  return (
    <div className={style.container}>
      <div className={style.infoCont}>
        <div className={style.profilPhoto}>
          <AiOutlineUser />
        </div>

        <h3 className={style.userFullname}>
          {userProfile?.firstName} {userProfile?.lastName}
        </h3>
        <h5 className={style.username}>@{userProfile?.username}</h5>
        <h5 className={style.emailName}>{userProfile?.email}</h5>
      </div>

      <div className={style.userAnnounceCont}>
        {userProfile?.announcements.length === 0 ? (
          <div className={style.empty}>Elanınız yoxdur</div>
        ) : (
          <div className={style.announcements}>
            <h4>Elanlariniz</h4>
            {userProfile?.announcements.map((announce) => {
              <AnnounceCard key={announce?.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
