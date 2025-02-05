// import { randomUUID } from "crypto";

export function generateID(): string {
  return new Date().getTime().toString();
  //   return randomUUID();
}

export function generateLatID(lat: number, lng: number): string {
  return `${lat.toFixed(7)}_${lng.toFixed(7)}`;
}
