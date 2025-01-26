import { Coords } from "./Coords";
import { Journey } from "./Journey";

export type Region = {
  id: string;
  userId: string;
  name: string;
  coords: Coords;
  journeys: Journey[];
};
