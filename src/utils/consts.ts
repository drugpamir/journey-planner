export const SUBPATH_CITY_ID = "cityId";
export const SUBPATH_JOURNEY_ID = "journeyId";

export enum AppRoutes {
  LOGIN = `/login`,
  ABOUT = `/about`,
  CITIES = `/cities`,
  JOURNEYS = `/cities/:${SUBPATH_CITY_ID}/journeys`,
  JOURNEY_EDITOR = `/journeys/:${SUBPATH_JOURNEY_ID}`,
}

export const routeIfLogin: AppRoutes = AppRoutes.CITIES;
