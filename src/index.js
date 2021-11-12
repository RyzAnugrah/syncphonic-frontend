import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./assets/styles/index.css";

// jQuery
import "jquery/dist/jquery.min.js";
import "jquery.easing/jquery.easing.min.js";
import "./vendor/jquery/jquery.min.js";
import "./vendor/jquery-easing/jquery.easing.min.js";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./vendor/bootstrap/js/bootstrap.bundle.min.js";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Font Awesome
import "./vendor/fontawesome-free/css/all.min.css"

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
