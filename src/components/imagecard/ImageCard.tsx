//* Libraries
import style from "./ImageCard.module.css";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

//* TS
import { ImageDataType } from "../../App.types";
type Props = {
  data: ImageDataType;
};

const ImageCard: React.FC<Props> = ({ data }) => {
  return (
    <motion.div
      className={style.imgWrapper}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4 }}
    >
      <img
        className={style.imgGallery}
        src={data.urls.regular}
        alt={data.alt_description}
      />
    </motion.div>
  );
};

export default ImageCard;
