import { City } from "../models/City";
import { fetchJson } from "./fetchUrl";

console.log("process:", process);

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
    city = new City(json[0]);
    console.log("Loaded json:", json);
    console.log("Loaded city:", city);
  } catch {
    city = new City({
      name: "Moscow",
      local_names: { ru: "Москва" },
      state: "Moscow",
      country: "RU",
      lat: 33,
      lon: 55,
    });
    console.log("City NOT found");
  }
  return city;
}
