import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./redux/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
);
