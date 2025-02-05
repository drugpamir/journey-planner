import { useAppDispatch, useAppSelector } from "./redux";

import { City } from "../models/City";
import { setCityReducer } from "../redux/citiesSlice";

const useCity = (): [
  City,
  (city: City) => void,
  // (cityName: string) => void,
  // (cityId: string) => void,
] => {
  const dispatch = useAppDispatch();

  const setCurrentCity = (city: City) => dispatch(setCityReducer(city));

  // const fetchCityByName = (cityName: string) =>
  //   dispatch(fetchCityInfo(cityName));

  // const fetchCityById = (cityId: string) => {
  //   const cityName = getCityNameById(cityId);
  //   dispatch(fetchCityInfo(cityName));
  // };

  const { currentCity } = useAppSelector((state) => state.cities);

  return [currentCity, setCurrentCity];
};

export default useCity;
