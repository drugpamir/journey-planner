import { City, generateCityID } from "../models/City";
import { StorageAPI } from "./storageApi";

export class CityLocalStorage implements StorageAPI {
  #citiesStorageKey: string = "cities";

  #getCitiesSync(): City[] {
    const storedRegions = localStorage.getItem(this.#citiesStorageKey);
    console.log("storedRegions:", storedRegions);
    if (!storedRegions) {
      return [];
    }
    const regions: City[] = JSON.parse(storedRegions);
    console.log("regions:", regions);
    return regions;
  }

  async getCities(): Promise<City[]> {
    return this.#getCitiesSync();
  }

  async addCity(cityParams: Omit<City, "id">): Promise<City> {
    const addedCity = { ...cityParams, id: generateCityID({ ...cityParams }) };
    const storedCities: City[] = this.#getCitiesSync();
    if (storedCities.some((city) => city && city.path === addedCity.path)) {
      throw `city "${addedCity.name}" is already in store (${storedCities.length})`;
    }
    const newStoredCities: City[] = [...storedCities, addedCity];
    localStorage.setItem(
      this.#citiesStorageKey,
      JSON.stringify(newStoredCities),
    );

    return addedCity;
  }

  async removeCity(cityIdToRemove: string): Promise<void> {
    const storedCities: City[] = this.#getCitiesSync();
    if (!storedCities) {
      return;
    }

    const newStoredCities = storedCities.filter(
      (storedCity) => storedCity && storedCity.id !== cityIdToRemove,
    );
    localStorage.setItem(
      this.#citiesStorageKey,
      JSON.stringify(newStoredCities),
    );
  }
}
