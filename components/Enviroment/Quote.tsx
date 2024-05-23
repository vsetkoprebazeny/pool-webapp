import { useSnapshot } from "valtio";
import s from "./env.module.scss";
import { store } from "../../store";
import { useEffect, useState } from "react";
import { data } from "../Configuration/data";

type Props = {
  setIsGetQuote: React.Dispatch<React.SetStateAction<boolean>>;
};

const Quote: React.FC<Props> = ({ setIsGetQuote }) => {
  const globalState = useSnapshot(store);

  const capitalizer = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [entryString, setEntryString] = useState<string>("Empty");
  const [entryStringSk, setEntryStringSK] = useState<string | undefined>(
    "Empty"
  );
  useEffect(() => {
    if (globalState.entry !== undefined) {
      let result = data
        .filter((e) => e.title === "entry")[0]
        .options.filter((e) => e.value === globalState.entry!.slice(0, 6));

      setEntryString(result[0].title);
      setEntryStringSK(result[0].titleSK);
    } else {
      setEntryString("Not selected");
    }
  }, [globalState.entry]);

  const [floorString, setFloorString] = useState<string>("Empty");
  useEffect(() => {
    let result = data.filter((e) => e.title === "floors")[0].options[
      globalState.floors
    ];

    setFloorString(result.title);
  }, [globalState.floors]);

  const [antiSlipPads, setAntiSlipPads] = useState<string>("Empty");
  useEffect(() => {
    let result = data.filter((e) => e.title === "anti slip pads");
    if (globalState["anti slip pads"] !== undefined)
      setAntiSlipPads(result[0].options[globalState["anti slip pads"]].title);
  }, [globalState]);

  const [shower, setShower] = useState<string>("Empty");
  useEffect(() => {
    if (globalState.shower) {
      let result = data
        .filter((e) => e.title === "shower")[0]
        .options.filter((e) => e.value === globalState.shower);
      setShower(result[0].title);
    }
  }, [globalState.shower]);

  const handleClick = () => {
    setIsGetQuote(true);
    store.quote = {
      entry: entryString === "Not selected" ? "" : entryStringSk!,
      floor: floorString,
      foil: capitalizer(globalState.foil.toLowerCase()),
      lighting: globalState.lighting! ? capitalizer(globalState.lighting) : "",
      collector: capitalizer(globalState["dirt collector SK"]),
      pads:
        capitalizer(antiSlipPads) === "Empty"
          ? ""
          : capitalizer(globalState["anti slip pads SK"]),
      nozzels: globalState.nozzles ? "Vybraté" : "",
      upstream: globalState.upstream ? "Vybraté" : "",
      shower: globalState["shower SK"],
      cover: globalState["roller cover"] ? "Vybraté" : "",
    };
  };

  return (
    <div className={s.quote}>
      <h4>{globalState.code === "GB" ? "SELECTED" : "Vybraté"}</h4>
      <div className={s.quote_selected}>
        {globalState.entry && (
          <div className={s.quote_box}>
            <h3>{globalState.code === "GB" ? "Entry" : "Schody"}</h3>
            <p>{globalState.code === "GB" ? entryString : entryStringSk}</p>
          </div>
        )}
        <div className={s.quote_box}>
          <h3>{globalState.code === "GB" ? "Floor" : "Dlažba"}</h3>
          <p>{floorString}</p>
        </div>
        <div className={s.quote_box}>
          <h3>{globalState.code === "GB" ? "Foil" : "Fólia"}</h3>
          <p>{capitalizer(globalState.foil.toLowerCase())}</p>
        </div>
        {globalState.lighting && (
          <div className={s.quote_box}>
            <h3>{globalState.code === "GB" ? "Lighting" : "Svetlo"}</h3>
            <p>{capitalizer(globalState.lighting)}</p>
          </div>
        )}
        <div className={s.quote_box}>
          <h3>{globalState.code === "GB" ? "Skimmer" : "Skimmer"}</h3>
          <p>
            {capitalizer(
              globalState.code === "GB"
                ? globalState["dirt collector"]
                : globalState["dirt collector SK"]
            )}
          </p>
        </div>
        {(globalState["anti slip pads"] as any) >= 0 && (
          <div className={s.quote_box}>
            <h3>
              {globalState.code === "GB"
                ? "Anti Slip Pads"
                : "Protišmykové podložky"}
            </h3>
            <p>
              {capitalizer(
                globalState.code === "GB"
                  ? antiSlipPads
                  : globalState["anti slip pads SK"]
              )}
            </p>
          </div>
        )}
        {globalState.nozzles && (
          <div className={s.quote_box}>
            <h3>{globalState.code === "GB" ? "Nozzel" : "Trysky"}</h3>
            <p>{globalState.code === "GB" ? "Selected" : "Vybraté"}</p>
          </div>
        )}
        {globalState.upstream && (
          <div className={s.quote_box}>
            <h3>{globalState.code === "GB" ? "Upstream" : "Protiprúd"}</h3>
            <p>{globalState.code === "GB" ? "Selected" : "Vybraté"}</p>
          </div>
        )}
        {globalState.shower && (
          <div className={s.quote_box}>
            <h3>{globalState.code === "GB" ? "Shower" : "Sprcha"}</h3>
            <p>
              {globalState.code === "GB" ? shower : globalState["shower SK"]}
            </p>
          </div>
        )}
        {globalState["roller cover"] && (
          <div className={s.quote_box}>
            <h3>
              {globalState.code === "GB" ? "Roller Cover" : "Zastrešenie"}
            </h3>
            <p>{globalState.code === "GB" ? "Selected" : "Vybraté"}</p>
          </div>
        )}
      </div>
      <button onClick={handleClick}>
        {globalState.code === "GB" ? "Get quote" : "Odoslať žiadosť"}
      </button>
    </div>
  );
};

export default Quote;
