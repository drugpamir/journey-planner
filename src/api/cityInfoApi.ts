import { City } from "../models/City";
import { CityInfoOpenApi } from "./cityInfoApi.open";

export interface CityInfoAPI {
  fetchInfo(cityName: string, limit?: number): Promise<City>;
}

export const cityInfoOpenApi: CityInfoAPI = new CityInfoOpenApi();
