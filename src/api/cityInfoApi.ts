import { City, CityByDefault, parseToCity } from "../models/City";
import { fetchJson } from "./fetchUrl";

const endpoint = process.env?.CITIES_ENDPOINT;
const apiKey = process.env?.CITIES_API_KEY;

export async function fetchCityInfo(
  cityName: string,
  limit: number = 5,
): Promise<City> {
  const _url = `${endpoint}?q=${cityName}&limit=${limit}&appid=${apiKey}`;
  console.log(_url);
  let city: City;
  try {
    const json = await fetchJson(_url);
    city = parseToCity(json[0]);
    console.log("Loaded json:", json);
    console.log("Loaded city:", city);
  } catch {
    city = CityByDefault;
    console.log("City NOT found");
  }
  return city;
}
