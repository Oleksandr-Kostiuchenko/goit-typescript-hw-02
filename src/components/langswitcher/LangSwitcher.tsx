//* Libraries
import style from "./LangSwitcher.module.css";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

//* CLSX
import clsx from "clsx";
type ClsxProps = {
  isActive: boolean;
};

const classContructor = ({ isActive }: ClsxProps) => {
  return clsx(style.navLink, { [style.activeLink]: isActive });
};

//* Ctx & TS
import { useLang } from "../../hook/useLang";
import { LangContextType, LangValue } from "../../context/lang";

import { ChangeEvent } from "react";
type Props = {
  handleCloseLangModal: () => void;
};

const LangSwitcher: React.FC<Props> = ({ handleCloseLangModal }) => {
  const langCtx: LangContextType = useLang();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const select = event.target as HTMLSelectElement;

    if (select.value === "uk" || select.value === "en") {
      const selectValue: LangValue = select.value;

      if (langCtx.changeFunc !== null) {
        langCtx.changeFunc(selectValue);
      }
    }
  };

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <button
          className={style.closeModalBtn}
          onClick={() => {
            handleCloseLangModal();
          }}
        >
          <IoClose className={style.closeIcon} />
        </button>

        <nav className={style.navWrapper}>
          <ul className={style.navList}>
            <li className={style.listItem}>
              <NavLink className={classContructor} to="/">
                <IoHome />
                {langCtx.lang === "en" ? "Home" : "Головна"}
              </NavLink>
            </li>
            <li className={style.listItem}>
              <NavLink className={classContructor} to="/saved">
                <FaHeart />
                {langCtx.lang === "en" ? "Saved" : "Збережені"}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={style.selectWrapper}>
          <select
            className={style.langSelector}
            value={langCtx.lang}
            onChange={handleChange}
          >
            <option value="uk">Українська</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
