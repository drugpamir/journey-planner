import { City } from "../models/City";
import { CityLocalStorage } from "./storageApi.local";

export interface StorageAPI {
  getCities(): Promise<City[]>;

  addCity(cityParams: Omit<City, "id">): Promise<City>;

  removeCity(cityId: string): Promise<void>;
}

export const cityStorageApi: StorageAPI = new CityLocalStorage();
