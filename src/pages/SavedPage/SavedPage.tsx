//* Libraries
import style from "./SavedPage.module.css";
import ImageModal from "../../components/imagemodal/ImageModal";
import Modal from "react-modal";
Modal.setAppElement("#root");

//* CTX
import { useLang } from "../../hook/useLang";

//* TS
import { useState } from "react";
import { ImageDataType } from "../../App.types";
import { LangContextType } from "../../context/lang";

//* Components
import SavedImages from "../../components/SavedImages/SavedImages";

const SavedPage = () => {
  const langCtx: LangContextType = useLang();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageDataType | null>(null);

  const openModal = (imageData: ImageDataType): void => {
    setModalImage(imageData);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <h2 className={style.pageTitle}>
        {langCtx.lang === "en" ? "Your Saved Images:" : "Ваші збережені фото:"}
      </h2>

      <SavedImages openModal={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`modal ${modalIsOpen ? "modalIsOpen" : ""}`}
        overlayClassName={`overlay ${modalIsOpen ? "overlayIsOpen" : ""}`}
        closeTimeoutMS={300}
      >
        {modalIsOpen && modalImage !== null && (
          <ImageModal modalImage={modalImage} />
        )}
      </Modal>
    </>
  );
};

export default SavedPage;
