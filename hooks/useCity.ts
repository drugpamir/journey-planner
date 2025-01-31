import { useAppDispatch, useAppSelector } from "./redux";
import { setCityReducer } from "../redux/citiesSlice";
import { City } from "../models/City";

const useCity = (): [City, (user: City) => void] => {
  const dispatch = useAppDispatch();
  const setCurrentCity = (city: City) => dispatch(setCityReducer(city));
  const { currentCity } = useAppSelector((state) => state.cities);
  return [currentCity, setCurrentCity];
};

export default useCity;
