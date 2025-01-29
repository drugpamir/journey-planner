import React, { useState } from "react";
import { Form } from "react-router-dom";
import DialogButton from "./DialogButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCityInfo, addCityToStorage } from "../redux/actionCreators";
import { City, CityByDefault } from "../models/City";

function AddCityForm() {
  const [cityName, setCityName] = useState<string>("");
  const citiesState = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  const onFetchCityInfo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(fetchCityInfo(cityName));
  };

  const onAddCity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("onAddCity for city:", citiesState.addingCity);
    if (citiesState.addingCity) {
      dispatch(addCityToStorage(citiesState.addingCity));
      setCityName("");
    }
  };

  return (
    <form>
      <label htmlFor="city-name" style={{ margin: "20px" }}>
        City
      </label>
      <input
        type="text"
        name="city_name"
        id="city-name"
        placeholder="Moscow"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <DialogButton onClick={onFetchCityInfo}>Get info</DialogButton>
      <DialogButton onClick={onAddCity}>Add city</DialogButton>
    </form>
  );
}

export default AddCityForm;
