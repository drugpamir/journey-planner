import React from "react";
import { useNavigate } from "react-router-dom";

import { Journey } from "../models/Journey";
import JourneyItem from "./JourneyItem";
import { AppRoutes, SUBPATH_JOURNEY_ID } from "../utils/consts";

interface Props {
  title: string;
  items: Journey[];
}

const JourneyList = ({ title, items }: Props) => {
  const navigate = useNavigate();

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

  if (!items.length) {
    return <h2 style={{ textAlign: "center" }}>Journeys not added</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {items.map((item, index) => (
        <JourneyItem
          index={index + 1}
          item={item}
          onChooseItem={onChooseItem}
          onRemoveItem={onRemoveItem}
          key={item.id}
        ></JourneyItem>
      ))}
    </div>
  );
};

export default JourneyList;
