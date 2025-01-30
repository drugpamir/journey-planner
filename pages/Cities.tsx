import React from "react";
import { useNavigate } from "react-router-dom";

import CityAddingForm from "../components/CityAddingForm";
import CityList from "../components/CityList";
import { City } from "../models/City";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { removeCityFromStorage } from "../redux/citiesActionCreators";
import { AppRoutes } from "../utils/consts";

interface Props {
  route: AppRoutes;
}

const Cities = ({ route: routeCities }: Props) => {
  const { cities } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navToCityJourneys = (city: City) => {
    console.log(`GOTO: ${routeCities}/${city.id}`);
    navigate(`${routeCities}/${city.id}`);
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
