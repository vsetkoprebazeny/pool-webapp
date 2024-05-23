import { useEffect, useState } from "react";
import s from "./config.module.scss";
import { store } from "../../store";
import { useSnapshot } from "valtio";

type Props = {
  title: string;
  min: number;
  max: number;
  step?: number;
  type: "length" | "width" | "depth";
};

const Range: React.FC<Props> = ({ max, min, title, step = 1, type }) => {
  const { width } = useSnapshot(store);

  const [value, setValue] = useState<number>(
    type === "length" || type === "depth" ? max : min
  );
  const [move, setMove] = useState<number>(0);

  useEffect(() => {
    switch (type) {
      case "length":
        store.length = value;
        setMove((100 / (max - min)) * value - 100);
        break;
      case "depth":
        if (value - min === 0.10000000000000009) {
          setMove(27);
        } else if (value - min === 0.19999999999999996) {
          setMove(55);
        } else if (value - min === 0.30000000000000004) {
          setMove(82);
        } else {
          setMove(-3);
        }
        store.depth = value;
        break;
      case "width":
        store.width = value;
        setMove(value - min >= 1 ? (value - min) * 100 - 15 : 0);
        break;

      default:
        break;
    }
  }, [value, max, min, type]);

  // useEffect(() => {
  //   if (width === 4) {
  //     store.length = 8;
  //     if (type === "length") setValue(8);
  //   }
  // }, [width]);

  return (
    <div className={s.range}>
      <h4>{title}</h4>
      <div className={s.range_box}>
        <p>{min}m</p>
        <div className={s.range_relative}>
          <input
            // disabled={type === "length" && width === 4}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            type="range"
            step={step}
            min={min}
            max={max}
          />
          <span style={{ left: `${move - (value - min) * 5}%` }}>{value}</span>
        </div>
        <p>{max}m</p>
      </div>
    </div>
  );
};

export default Range;
