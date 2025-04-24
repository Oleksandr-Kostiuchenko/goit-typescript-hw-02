//* Libraries
import style from "./ImageModal.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

//* TS
import { ImageDataType } from "../../App.types";
type Props = {
  modalImage: ImageDataType | null;
};

const ImageModal: React.FC<Props> = ({ modalImage }) => {
  if (modalImage === null) {
    return (
      <div className={style.backdrop}>
        <p>Error</p>
      </div>
    );
  }
  return (
    <div className={style.backdrop}>
      <img className={style.modalImage} src={modalImage.urls.full} alt="" />

      <div className={style.imageDescriptionWrapper}>
        <p className={style.nameText}>
          <span className={style.accent}>Name: </span>
          {modalImage.alt_description}
        </p>
        <p>
          <span className={style.accent}>Author: </span>
          {modalImage.user.name}
        </p>
        <button>
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
