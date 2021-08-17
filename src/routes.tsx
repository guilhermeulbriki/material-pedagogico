import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Apresentacao from "./pages/Apresentacao";
import MundoMooney from "./pages/MundoMooney";
import AlfabetizacaoFinanceira from "./pages/AlfabetizacaoFinanceira";
import PilaresEducacionais from "./pages/PilaresEducacionais";
import CompetenciasSeculo from "./pages/PilaresEducacionais/CompetenciasSeculo";

import ScrollToTop from "./utils/ScrollToTop";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/apresentacao" component={Apresentacao} exact />

        <Route path="/mundo-mooney" component={MundoMooney} exact />

        <Route
          path="/alfabetizacao-financeira"
          component={AlfabetizacaoFinanceira}
          exact
        />

        <Route
          path="/pilares-educacionais"
          component={PilaresEducacionais}
          exact
        />
        <Route
          path="/pilares-educacionais/competenciais-para-o-seculo-xxi"
          component={CompetenciasSeculo}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
