import { City, generateCityID, getCityNameById } from "./City";

describe("City", () => {
  const cityWithStateLikeName: City = {
    path: generateCityID({ country: "RU", name: "Moscow", state: "Moscow" }),
    name: "Moscow",
    local_names: { ru: "Москва" },
    local_name: "Москва",
    state: "Moscow",
    country: "RU",
    lat: 33,
    lon: 55,
    journeys: [],
  };
  const cityWithState: City = {
    path: generateCityID({
      country: "RU",
      name: "Moscow",
      state: "Moscow region",
    }),
    name: "Domodedovo",
    local_names: { ru: "Домодедово" },
    local_name: "Домодедово",
    state: "Moscow region",
    country: "RU",
    lat: 33,
    lon: 55,
    journeys: [],
  };
  beforeEach(() => {});
  it("id starts with city name", () => {
    expect(cityWithStateLikeName.path.startsWith(cityWithState.name));
    expect(cityWithState.path.startsWith(cityWithState.name));
  });

  describe("Utility function", () => {
    it("generateCityID returns id in format `city_country_state` if country !== state", () => {
      expect("moscow_ru").toBe(generateCityID(cityWithStateLikeName));
      expect("domodedovo_ru_moscow region").toBe(generateCityID(cityWithState));
    });

    it("generateCityID returns id in lowercase", () => {
      expect("Moscow_moscow region").not.toBe(
        generateCityID(cityWithStateLikeName),
      );
      expect("Domodedovo_moscow region").not.toBe(
        generateCityID(cityWithState),
      );
    });

    it("getCityNameById returns name for city argument", () => {
      expect("moscow").toBe(getCityNameById("moscow_ru"));
      expect("domodedovo").toBe(getCityNameById("domodedovo_ru_ru"));
    });
  });
});
