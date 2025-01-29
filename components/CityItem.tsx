import React from "react";
import { City } from "../models/City";
import DialogButton from "./DialogButton";

interface Props {
  index: number;
  city: City;
  removeCity(city: City): void;
}

function CityItem(props: Props) {
  console.log("props of CityItem:", props);
  return (
    <div className="city">
      <div className="city__content">
        <strong>
          {props.index}. {props.city.name}
        </strong>
        <div className="city__btns">
          <button onClick={() => props.removeCity(props.city)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CityItem;
