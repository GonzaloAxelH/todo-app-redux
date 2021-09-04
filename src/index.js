import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./data/store";
import ThemeProviderFull from "./theme/ThemeProvider";
import { saveStateToLocalStorage } from "./data/actionCreators";
import "./index.css";

store.subscribe(() => {
   saveStateToLocalStorage(store.getState().todos);
   console.log(store.getState().todos);
});

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProviderFull>
        <App />
      </ThemeProviderFull>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
