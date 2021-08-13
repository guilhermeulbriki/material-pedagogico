import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
