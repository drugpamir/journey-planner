import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

import JourneyList from "../components/JourneyList";
import { AppRoutes, SUBPATH_CITY_ID } from "../utils/consts";
import { City } from "../models/City";

const Journeys = () => {
  const [city, setCity] = useState<City | undefined>(undefined);

  const { cities } = useAppSelector((state) => state.cities);

  const params = useParams();
  let cityId = params[SUBPATH_CITY_ID];

  useEffect(() => {
    if (!cities) {
      const navigate = useNavigate();
      navigate(AppRoutes.ERROR_404);
    }
    setCity(cities.find((c) => c.path === cityId));
  }, []);

  return (
    <>
      <h1>Journeys for {city?.local_name}</h1>
      <JourneyList
        title={`Journeys for ${city?.local_name}`}
        items={city?.journeys || []}
      ></JourneyList>
    </>
  );
};

export default Journeys;
