//* React
import { useEffect, useState, useRef } from "react";

//* Libraries
import style from "./LoadMoreBtn.module.css";
import { TbArrowsDown } from "react-icons/tb";
import { motion } from "motion/react";

//* TS
type Props = {
  handleLoadMore: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ handleLoadMore }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleHover = (): void => {
    setIsHover(true);
  };

  const handleDisHover = (): void => {
    setIsHover(false);
  };

  return (
    <div className={style.btnWrapper}>
      <button
        className={style.loadMoreBtn}
        onClick={handleLoadMore}
        ref={btnRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleDisHover}
      >
        Load more
      </button>

      {isHover && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          <TbArrowsDown className={style.arrowIcon} />
        </motion.div>
      )}
    </div>
  );
};

export default LoadMoreBtn;
