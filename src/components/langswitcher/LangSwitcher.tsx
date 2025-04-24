//* Libraries
import style from "./LangSwitcher.module.css";
import { IoClose } from "react-icons/io5";

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
          <IoClose />
        </button>

        <h2 className={style.title}>
          {langCtx.lang === "en" ? "Select language: " : "Виберіть мову: "}
        </h2>
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
