import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CityAddingForm from "../components/CityAddingForm";
import CityList from "../components/CityList";
import { City } from "../models/City";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeCityFromStorage } from "../redux/citiesActionCreators";
import { AppRoutes, SUBPATH_CITY_ID } from "../utils/consts";

const Cities = () => {
  const { cities } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const parentRoute = location.pathname;

  const navToCityJourneys = (city: City) => {
    if (!city) {
      return;
    }
    const url = AppRoutes.JOURNEYS.replace(":" + SUBPATH_CITY_ID, city.id);
    navigate(url);
  };

  const removeCity = (city: City) => {
    dispatch(removeCityFromStorage(city));
  };

  return (
    <>
      <h1>Cities</h1>
      <CityAddingForm></CityAddingForm>
      <CityList
        cities={cities}
        title="Added cities"
        navToCityJourneys={navToCityJourneys}
        removeCity={removeCity}
      ></CityList>
    </>
  );
};

export default Cities;
