import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import SearchInput from "../SearchInput/SearchInput";
import { logout } from "../../helper";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import CatalogueSlider from "../CatalogueSlider/CatalogueSlider";

const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleHome = () => {
    navigate("/");
  };
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  return (
    <div className={style.headerContainer}>
      <SideBar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div
        className={`${style.headerIcons} ${style.hamburgerBtn}`}
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <RxHamburgerMenu />
      </div>
      <h1 className={style.headerLogo} onClick={handleHome}>
        LOGO
      </h1>
      <SearchInput />
      <div className={style.headerIcons}>
        {user ? (
          <>
            <div
              title="Profiliniz"
              className={style.profilIcon}
              onClick={() => {
                navigate("/user-profile"), setIsOpenSidebar(false);
              }}
            >
              <AiOutlineUser />
            </div>
            <div title="Yeni elan yarat" className={style.createIcon}>
              <IoIosAddCircle
                onClick={() => navigate("/create-announcement")}
              />
            </div>
            <div className={style.logoutIcon} title="Hesabdan çıx">
              <BiLogOut onClick={logout} />
            </div>
          </>
        ) : (
          <IoMdPerson onClick={() => navigate("/login")} />
        )}
      </div>

      <CatalogueSlider />
    </div>
  );
};

export default Header;
