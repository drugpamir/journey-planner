import React from "react";

import { Journey } from "../models/Journey";
import JourneyItem from "./JourneyItem";

interface Props {
  title: string;
  items: Journey[];
  onChooseItem(item: Journey): void;
  onRemoveItem(item: Journey): void;
}

const JourneyList = ({ title, items, onChooseItem, onRemoveItem }: Props) => {
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
