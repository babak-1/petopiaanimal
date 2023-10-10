import React from "react";
import style from "./SideBar.module.scss";
import { GrFormClose } from "react-icons/gr";
import { PiChatsCircleFill } from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { LiaRegistered } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../../helper";
import { NavLink, useNavigate } from "react-router-dom";
const SideBar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <div
      className={`${style.container}  ${
        isOpenSidebar ? style.openSidebar : style.closeSidebar
      }`}
    >
      <div className={style.header}>
        <h1>LOGO</h1>
        <div
          onClick={() => setIsOpenSidebar(false)}
          className={style.closeIcon}
        >
          <GrFormClose />
        </div>
      </div>

      <ul className={style.profile}>
        {user ? (
          <>
            {" "}
            <li onClick={logout}>
              <div className={style.icons}>
                <BiLogOut />
              </div>
              <span>Log out</span>
            </li>
            <li
              onClick={() => {
                navigate("/user-profile"), setIsOpenSidebar(false);
              }}
            >
              <div className={style.icons}>
                <AiOutlineUser />
              </div>
              <span>User Profile</span>
            </li>{" "}
          </>
        ) : (
          <>
            {" "}
            <li>
              <div className={style.icons}>
                <FiLogIn />
              </div>
              <span>Log in</span>
            </li>
            <li>
              <div className={style.icons}>
                <LiaRegistered />
              </div>{" "}
              <span>Sign up</span>
            </li>
          </>
        )}
      </ul>

      <ul className="">
        <li>
          <div className={style.icons}>
            <BiSolidHelpCircle />
          </div>
          <span>Yardim</span>
        </li>
      </ul>

      <ul>
        <li>İstifadəçi razılaşması</li>
        <li>Elan yerləşdirmə qaydaları</li>
        <li>Məxfilik siyasəti</li>
        <li>Saytda reklam</li>
        <li>Tam versiya</li>
        <li>
          <PiChatsCircleFill /> <span>Bizimlə əlaqə</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
