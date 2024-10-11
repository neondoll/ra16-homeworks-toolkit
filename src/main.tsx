import App from "./App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/ra16-homeworks-toolkit/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
