import { generateID } from "../utils/dataGenerator";
import { Coords } from "./Coords";
import { Journey } from "./Journey";

export class City {
  private _id: string;
  private _name: string;
  private _localNames: Record<string, string>;
  private _localName: string;
  private _state: string;
  private _country: string;
  private _coords: Coords;
  private _journeys: Journey[];

  constructor({
    name,
    local_names,
    state,
    country,
    lat,
    lon,
  }: {
    name: string;
    local_names: object;
    state: string;
    country: string;
    lat: number;
    lon: number;
  }) {
    this._id = generateID();
    this._name = name;

    this._localNames = { ...local_names };
    const locale = navigator.language;
    this._localName = this._localNames[locale];

    this._state = state;
    this._country = country;
    this._coords = { latitude: lat, longitude: lon };
    this._journeys = [];
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get localName() {
    return this._localName;
  }

  public get state() {
    return this._state;
  }

  public get country() {
    return this._country;
  }

  public get coords() {
    return this._coords;
  }

  public get journeys() {
    return this._journeys;
  }
}
