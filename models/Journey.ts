import { Point } from "./Point";

export type Journey = {
  id: string;
  locationId: string;
  title: string;
  description?: string;
  points: Point[];
};
