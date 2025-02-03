import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import JourneyList from "../components/JourneyList";
import { Journey } from "../models/Journey";
import { AppRoutes, SUBPATH_JOURNEY_ID } from "../utils/consts";
import useCity from "../hooks/useCity";

const Journeys = () => {
  const navigate = useNavigate();
  const [city] = useCity();

  useEffect(() => {
    if (!city) {
      navigate(AppRoutes.ERROR_404);
    }
  }, []);

  const onChooseItem = (journey: Journey) => {
    if (!journey) {
      return;
    }
    const url = AppRoutes.JOURNEY_EDITOR.replace(
      ":" + SUBPATH_JOURNEY_ID,
      journey.id,
    );
    navigate(url);
  };

  const onRemoveItem = (journey: Journey) => {
    // dispatch(removeJourneyFromStorage(city));
  };

  return (
    <>
      <h1>Journeys for {city?.local_name}</h1>
      <JourneyList
        title={`Journeys for ${city?.local_name}`}
        items={city?.journeys || []}
        onChooseItem={onChooseItem}
        onRemoveItem={onRemoveItem}
      ></JourneyList>
    </>
  );
};

export default Journeys;
