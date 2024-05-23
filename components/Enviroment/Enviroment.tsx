import { useSnapshot } from "valtio";
import Buttons from "./Buttons";
import Quote from "./Quote";
import s from "./env.module.scss";
import { store } from "../../store";
import { useState } from "react";

type Props = {
  setIsGetQuote: React.Dispatch<React.SetStateAction<boolean>>;
};

const Enviroment: React.FC<Props> = ({ setIsGetQuote }) => {
  const { mode, isWater, code } = useSnapshot(store);

  const [isCloudyDisabled, setIsCloudyDisabled] = useState<boolean>(false);
  const [isCloudy, setIsCloudy] = useState<boolean>(false);

  const handleMode = () => {
    if (mode === "night") {
      setIsCloudyDisabled(false);
      if (isCloudy) {
        store.mode = "cloudy";
      } else {
        store.mode = "day";
      }
    } else {
      store.mode = "night";
      setIsCloudyDisabled(true);
    }
  };
  const handleCloudy = () => {
    if (mode === "day") {
      store.mode = "cloudy";
      setIsCloudy(true);
    } else {
      store.mode = "day";
      setIsCloudy(false);
    }
  };

  const handleIsWater = () => {
    store.isWater = !isWater;
  };

  return (
    <div className={s.main}>
      <div className={s.main_box}>
        <Buttons
          setDefault={false}
          onClick={handleMode}
          first={code === "GB" ? "Day" : "Deň"}
          second={code === "GB" ? "Night" : "Noc"}
        />
        <Buttons
          setDefault={true}
          onClick={handleIsWater}
          first={code === "GB" ? "With Water" : "S vodou"}
          second={code === "GB" ? "Without Water" : "Bez vody"}
        />
        <Buttons
          setDefault={false}
          onClick={handleCloudy}
          first={"No Cloudy"}
          second={"Cloudy"}
          disabled={isCloudyDisabled}
        />
      </div>
      <Quote setIsGetQuote={setIsGetQuote} />
      <p className={s.desc}>
        {code === "GB"
          ? "This is a very high quality processing of the 3D model of the pool, which may distort the color shades depending on the quality of your equipment or the solar brightness in the model."
          : "Jedná sa o veľmi kvalitné spracovanie 3D modelu bazéna, ktorý môže odtiene farieb skresľovať v závislosti od kvality Vášho zariadenia, alebo slnečného jasu v modely."}
      </p>
    </div>
  );
};

export default Enviroment;
