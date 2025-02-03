import React from "react";

import { City } from "../models/City";
import CityItem from "./CityItem";

interface Props {
  title: string;
  items: City[];
  onChooseItem(city: City): void;
  onRemoveItem(city: City): void;
}

function CityList({ title, items, onChooseItem, onRemoveItem }: Props) {
  if (!items.length) {
    return <h2 style={{ textAlign: "center" }}>Cities not added</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {items.map((item, index) => (
        <CityItem
          index={index + 1}
          item={item}
          onChooseItem={onChooseItem}
          onRemoveItem={onRemoveItem}
          key={item.path}
        ></CityItem>
      ))}
    </div>
  );
}

export default CityList;
