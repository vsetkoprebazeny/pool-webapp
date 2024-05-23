import { useSnapshot } from "valtio";
import s from "./config.module.scss";
import { useEffect } from "react";
import { store } from "@/store";

type Props = {
  id: number;
  title: string;
  isReverse: boolean;
  setMoreStepActive: React.Dispatch<React.SetStateAction<number>>;
  setIsPrev: React.Dispatch<React.SetStateAction<boolean>>;
  moreStepActive: number;
  elem: {
    value?: string | number | undefined;
    title: string;
    titleSK?: string | undefined;
    options: {
      color?: string;
      value?: string | number | undefined;
      title: string;
    }[];
  };
};

const ThirdSelect: React.FC<Props> = ({
  elem,
  isReverse,
  setMoreStepActive,
  moreStepActive,
  id,
  setIsPrev,
  title,
}) => {
  const globalState = useSnapshot(store);
  useEffect(() => {
    isReverse === false && setMoreStepActive(-1);
  }, [isReverse, setMoreStepActive]);

  return (
    <div
      data-entry={title === "entry"}
      className={s.select_options}
      data-change
      data-optionactive={isReverse ? moreStepActive === id : false}
    >
      <div data-change className={s.select_options_box}>
        <h4 style={globalState.code === "SK" ? { textTransform: "none" } : {}}>
          {elem.titleSK
            ? globalState.code === "GB"
              ? elem.title
              : elem.titleSK
            : elem.title}
        </h4>
        <button
          onClick={() => {
            setMoreStepActive(-1);
            setIsPrev(false);
          }}
          className={s.select_options_btn}
        >
          <span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M4 12L8 8M4 12L8 16"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      {title === "entry" ? (
        <div className={s.select_input}>
          <div className={s.stairSelect}>
            {elem.options.map((optionElem, optionID) => {
              return (
                <button
                  data-active={
                    globalState.entry === `${elem.value} ${optionElem.value}`
                  }
                  data-center={optionElem.title === "center"}
                  onClick={() => {
                    if (
                      globalState.entry === `${elem.value} ${optionElem.value}`
                    ) {
                      store.entry = undefined;
                    } else {
                      store.entry = `${elem.value} ${optionElem.value}`;
                    }
                  }}
                  key={optionID}
                />
              );
            })}
          </div>
        </div>
      ) : (
        elem.options.map((optionElem, optionID) => {
          return (
            <div key={optionID} className={s.select_input}>
              <input
                onClick={() => {
                  if (title === "foils") {
                    store.foilType = elem.title.toLowerCase();
                    store.foil = optionElem.title;
                    if (optionElem.color) {
                      store.stairColor = optionElem.color;
                    } else {
                      store.stairColor = "white";
                    }
                  }
                  (store as any)[elem.title.toLowerCase()] = optionElem.value;
                }}
                onChange={(e) => (store.foil = e.target.value)}
                checked={optionElem.title === globalState.foil}
                value={optionElem.title}
                type="radio"
                id={`react-select-${optionElem.title + elem.title}`}
                name={`${title}-select`}
              />
              <label htmlFor={`react-select-${optionElem.title + elem.title}`}>
                {optionElem.title}
              </label>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ThirdSelect;
