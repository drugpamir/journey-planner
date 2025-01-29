import React from "react";
import AddCityForm from "../components/Form.AddCity";

export const TO_CITIES = "/cities";

export const Cities = () => {
  return (
    <>
      <h1>Cities</h1>
      <AddCityForm></AddCityForm>
    </>
  );
};
