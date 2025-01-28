// import { randomUUID } from "crypto";

export function generateID(): string {
  return new Date().getTime().toString();
  //   return randomUUID();
}
