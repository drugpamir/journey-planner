import { Journey } from "./Journey";

// export type CityId = string & { __brand: "CityId" };

export type CityInput = {
  name: string;
  local_names: Record<string, string>;
  state: string;
  country: string;
  lat: number;
  lon: number;
};

export type City = CityInput & {
  id: string;
  path: string;
  local_name: string;
  journeys: Journey[];
};

export function parseToCity(cityInput: CityInput): Omit<City, "id"> {
  return {
    ...cityInput,
    path: generateCityID(cityInput),
    local_name: cityInput.local_names[navigator.language],
    journeys: [],
  };
}

export function getCityNameById(cityId: string): string {
  const cityName = cityId.slice(0, cityId.indexOf("_"));
  console.log(cityName);
  return cityName;
}

export function generateCityID({
  country,
  name,
  state,
}: {
  country: string;
  name: string;
  state: string;
}): string {
  let id: string = `${name}_${country}`;
  if (state && state !== name) {
    id += `_${state}`;
  }
  return id.toLowerCase();
}
