import { Coords } from "./Coords";
import { Journey } from "./Journey";

export type Location = {
  id: string;
  name: string;
  coords: Coords;
  journeys: Journey[];
};
