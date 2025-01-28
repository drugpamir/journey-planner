import { generateID } from "../utils/dataGenerator";
import { Coords } from "./Coords";
import { Journey } from "./Journey";

export class City {
  private _id: string;
  private _name: string;
  private _localNames: Record<string, string>;
  private _localName: string;
  private _state: string;
  private _coords: Coords;
  private _journeys: Journey[];

  constructor(
    name: string,
    local_names: object,
    state: string,
    latitude: number,
    longitude: number,
  ) {
    this._id = generateID();
    this._name = name;

    this._localNames = { ...local_names };
    const locale = navigator.language;
    this._localName = this._localNames[locale];

    this._state = state;
    this._coords = { latitude, longitude };
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

  public get coords() {
    return this._coords;
  }

  public get journeys() {
    return this._journeys;
  }
}
