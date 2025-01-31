import { Journey } from "./Journey";

export type CityInput = {
  name: string;
  local_names: Record<string, string>;
  state: string;
  country: string;
  lat: number;
  lon: number;
};

export type City =
  | (CityInput & {
      id: string;
      local_name: string;
      journeys: Journey[];
    })
  | null;

export const CityByDefault: City = {
  id: generateCityID({ country: "RU", name: "Moscow", state: "Moscow" }),
  name: "Moscow",
  local_names: { ru: "Москва" },
  local_name: "Москва",
  state: "Moscow",
  country: "RU",
  lat: 33,
  lon: 55,
  journeys: [],
};

export function parseToCity(cityInput: CityInput): City {
  return {
    ...cityInput,
    id: generateCityID(cityInput),
    local_name: cityInput.local_names[navigator.language],
    journeys: [],
  };
}

function generateCityID({
  country,
  name,
  state,
}: {
  country: string;
  name: string;
  state: string;
}): string {
  let id: string = `${name}-${country}`;
  if (state && state !== name) {
    id += `-${state}`;
  }
  return id.toLowerCase();
}
