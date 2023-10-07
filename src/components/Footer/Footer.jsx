import React from "react";
import style from "./Footer.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.informationCont}>
        <ul className={style.informationLists}>
          <li>Layihə haqqında</li>
          <li>Qaydalar</li>
          <li>İstifadəçi razılaşması</li>
          <li>Reklam yerləşdirin</li>
        </ul>
      </div>

      <div className={style.contactCont}>
        <div className={style.numberCont}>
          <h4 className={style.numberText}>Əlaqə nömrəsi</h4>
          <h4 className={style.number}>
            <a href="tel:+994505762124">050-576-21-24</a>
          </h4>
        </div>

        <ul className={style.socialMedias}>
          <li>
            <AiOutlineMail />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <AiOutlineInstagram />
          </li>
        </ul>
      </div>

      <div className={style.copyright}>
        <h4>© Petopia</h4>
      </div>
    </div>
  );
};

export default Footer;
