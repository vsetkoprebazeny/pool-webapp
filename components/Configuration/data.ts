type Data = {
  title: string;
  titleSK: string;
  moreStep: boolean;
  options: {
    value?: string | number;
    title: string;
    titleSK?: string;
    options: { value?: string | number; title: string; color?: string }[];
  }[];
};

export const data: Data[] = [
  {
    title: "entry",
    titleSK: "Schody",
    moreStep: true,
    options: [
      {
        title: "Straight stairs with bench",
        titleSK: "Priame schody s lavičkou",
        value: "stair2",
        options: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },

      {
        title: "Straight stairs",
        titleSK: "Kráľovské schody",
        value: "stair3",
        options: [{ title: "center", value: "center" }],
      },
      {
        title: "Stairs over the corner with bench",
        titleSK: "Schody cez roh s lavičkou",
        value: "stair1",
        options: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },
      {
        title: "Stairs over the corner",
        titleSK: "Schody cez roh",
        value: "stair4",
        options: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },
    ],
  },
  {
    title: "floors",
    titleSK: "Podlaha",
    moreStep: false,
    options: [
      { title: "White stone", value: 0, options: [] },
      { title: "Beige stone", value: 1, options: [] },
      { title: "Pietro grey", value: 2, options: [] },
      { title: "Selene", value: 3, options: [] },
      { title: "Serena mix", value: 4, options: [] },
      { title: "Serena ocra", value: 5, options: [] },
      { title: "Iconic dark", value: 6, options: [] },
      { title: "Iconic white", value: 7, options: [] },
      { title: "Dune", value: 8, options: [] },
      { title: "Mistery grey", value: 9, options: [] },
      { title: "Mistery sand", value: 10, options: [] },
      { title: "Pietro golden", value: 11, options: [] },
      { title: "No Floor", value: 12, options: [] },
    ],
  },
  {
    title: "foils",
    titleSK: "Fólia",
    moreStep: true,
    options: [
      {
        title: "Jednofarebne ELBE SUPRA",
        options: [
          { title: "ADRIATIC BLUE", value: 0, color: "#84c9e1" },
          { title: "LIGHT BLUE", value: 1, color: "#d9e4ea" },
          { title: "LIGHT GREY", value: 2, color: "#bbbec3" },
          { title: "SAND", value: 3, color: "#e8e7e2" },
          { title: "WHITE", value: 4, color: "#e9eaec" },
        ],
      },
      {
        title: "ALKORPLAN TOUCH",
        options: [
          { title: "AUTHENTIC", value: 0, color: "#ccac8f" },
          { title: "ORIGIN", value: 1, color: "#d5d7db" },
          { title: "PRESTIGE", value: 2, color: "#bcbfc3" },
          { title: "RELAX", value: 3, color: "#ded5c8" },
          { title: "SUBLIME", value: 4, color: "#dad3cb" },
          { title: "VANITY", value: 5, color: "#cbd0d4" },
        ],
      },
      {
        title: "Mozaikove ELBE",
        options: [
          { title: "AZUR MOSAIC", value: 0, color: "#3e4cb2" },
          { title: "BLUE MOSAIC", value: 1, color: "#91b7db" },
          { title: "GRAU MOSAIC", value: 2, color: "#d9dade" },
          { title: "MARBLE", value: 3, color: "#6e98d4" },
        ],
      },
      {
        title: "Perletove ELBE",
        options: [
          { title: "PEARL BLUE", value: 0, color: "#5790c7" },
          { title: "PEARL SAND", value: 1, color: "#e8e6e2" },
          { title: "PEARL WHITE", value: 2, color: "#e5e6e8" },
        ],
      },
      {
        title: "STONELITE",
        options: [
          { title: "ELEGANCE", value: 0, color: "#c5c1c3" },
          { title: "EMERALD", value: 1, color: "#bac6ca" },
          { title: "GOLDEN", value: 2, color: "#d1c4bb" },
          { title: "GREY", value: 3, color: "#d2d4d8" },
        ],
      },

      {
        title: "Novinkove ELBE",
        options: [
          { title: "INDIAN MARBLE", value: 0, color: "#d1d2d5" },
          { title: "MOUNTAIN BLUE", value: 1, color: "#a0bdd8" },
          { title: "OCEAN GREY", value: 2, color: "#c8c5c5" },
          { title: "SAND STONE", value: 3, color: "#c7c7c9" },
          { title: "TERRA SAND", value: 4, color: "#d9b579" },
          { title: "URBAN GREY", value: 5, color: "#ced3d9" },
        ],
      },
      {
        title: "Drevodekor LARCH RANGE",
        options: [
          { title: "Larch Fesco", value: 0, color: "#d2d5d0" },
          { title: "Larch Nature", value: 1, color: "#ded7ca" },
        ],
      },
    ],
  },
  {
    title: "lighting",
    titleSK: "Svetlo",
    moreStep: false,
    options: [
      { titleSK: "Modré", title: "blue", value: "blue", options: [] },
      { titleSK: "Zelené", title: "green", value: "green", options: [] },
      { titleSK: "Červené", title: "red", value: "red", options: [] },
      { titleSK: "Žlté", title: "yellow", value: "yellow", options: [] },
      { titleSK: "Biele", title: "white", value: "white", options: [] },
    ],
  },
  {
    title: "dirt collector",
    titleSK: "Skimmer",
    moreStep: false,
    options: [
      { titleSK: "Užší", title: "Narrower", value: "narrow", options: [] },
      { titleSK: "Širší", title: "Wider", value: "wider", options: [] },
    ],
  },
  {
    title: "anti slip pads",
    titleSK: "Protišmykové",
    moreStep: false,
    options: [
      { titleSK: "Krémové", title: "cream", value: 0, options: [] },
      { titleSK: "Modrá", title: "dark sky", value: 1, options: [] },
      { titleSK: "Svetlo modrá", title: "sky", value: 2, options: [] },
      { titleSK: "Šedá", title: "gray", value: 3, options: [] },
      { titleSK: "Biela", title: "white", value: 4, options: [] },
    ],
  },
  {
    title: "nozzles",
    titleSK: "Trysky",
    moreStep: false,
    options: [
      { title: "visible", titleSK: "Viditeľné", value: "show", options: [] },
    ],
  },
  {
    title: "upstream",
    titleSK: "Protiprúd",
    moreStep: false,
    options: [
      { title: "visible", titleSK: "Viditeľné", value: "show", options: [] },
    ],
  },
  {
    title: "shower",
    titleSK: "Sprcha",
    moreStep: false,
    options: [
      {
        titleSK: "Antracitová",
        title: "Anthracite",
        value: "type1",
        options: [],
      },
      {
        titleSK: "Antracitová so strieborným pruhom",
        title: "Anthracite with silver stripe",
        value: "type2",
        options: [],
      },
      { titleSK: "Piesková", title: "Sand", value: "type3", options: [] },
      {
        titleSK: "Piesková so strieborným pruhom",
        title: "Sand with silver band",
        value: "type4",
        options: [],
      },
    ],
  },
  {
    title: "roller cover",
    titleSK: "Zastrešenie",
    moreStep: false,
    options: [
      {
        title: "Prima",
        titleSK: "Prima",
        value: "prima black",
        options: [],
      },
      {
        title: "Elisa Antracit",
        titleSK: "Elisa Antracit",
        value: "elisa black",
        options: [],
      },
      {
        title: "Elisa Silver",
        titleSK: "Elisa Silver",
        value: "elisa silver",
        options: [],
      },
    ],
  },
  {
    title: "heat pump",
    titleSK: "Tepelné čerpadlo",
    moreStep: false,
    options: [
      { title: "MICROWELL", titleSK: "MICROWELL", value: "black", options: [] },
      { title: "SILENCE", titleSK: "SILENCE", value: "silver", options: [] },
    ],
  },
  {
    title: "technology house",
    titleSK: "Tech. domček",
    moreStep: false,
    options: [
      { title: "Visible", titleSK: "Viditeľné", value: "show", options: [] },
    ],
  },
  {
    title: "floor extension",
    titleSK: "Predĺžená plocha",
    moreStep: false,
    options: [
      { title: "Enable", titleSK: "Aktivované", value: "enable", options: [] },
      {
        title: "Disable",
        titleSK: "Deaktivované",
        value: "disable",
        options: [],
      },
    ],
  },
];
