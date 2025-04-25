//* Libraries
import style from "./ImageModal.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

//* TS
import { ImageDataType } from "../../App.types";
type Props = {
  modalImage: ImageDataType;
};

//* React
import { useDispatch, useSelector } from "react-redux";
import { toggleImage } from "../../redux/savedSlice";
import { selectSavedImages } from "../../redux/savedSlice";

const ImageModal: React.FC<Props> = ({ modalImage }) => {
  const dispatch = useDispatch();
  const savedData = useSelector(selectSavedImages);
  const isInSaved: boolean = savedData.some((el) => el.id === modalImage.id);

  const handleSaveImage = (): void => {
    dispatch(toggleImage(modalImage));
  };

  if (modalImage === null) {
    return (
      <div className={style.backdrop}>
        <p>Error</p>
      </div>
    );
  }
  return (
    <div className={style.backdrop}>
      <div className={style.imageBtnWrapper}>
        <button className={style.likeBtn} onClick={handleSaveImage}>
          {isInSaved ? (
            <FaHeart className={style.likeIcon} />
          ) : (
            <FaRegHeart className={style.likeIcon} />
          )}
        </button>
        <img className={style.modalImage} src={modalImage.urls.full} alt="" />
      </div>

      <div className={style.imageDescriptionWrapper}>
        <p className={style.nameText}>
          <span className={style.accent}>Name: </span>
          {modalImage.alt_description}
        </p>
        <p>
          <span className={style.accent}>Author: </span>
          {modalImage.user.name}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
