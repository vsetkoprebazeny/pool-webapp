import { useState } from "react";
import Range from "./Range";
import Select from "./Select";
import s from "./config.module.scss";
import { data } from "./data";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import Measurement from "./Measurement";

type Props = {
  setIsGetQuote: React.Dispatch<React.SetStateAction<boolean>>;
};

const Configuration: React.FC<Props> = ({ setIsGetQuote }) => {
  const { code, length, width } = useSnapshot(store);
  const [dim, setDim] = useState<boolean>(false);
  const [activeSelect, setActiveSelect] = useState<number>(-1);
  const [isReverse, setIsReverse] = useState<boolean>(false);

  return (
    <div className={s.main}>
      <h1>{code === "GB" ? "Configurate" : "Konfigurácia"}</h1>
      <Measurement />
      <button
        className={s.main_isDesktopHide}
        onClick={() => setIsGetQuote(true)}
      >
        {code === "GB" ? "Get quote" : "Odoslať žiadosť"}
      </button>
      <div className={s.sliders}>
        <Range
          type="length"
          title={code === "GB" ? "Length" : "Dĺžka"}
          min={4}
          max={8}
        />
        <Range
          type="width"
          title={code === "GB" ? "Width" : "Šírka"}
          min={3}
          max={4}
        />
        <Range
          type="depth"
          title={code === "GB" ? "Depth" : "Hĺbka"}
          min={1.2}
          max={1.5}
          step={0.3}
        />
      </div>
      <div className={s.buttons}>
        <h4>{code === "GB" ? "EQUIPMENT" : "KOMPONENTY"}</h4>
        <button onClick={() => setDim(true)} className={s.dim}>
          {code === "GB" ? "DIMENSIONS" : "ROZMERY"}
          <span>
            {length}m X {width}m
          </span>
        </button>
        <div
          style={{ zIndex: 5 }}
          data-active={dim}
          className={s.select_options}
        >
          <div className={s.select_options_box}>
            <h4>DIMENSIONS</h4>
            <button
              onClick={() => setDim(false)}
              className={s.select_options_btn}
            >
              <span>+</span>
            </button>
          </div>
          <div className={s.mbslider}>
            <Range
              type="length"
              title={code === "GB" ? "Length" : "Dĺžka"}
              min={4}
              max={8}
            />
            <Range
              type="width"
              title={code === "GB" ? "Width" : "Šírka"}
              min={3}
              max={4}
            />
            <Range
              type="depth"
              title={code === "GB" ? "Depth" : "Hĺbka"}
              min={1.2}
              max={1.5}
              step={0.3}
            />
          </div>
        </div>
        {data.map(({ options, title, moreStep, titleSK }, i) => {
          return (
            <Select
              key={i}
              id={i}
              activeSelect={activeSelect}
              setActiveSelect={setActiveSelect}
              title={title}
              titleSK={titleSK}
              options={options}
              moreStep={moreStep}
              isReverse={isReverse}
              setIsReverse={setIsReverse}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Configuration;
