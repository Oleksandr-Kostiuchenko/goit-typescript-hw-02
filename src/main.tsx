//* React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* Components & provider
import "./index.css";
import WrapperComponent from "./components/WrapperComponent/WrapperComponent";
import LangProvider from "./context/lang.jsx";

//* Router
import { BrowserRouter } from "react-router-dom";

//* Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//* Persistor
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <LangProvider>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <WrapperComponent />
          </PersistGate>
        </Provider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>
);
