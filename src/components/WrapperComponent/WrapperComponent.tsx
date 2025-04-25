//* Libraries
import style from "./WrapperComponent.module.css";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

//* Router
import { Routes, Route } from "react-router-dom";

//* Components
import App from "../../App";
import SavedPage from "../../pages/SavedPage/SavedPage";
import LangSwitcher from "../langswitcher/LangSwitcher";

export const WrapperComponent: React.FC = () => {
  const [langModalIsOpen, setLangModalIsOpen] = useState<boolean>(false);

  const handleCloseLangModal = (): void => {
    setLangModalIsOpen(false);
  };

  return (
    <>
      <button
        className="menu-btn"
        onClick={(): void => {
          setLangModalIsOpen(true);
        }}
      >
        <IoMenuSharp className="menu-icon" />
      </button>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="*" element={<App />} />
      </Routes>

      {langModalIsOpen && (
        <LangSwitcher handleCloseLangModal={handleCloseLangModal} />
      )}
    </>
  );
};

export default WrapperComponent;
