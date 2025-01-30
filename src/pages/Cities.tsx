import React from "react";
import AddCityForm from "../components/Form.AddCity";
import CityList from "../components/CityList";
import { City } from "../models/City";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeCityFromStorage } from "../redux/actionCreators";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../utils/consts";

const Cities = () => {
  const citiesState = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navToCityJourneys = (city: City) => {
    console.log(`GOTO: ${AppRoutes.CITIES}/${city.id}`);
    navigate(`${AppRoutes.CITIES}/${city.id}`);
  };

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
        navToCityJourneys={navToCityJourneys}
        removeCity={removeCity}
      ></CityList>
    </>
  );
};

export default Cities;
