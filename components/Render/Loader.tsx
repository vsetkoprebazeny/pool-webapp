import s from "./render.module.scss";

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loaderCube}>
        <div className={`${s.loaderSide} ${s.front}`} />
        <div className={`${s.loaderSide} ${s.back}`} />
        <div className={`${s.loaderSide} ${s.left}`} />
        <div className={`${s.loaderSide} ${s.right}`} />
        <div className={`${s.loaderSide} ${s.top}`} />
        <div className={`${s.loaderSide} ${s.bottom}`} />
      </div>
    </div>
  );
};

export default Loader;
