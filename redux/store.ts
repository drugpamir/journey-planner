import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./slice";

const rootReducer = combineSlices(mainSlice);

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; //typeof setupStore.dispatch;
