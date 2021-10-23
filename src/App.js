import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AppRoutes } from "./routes";
import { useSelector } from "react-redux";
import { ThemeNavbar } from "./components/Header/Navbar/Navbar/index";
import Navbar from "./components/Header/Navbar/Navbar/index";
import MobileNavbar from "./components/Header/Navbar/MobileNavbar/index";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(`App ${user}`);

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

const ProtectedAuth = ({ name, location, component: Component, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Route
      {...rest}
      render={() =>
        name !== "differentPage" ? (
          <>
            {location.pathname !== "/syncphonic-frontend/masuk" &&
              location.pathname !== "/syncphonic-frontend/daftar" && (
                <Navbar {...ThemeNavbar} name={name} toggle={toggle} />
              )}
            {location.pathname !== "/syncphonic-frontend/masuk" &&
              location.pathname !== "/syncphonic-frontend/daftar" && (
                <MobileNavbar
                  {...ThemeNavbar}
                  name={name}
                  isOpen={isOpen}
                  toggle={toggle}
                />
              )}
            <Component />
            {location.pathname !== "/syncphonic-frontend/masuk" &&
              location.pathname !== "/syncphonic-frontend/daftar" && <Footer />}
          </>
        ) : (
          <Component />
        )
      }
    ></Route>
  );
};

export default App;
