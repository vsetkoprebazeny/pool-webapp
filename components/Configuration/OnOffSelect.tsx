import { store } from "@/store";
import { useSnapshot } from "valtio";
import s from "./config.module.scss";

type Props = {
  title: string;
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

const OnOffSelect: React.FC<Props> = ({ title, elem }) => {
  const globalState = useSnapshot(store);

  return (
    <div className={s.select_input}>
      <input
        onClick={() => {
          (store as any)[title] = elem.value;
          (store as any)[`${title} SK`] = elem.titleSK;
          if (
            title === "roller cover" ||
            title === "lighting" ||
            title === "upstream" ||
            title === "anti slip pads" ||
            title === "technology house" ||
            title === "shower" ||
            title === "nozzles"
          ) {
            if ((globalState as any)[title] === elem.value) {
              (store as any)[title] = undefined;
            }
          }
        }}
        onChange={() => {}}
        type="radio"
        id={`react-select-${elem.title + title}`}
        name={`${title}-select`}
        checked={(globalState as any)[title] === elem.value}
        value={elem.value}
      />
      <label
        style={globalState.code === "SK" ? { textTransform: "none" } : {}}
        htmlFor={`react-select-${elem.title + title}`}
      >
        {elem.titleSK
          ? globalState.code === "GB"
            ? elem.title
            : elem.titleSK
          : elem.title}
      </label>
    </div>
  );
};

export default OnOffSelect;
