import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter } from "react-router-dom";

import RelayEnvironment from "./RelayEnvironment";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
