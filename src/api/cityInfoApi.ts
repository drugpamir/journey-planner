import { City } from "../models/City";
import { fetchJson } from "./fetchUrl";

const endpoint = process?.env?.CITIES_ENDPOINT;
const apiKey = process?.env?.CITIES_API_KEY;

export async function fetchCityInfo(
  cityName: string,
  limit: number = 5,
): Promise<City> {
  const _url = `${endpoint}?q=${cityName}&limit=${limit}&appid=${apiKey}`;
  let city: City;
  try {
    const json = await fetchJson(_url);
    const { name, local_names, state, lat, lon } = json[0];
    city = new City(name, local_names, state, lat, lon);
    console.log("Loaded city:", city);
  } catch {
    city = new City("Moscow", { ru: "Москва" }, "Moscow", 33, 75);
    console.log("City NOT found");
  }
  return city;
}
