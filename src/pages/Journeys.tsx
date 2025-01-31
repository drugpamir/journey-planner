import React from "react";
import { useParams } from "react-router-dom";

import { SUBPATH_CITY_ID } from "../utils/consts";
import useCity from "../hooks/useCity";

const Journeys = () => {
  const params = useParams();
  const cityId = params[SUBPATH_CITY_ID];
  if (!cityId) {
    return null;
  }
  const [city, setCity] = useCity();
  if (cityId !== city?.id) {
    console.log("city.id is not equal cityId query parameter");
    setCity(null); //TODO: добавить в хук setCityName
  }

  return <h1>Journeys for {city?.local_name}</h1>;
};

export default Journeys;
