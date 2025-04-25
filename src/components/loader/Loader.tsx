import style from "./Loader.module.css";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default Loader;
