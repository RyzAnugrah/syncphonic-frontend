import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AppRoutes } from "./routes";

import Navbar from "./components/Navbar/NavbarMain";
import Footer from "./components/Footer/FooterMain";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Switch>
          {AppRoutes.map(({ name, path, exact, component: Component }) => (
            <ProtectedAuth
              exact={exact}
              path={path}
              key={path}
              name={name}
              component={Component}
            ></ProtectedAuth>
          ))}
          <Redirect from="*" to="/error-404" />
        </Switch>
      </Suspense>
    </Router>
  );
};

const ProtectedAuth = ({ name, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        name !== "differentPage" ? (
          <>
            <Navbar name={name} />
            <Component />
            <Footer />
          </>
        ) : (
          <Component />
        )
      }
    ></Route>
  );
};

export default App;
