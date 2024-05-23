import { useSnapshot } from "valtio";
import s from "./config.module.scss";
import { store } from "@/store";
import { useCallback, useEffect, useState } from "react";

const Measurement = () => {
  const [state, setState] = useState<number>(24);

  const { length, width, extendValue, extendDirection } = useSnapshot(store);

  const extendMeasurement = useCallback(
    (value: number, plus: number[]) => {
      switch (extendValue) {
        case 0:
          setState(value);
          break;
        case 1:
          setState(value + plus[0]);
          break;
        case 2:
          setState(value + plus[1]);
          break;
        case 3:
          setState(value + plus[2]);
          break;

        case 4:
          setState(value + plus[3]);
          break;

        case 5:
          setState(value + plus[4]);
          break;

        case 6:
          setState(value + plus[5]);
          break;

        default:
          break;
      }
    },
    [extendValue]
  );

  useEffect(() => {
    if (width === 3) {
      if (extendDirection === "left" || extendDirection === "right") {
        switch (length) {
          case 4:
            extendMeasurement(17, [3, 5, 7, 9, 11, 14]);
            break;

          case 5:
            extendMeasurement(19, [2, 5, 7, 10, 13, 15]);
            break;

          case 6:
            extendMeasurement(20, [3, 6, 9, 12, 15, 18]);
            break;

          case 7:
            extendMeasurement(22, [3, 6, 9, 12, 16, 19]);
            break;

          case 8:
            extendMeasurement(20, [3, 6, 9, 12, 15, 17]);
            break;

          default:
            break;
        }
      } else {
        switch (length) {
          case 4:
            extendMeasurement(17, [2, 3, 5, 6, 8, 9]);
            break;

          case 5:
            extendMeasurement(19, [1, 3, 4, 6, 7, 8]);
            break;

          case 6:
            extendMeasurement(20, [2, 3, 4, 6, 7, 9]);
            break;

          case 7:
            extendMeasurement(22, [1, 2, 4, 5, 7, 8]);
            break;

          case 8:
            extendMeasurement(23, [1, 3, 4, 6, 7, 9]);
            break;

          default:
            break;
        }
      }
    } else if (width === 4) {
      if (extendDirection === "left" || extendDirection === "right") {
        switch (length) {
          case 4:
            extendMeasurement(20, [2, 4, 7, 9, 11, 13]);
            break;

          case 5:
            extendMeasurement(22, [2, 5, 7, 10, 12, 15]);
            break;

          case 6:
            extendMeasurement(23, [3, 6, 9, 11, 14, 17]);
            break;

          case 7:
            extendMeasurement(24, [3, 7, 10, 13, 16, 20]);
            break;

          case 8:
            extendMeasurement(26, [3, 7, 10, 14, 17, 21]);
            break;

          default:
            break;
        }
      } else {
        switch (length) {
          case 4:
            extendMeasurement(20, [2, 4, 6, 7, 9, 11]);
            break;

          case 5:
            extendMeasurement(22, [1, 3, 5, 7, 8, 10]);
            break;

          case 6:
            extendMeasurement(23, [2, 3, 5, 7, 9, 11]);
            break;

          case 7:
            extendMeasurement(24, [2, 4, 6, 7, 9, 11]);
            break;

          case 8:
            extendMeasurement(26, [1, 3, 5, 7, 9, 10]);
            break;

          default:
            break;
        }
      }
    }
  }, [length, width, extendDirection, extendMeasurement]);

  useEffect(() => {}, [extendValue, extendDirection]);

  return (
    <div className={s.floor}>
      <h4>Floor:</h4>
      <h5>{state} m²</h5>
    </div>
  );
};

export default Measurement;
