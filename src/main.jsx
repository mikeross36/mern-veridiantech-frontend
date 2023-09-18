import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import store from "./store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { AppContextProvider } from "./contexts/AppContext.jsx";

if (import.meta.env.VITE_NODE_ENV === "production") disableReactDevTools();

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
