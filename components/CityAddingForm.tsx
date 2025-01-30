import React, { useState } from "react";
import DialogButton from "./DialogButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCityInfo, addCityToStorage } from "../redux/citiesActionCreators";

function CityAddingForm() {
  const [cityName, setCityName] = useState<string>("");
  const { addingCity } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  const handleFetchCityInfo = (e: any) => {
    e.preventDefault();
    dispatch(fetchCityInfo(cityName));
  };

  const handleAddCityToStorage = (e: any) => {
    e.preventDefault();
    console.log("handleAddCity for city:", addingCity);
    if (addingCity) {
      dispatch(addCityToStorage(addingCity));
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
      <DialogButton onClick={handleFetchCityInfo}>Get info</DialogButton>
      <DialogButton onClick={handleAddCityToStorage}>Add city</DialogButton>
    </form>
  );
}

export default CityAddingForm;
