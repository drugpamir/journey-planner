import React from "react";

import { Journey } from "../models/Journey";
import DialogButton from "./DialogButton";

interface Props {
  index: number;
  item: Journey;
  onChooseItem(item: Journey): void;
  onRemoveItem(item: Journey): void;
}

const JourneyItem = ({ index, item, onChooseItem, onRemoveItem }: Props) => {
  return (
    <div className="journey">
      <div className="journey__content">
        <strong>
          {index}. {item.title}
        </strong>
      </div>
      <div className="journey__btns">
        <DialogButton onClick={() => onChooseItem(item)}>
          To journeys
        </DialogButton>
        <DialogButton onClick={() => onRemoveItem(item)}>
          Remove city
        </DialogButton>
      </div>
    </div>
  );
};

export default JourneyItem;
