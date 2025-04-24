//* Libraries & Components
import style from "./ImageGallery.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "../imagecard/ImageCard";

//* TS
import { ImageDataType } from "../../App.types";

type Props = {
  galleryArr: ImageDataType[];
  openModal: (imageData: ImageDataType) => void;
};

const ImageGallery: React.FC<Props> = ({ galleryArr, openModal }) => {
  return (
    <ul className={style.imageList}>
      <AnimatePresence mode="popLayout">
        {galleryArr.map((element) => (
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

export default ImageGallery;
