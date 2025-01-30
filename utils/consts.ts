export enum AppRoutes {
  LOGIN = "/login",
  ABOUT = "/about",
  CITIES = "/cities",
  JOURNEYS = "/editor",
  JOURNEY_EDITOR = "/journeys",
}

export const routeIfLogin: AppRoutes = AppRoutes.CITIES;
