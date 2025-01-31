import React, { useState } from "react";
import DialogButton from "./DialogButton";
import { useAppDispatch } from "../hooks/redux";
import { fetchCityInfo } from "../redux/citiesActionCreators";

function CityAddingForm() {
  const [cityName, setCityName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddCity = (e: any) => {
    e.preventDefault();
    dispatch(fetchCityInfo(cityName));
    setCityName("");
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
        minLength={2}
        required
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      {cityName && (
        <DialogButton onClick={handleAddCity}>Add city</DialogButton>
      )}
    </form>
  );
}

export default CityAddingForm;
