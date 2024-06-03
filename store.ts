import { proxy } from "valtio";
type Store = {
  code: "GB" | "SK";
  length: number;
  width: number;
  depth: number;
  mode: "day" | "night" | "cloudy";
  "roller cover": "prima black" | "elisa silver" | "elisa black" | undefined;
  lighting: "blue" | "green" | "red" | "yellow" | "white" | undefined;
  "dirt collector SK": string;
  "dirt collector": "wider" | "narrow";
  "anti slip pads SK": string;
  "shower SK": string;
  upstream: "show" | undefined;
  nozzles: "show" | undefined;
  shower: "type1" | "type2" | "type3" | "type4" | undefined;
  isWater: boolean;
  entry: string | undefined;
  "anti slip pads": number | undefined;
  floors: number;
  foilType: string;
  foil: string;
  stairColor: string;
  "alkorplan touch": number;
  "mozaikove elbe": number;
  "perletove elbe": number;
  stonelite: number;
  "jednofarebne elbe supra": number;
  "novinkove elbe": number;
  "drevodekor larch range": number;
  quote: {
    entry: string;
    floor: string;
    foil: string;
    lighting: string;
    collector: string;
    pads: string;
    nozzels: string;
    upstream: string;
    shower: string;
    cover: string;
  };
  "heat pump": "black" | "silver";
  "technology house": "show" | undefined;
  "floor extension": "enable" | "disable";
  extendValue: number;
  extendDirection: "right" | "left" | "front";
};

export const store = proxy<Store>({
  code: "SK",
  length: 8,
  width: 3,
  depth: 1.5,
  mode: "day",
  isWater: false,
  "roller cover": undefined,
  "dirt collector": "narrow",
  stairColor: "#91b7db",
  upstream: undefined,
  nozzles: undefined,
  lighting: undefined,
  shower: undefined,
  entry: "stair1 right",
  "anti slip pads": 0,
  floors: 10,
  foilType: "jednofarebne elbe supra",
  foil: "adriatic blue",
  "alkorplan touch": 0,
  "mozaikove elbe": 0,
  "drevodekor larch range": 0,
  "jednofarebne elbe supra": 0,
  "novinkove elbe": 0,
  "perletove elbe": 0,
  stonelite: 0,
  quote: {
    entry: "",
    floor: "",
    foil: "",
    lighting: "",
    collector: "",
    pads: "",
    nozzels: "",
    upstream: "",
    shower: "",
    cover: "",
  },
  "anti slip pads SK": "",
  "dirt collector SK": "Užší",
  "shower SK": "Piesková so strieborným pruhom",
  "heat pump": "black",
  "technology house": undefined,
  "floor extension": "disable",
  extendValue: 0,
  extendDirection: "left",
});
