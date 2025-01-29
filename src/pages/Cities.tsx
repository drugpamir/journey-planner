import React from "react";
import AddCityForm from "../components/Form.AddCity";
import CityList from "../components/CityList";
import { City } from "../models/City";
import { useAppSelector } from "../hooks/redux";
import { citiesSlice } from "../redux/slice";

export const TO_CITIES = "/cities";

export const Cities = () => {
  const removeCity = (city: City) => {};
  const citiesState = useAppSelector((state) => state.cities);
  console.log("citiesState:" + citiesState);

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
