import React, { useState, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes";
import { LightTheme } from "./components/Header/Navbar/Navbar/index";
import Navbar from "./components/Header/Navbar/Navbar/index";
import MobileNavbar from "./components/Header/Navbar/MobileNavbar/index";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log(user && user);
  }, [user]);

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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Route
      {...rest}
      render={() =>
        name !== "masuk" && name !== "daftar" ? (
          <>
            <Navbar light={LightTheme ? 1 : 0} name={name} toggle={toggle} />
            <MobileNavbar
              light={LightTheme ? 1 : 0}
              name={name}
              isOpen={isOpen}
              toggle={toggle}
            />
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
