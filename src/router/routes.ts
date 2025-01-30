import Login from "../pages/Login";
import About from "../pages/About";
import Cities from "../pages/Cities";
import JourneyEditor from "../pages/JourneyEditor";
import Journeys from "../pages/Journeys";
import { AppRoutes } from "../utils/consts";

export type AppRoute = {
  route: string;
  page: (...args: any) => React.JSX.Element; //eslint-disable-line @typescript-eslint/no-explicit-any
};

export const publicRoutes: AppRoute[] = [
  {
    route: AppRoutes.LOGIN,
    page: Login,
  },
  {
    route: AppRoutes.ABOUT,
    page: About,
  },
];

export const privateRoutes: AppRoute[] = [
  {
    route: AppRoutes.LOGIN,
    page: Login,
  },
  {
    route: AppRoutes.ABOUT,
    page: About,
  },
  {
    route: AppRoutes.CITIES,
    page: Cities,
  },
  {
    route: AppRoutes.JOURNEYS,
    page: Journeys,
  },
  {
    route: AppRoutes.JOURNEY_EDITOR,
    page: JourneyEditor,
  },
];
