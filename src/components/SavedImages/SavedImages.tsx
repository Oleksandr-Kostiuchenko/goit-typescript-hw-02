//* Libraries & Components
import style from "./SavedImages.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "../imagecard/ImageCard";

//* Redux
import { useSelector } from "react-redux";
import { selectSavedImages } from "../../redux/savedSlice";

//* TS
import { ImageDataType } from "../../App.types";

type Props = {
  openModal: (imageData: ImageDataType) => void;
};

const SavedImages: React.FC<Props> = ({ openModal }) => {
  const savedImagesData: ImageDataType[] = useSelector(selectSavedImages);

  return (
    <ul className={style.imageList}>
      <AnimatePresence mode="popLayout">
        {savedImagesData.map((element) => (
          <motion.li
            className={style.imageItem}
            key={element.id}
            onClick={(): void => openModal(element)}
            layout
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <ImageCard data={element} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default SavedImages;
