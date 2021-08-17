import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import Apresentacao from "./pages/Apresentacao";

import MundoMooney from "./pages/MundoMooney";

import AlfabetizacaoFinanceira from "./pages/AlfabetizacaoFinanceira";
import EducacaoFinanceira from "./pages/AlfabetizacaoFinanceira/EducacaoFinanceira";
import CompetenciasSocioemocionais from "./pages/AlfabetizacaoFinanceira/CompetenciaisSocioemocionais";
import EducacaoTecnologias from "./pages/AlfabetizacaoFinanceira/EducacaoTecnologias";

import PilaresEducacionais from "./pages/PilaresEducacionais";
import CompetenciasSeculo from "./pages/PilaresEducacionais/CompetenciasSeculo";

import JovemContemporaneo from "./pages/JovemContemporaneo";
import DesenvolvimentoIdade from "./pages/JovemContemporaneo/DesenvolvimentoIdade";
import AlunoProtagonista from "./pages/JovemContemporaneo/AlunoProtagonista";

import ScrollToTop from "./utils/ScrollToTop";
import PlataformaMooney from "./pages/AlfabetizacaoFinanceira/PlataformaMooney";

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
          path="/alfabetizacao-financeira/educacao-financeira"
          component={EducacaoFinanceira}
          exact
        />
        <Route
          path="/alfabetizacao-financeira/competencias-socioemocionais"
          component={CompetenciasSocioemocionais}
          exact
        />
        <Route
          path="/alfabetizacao-financeira/educacao-tecnologias-gamificacao"
          component={EducacaoTecnologias}
          exact
        />
        <Route
          path="/alfabetizacao-financeira/plataforma-mooney"
          component={PlataformaMooney}
          exact
        />

        <Route
          path="/jovem-contemporaneo"
          component={JovemContemporaneo}
          exact
        />
        <Route
          path="/jovem-contemporaneo/desenvolvimento-conforme-idade"
          component={DesenvolvimentoIdade}
          exact
        />
        <Route
          path="/jovem-contemporaneo/aluno-protagonista"
          component={AlunoProtagonista}
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
