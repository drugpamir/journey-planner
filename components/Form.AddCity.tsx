import React, { useState } from "react";
import { Form } from "react-router-dom";
import DialogButton from "./DialogButton";
import { useAppDispatch } from "../hooks/redux";
import { getAllCityInfo } from "../redux/actionCreators";

function AddCityForm() {
  const [cityName, setCityName] = useState("");
  const dispatch = useAppDispatch();

  const fetchCityInfo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    dispatch(getAllCityInfo(cityName));
  };

  return (
    <>
      <input
        type="text"
        name="city_name"
        id="city-name"
        placeholder="Moscow"
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchCityInfo}>Get info</button>
    </>
    // <Form>
    //   <label htmlFor="city-name">City</label>
    //   <input
    //     type="text"
    //     name="city_name"
    //     id="city-name"
    //     placeholder="Moscow"
    //     onChange={(e) => setCityName(e.target.value)}
    //   />
    //   <button onClick={fetchCityInfo}>Get info</button>
    //   {/* <DialogButton>Add city</DialogButton> */}
    // </Form>
  );
}

export default AddCityForm;
