import { useEffect, useState } from "react";
import { store } from "../../store";
import s from "./config.module.scss";
import React from "react";
import { useSnapshot } from "valtio";
import OnOffSelect from "./OnOffSelect";
import ThirdSelect from "./ThirdSelect";

type Props = {
  id: number;
  title: string;
  titleSK: string;
  options: {
    value?: string | number | undefined;
    title: string;
    titleSK?: string;
    options: {
      color?: string;
      value?: string | number | undefined;
      title: string;
    }[];
  }[];
  moreStep: boolean;
  setActiveSelect: React.Dispatch<React.SetStateAction<number>>;
  activeSelect: number;
  setIsReverse: React.Dispatch<React.SetStateAction<boolean>>;
  isReverse: boolean;
};

const Select: React.FC<Props> = ({
  options,
  title,
  setActiveSelect,
  activeSelect,
  id,
  moreStep,
  isReverse,
  setIsReverse,
  titleSK,
}) => {
  const [moreStepActive, setMoreStepActive] = useState<number>(-1);
  const [isPrev, setIsPrev] = useState<boolean>(false);

  const globalState = useSnapshot(store);

  const handleClick = (selected: number) => {
    setMoreStepActive(-1);
    setIsPrev(false);
    setIsReverse(false);
    if (selected === id) {
      setActiveSelect(-1);
    } else {
      setActiveSelect(id);
    }
  };

  return (
    <div data-upper={activeSelect === id} className={s.relative}>
      <div
        onClick={() => handleClick(activeSelect)}
        data-active={activeSelect === id}
        className={s.select}
      >
        <h3>
          {globalState.code === "GB"
            ? title === "dirt collector"
              ? "Skimmer"
              : title
            : titleSK}
        </h3>
        <p>❯</p>
      </div>
      <div
        className={s.select_options}
        data-active={isPrev ? false : activeSelect === id}
      >
        <div className={s.select_options_box}>
          <h4>
            {globalState.code === "GB"
              ? title === "dirt collector"
                ? "Skimmer"
                : title
              : titleSK}
          </h4>
          <button
            onClick={() => setActiveSelect(-1)}
            className={s.select_options_btn}
          >
            <span>+</span>
          </button>
        </div>
        {moreStep
          ? options.map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    onClick={() => {
                      setMoreStepActive(i);
                      setIsPrev(true);
                      setIsReverse(true);
                    }}
                    data-active={moreStepActive === i}
                    className={s.select}
                  >
                    <h3
                      style={
                        globalState.code === "SK"
                          ? { textTransform: "none" }
                          : {}
                      }
                    >
                      {e.titleSK
                        ? globalState.code === "GB"
                          ? e.title
                          : e.titleSK
                        : e.title}
                    </h3>
                    <p>❯</p>
                  </div>
                </React.Fragment>
              );
            })
          : options.map((e, i) => {
              return <OnOffSelect key={i} title={title} elem={e} />;
            })}
      </div>
      {moreStep &&
        options.map((e, i) => {
          return (
            <ThirdSelect
              key={i}
              elem={e}
              id={i}
              title={title}
              isReverse={isReverse}
              setMoreStepActive={setMoreStepActive}
              setIsPrev={setIsPrev}
              moreStepActive={moreStepActive}
            />
          );
        })}
    </div>
  );
};

export default Select;
