import React from "react";

import { City } from "../models/City";
import DialogButton from "./DialogButton";

interface Props {
  index: number;
  item: City;
  onChooseItem(city: City): void;
  onRemoveItem(city: City): void;
}

function CityItem({ index, item, onChooseItem, onRemoveItem }: Props) {
  return (
    <div className="city">
      <div className="city__content">
        <strong>
          {index}. {item.name}
        </strong>
      </div>
      <div className="city__btns">
        <DialogButton onClick={() => onChooseItem(item)}>
          To journeys
        </DialogButton>
        <DialogButton onClick={() => onRemoveItem(item)}>
          Remove city
        </DialogButton>
      </div>
    </div>
  );
}

export default CityItem;
