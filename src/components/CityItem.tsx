import React from "react";
import { City } from "../models/City";
import DialogButton from "./DialogButton";

interface Props {
  index: number;
  city: City;
  navToCityJourneys(city: City): void;
  removeCity(city: City): void;
}

function CityItem({ index, city, navToCityJourneys, removeCity }: Props) {
  return (
    <div className="city">
      <div className="city__content">
        <strong>
          {index}. {city?.name}
        </strong>
      </div>
      <div className="city__btns">
        <DialogButton onClick={() => navToCityJourneys(city)}>
          To journeys
        </DialogButton>
        <DialogButton onClick={() => removeCity(city)}>
          Remove city
        </DialogButton>
      </div>
    </div>
  );
}

export default CityItem;
