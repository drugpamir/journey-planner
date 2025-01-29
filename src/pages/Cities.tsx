import React from "react";
import AddCityForm from "../components/Form.AddCity";
import CityList from "../components/CityList";
import { City } from "../models/City";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeCityFromStorage } from "../redux/actionCreators";

export const TO_CITIES = "/cities";

export const Cities = () => {
  const citiesState = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  const removeCity = (city: City) => {
    dispatch(removeCityFromStorage(city));
  };

  return (
    <>
      <h1>Cities</h1>
      <AddCityForm></AddCityForm>
      <CityList
        cities={citiesState.cities}
        title="Added cities"
        removeCity={removeCity}
      ></CityList>
    </>
  );
};
