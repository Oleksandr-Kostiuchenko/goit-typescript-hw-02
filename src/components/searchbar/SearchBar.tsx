//* Libraries
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useLang } from "../../hook/useLang";
import { FormEvent } from "react";

//* TS
type Props = {
  onSearch: (topic: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const langCtx = useLang();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem(
      "galleryUserQuery"
    ) as HTMLInputElement;

    if (input.value.trim() === "") {
      toast("Please enter something!", {
        icon: "📌",
      });
      return;
    }

    onSearch(input.value);
    form.reset();
  };

  return (
    <>
      {langCtx.lang === "en" ? (
        <motion.div
          className={style.headerWrapper}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className={style.formWrapper} onSubmit={handleSubmit}>
            <input
              className={style.userInput}
              name="galleryUserQuery"
              type="text"
              autoComplete="off"
              maxLength={30}
              placeholder="Images..."
            />
            <FiSearch className={style.searchIcon} />
            <button className={style.searchBtn} type="submit">
              Search
            </button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </motion.div>
      ) : (
        <motion.div
          className={style.headerWrapper}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className={style.formWrapper} onSubmit={handleSubmit}>
            <input
              className={style.userInput}
              name="galleryUserQuery"
              type="text"
              autoComplete="off"
              maxLength={30}
              placeholder="Зображення..."
            />
            <FiSearch className={style.searchIcon} />
            <button className={style.searchBtn} type="submit">
              Пошук
            </button>
          </form>
          <Toaster position="top-right" reverseOrder={false} />
        </motion.div>
      )}
    </>
  );
};

export default SearchBar;
