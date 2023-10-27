import React from "react";
import style from "./UserProfile.module.scss";
import useFetch from "../../hooks/useFetch";
import { AiOutlineUser } from "react-icons/ai";
import AnnounceCard from "../../components/AnnounceCard/AnnounceCard";
import ClockLoader from "react-spinners/ClockLoader";
import { AiFillDelete } from "react-icons/ai";
import { axiosPrivate } from "../../api/api";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { response, loading } = useFetch("/api/users/profile");
  const announces = useFetch(`/api/announcements/getbyuser/${user?.id}`);

  const handleDelete = async (id) => {
    try {
      const res = await axiosPrivate.delete(`/api/announcements/${id}`);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
        {announces?.response?.length === 0 ? (
          <div className={style.empty}>Elanınız yoxdur</div>
        ) : (
          <div className={style.announcements}>
            <h4>Elanlariniz :</h4>
            <div className={style.announcementsList}>
              {announces?.response?.map((announce) => (
                <div className={style.cardCont}>
                  <AnnounceCard key={announce?.id} announce={announce} />
                  <AiFillDelete
                    className={style.deleteIcon}
                    onClick={() => handleDelete(announce?.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
