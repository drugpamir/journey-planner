import React from "react";
import { City } from "../models/City";
import CityItem from "./CityItem";

interface Props {
  title: string;
  cities: City[];
  removeCity(city: City): void;
}

function CityList(props: Props) {
  if (!props.cities.length) {
    return <h2 style={{ textAlign: "center" }}>Cities not added</h2>;
  }

  console.log("props.cities:", props.cities);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{props.title}</h2>
      {props.cities.map((city, index) => (
        <CityItem
          index={index + 1}
          city={city}
          removeCity={props.removeCity}
          key={city.id}
        ></CityItem>
      ))}
    </div>
  );
}

export default CityList;
