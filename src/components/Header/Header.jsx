import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import SearchInput from "../SearchInput/SearchInput";
import { logout } from "../../helper";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={style.headerContainer}>
      <div className={style.headerIcons}>
        <RxHamburgerMenu />
      </div>
      <h1 className={style.headerLogo}>LOGO</h1>
      <SearchInput />
      <div className={style.headerIcons}>
        <IoIosAddCircle />
      </div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Header;
