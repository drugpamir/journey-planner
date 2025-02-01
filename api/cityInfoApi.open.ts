import { City, parseToCity } from "../models/City";
import { CityInfoAPI } from "./cityInfoApi";
import { fetchJson } from "./fetchUrl";

const endpoint = process.env?.CITIES_ENDPOINT;
const apiKey = process.env?.CITIES_API_KEY;

export class CityInfoOpenApi implements CityInfoAPI {
  async fetchInfo(
    cityName: string,
    limit: number = 5,
  ): Promise<Omit<City, "id">> {
    const _url = `${endpoint}?q=${cityName}&limit=${limit}&appid=${apiKey}`;
    console.log(_url);
    try {
      const json = await fetchJson(_url);
      // console.log("Loaded json:", json);
      // console.log("Loaded city:", city);
      return parseToCity(json[0]);
    } catch {
      console.log("City NOT found");
      throw new Error();
    }
  }
}
