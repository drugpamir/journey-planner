import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { citiesSlice } from "./slice";

const rootReducer = combineSlices(citiesSlice);

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({ serializableCheck: false }),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; //typeof setupStore.dispatch;
