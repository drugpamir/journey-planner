import { City } from "../models/City";

export interface CityInfoAPI {
  fetchInfo(cityName: string, limit?: number): Promise<Omit<City, "id">>;
}
