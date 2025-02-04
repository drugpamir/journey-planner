import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JourneyList from "../components/JourneyList";
import { SUBPATH_CITY_ID } from "../utils/consts";
import MapPanel from "../components/MapPanel";
import { City } from "../models/City";
import { getStorageCities } from "../redux/citiesActionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const Journeys = () => {
  console.log("journeys page");

  const [city, setCity] = useState<City | undefined>(undefined);

  const { cities, isLoading } = useAppSelector((state) => state.cities);

  const params = useParams();
  let cityId = params[SUBPATH_CITY_ID];

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCities = async () => {
      console.log("cities at first:", cities);
      if (!cities.length) {
        await dispatch(getStorageCities()).unwrap();
        console.log("cities dispatched:", cities);
      }
      console.log("cityId:", cityId);
      const foundCity = cities.find((city) => city.path === cityId);
      if (foundCity) {
        setCity(foundCity);
      }
    };
    fetchCities();
  }, [isLoading, cityId]);

  return (
    <>
      <h1>Journeys for {city?.local_name}</h1>
      {city && <MapPanel lat={city?.lat || 0} lon={city?.lon || 0}></MapPanel>}
      <JourneyList
        title={`Journeys for ${city?.local_name}`}
        items={city?.journeys || []}
      ></JourneyList>
    </>
  );
};

export default Journeys;
