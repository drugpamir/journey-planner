import { generateID } from "../utils/dataGenerator";
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

export function parseToCity(cityInput: CityInput): City {
  return {
    ...cityInput,
    id: generateID(),
    local_name: cityInput.local_names[navigator.language],
    journeys: [],
  };
}

export const CityByDefault: City = {
  id: generateID(),
  name: "Moscow",
  local_names: { ru: "Москва" },
  local_name: "Москва",
  state: "Moscow",
  country: "RU",
  lat: 33,
  lon: 55,
  journeys: [],
};
