import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const EscolaFamilia: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/jovem-contemporaneo">3.0 - O Jovem Contemporâneo</Link>
          </li>
          <li>
            <Link to="/jovem-contemporaneo/escola-familia-sociedade">
              <strong>3.4 - Escola, Família e Sociedade</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#D2269A">
          <div className="title">
            <article>
              <img src={moneyIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h4>3.0 - O Jovem Contemporâneo</h4>
              <img src={arrowRight} alt="arrow" />
              <h3>3.4 - Escola, Família e Sociedade</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A família é o primeiro grupo de socialização do jovem. A escola
              deve ser o segundo, porém, a família continua sendo fundamental no
              aprendizado do jovem. O professor e a escola devem sempre
              trabalhar junto à família, com cuidado e atenção. Todos os pais e
              responsáveis querem o melhor para seus filhos, querem que eles
              aprendam, mesmo que tenham dificuldades. É preciso sensibilidade
              ao falar com a família sobre a educação dos jovens.
            </p>
            <p>
              Além disso, independente dos contextos familiares, uma máxima
              sempre se mantém: todo aluno é capaz de aprender. O professor pode
              identificar possíveis contextos familiares e trabalhar com eles,
              sem se utilizar do estigma de “não aprende em razão da situação
              familiar”, manejando sutilmente o caráter humano e relacional da
              educação. Quando situações na família estão dificultando a
              concentração do aluno, o docente deve conversar e propor soluções
              em conjunto a todos os envolvidos no processo de
              ensino-aprendizagem.
            </p>
            <p>
              Observando a dinâmica do mundo contemporâneo, notamos a
              instabilidade nas relações e instituições decorrente do nosso modo
              de vida acelerado e cada vez mais volátil. Os jovens estão imersos
              nesse contexto e percebem o mundo em que estão vivendo. Os adultos
              formadores são aqueles capazes de oferecer direcionamento e
              acolhimento frente aos diferentes tipos de comportamentos e
              identidades culturais, tendo em vista os diversos contextos
              familiares existentes. Portanto, ao pensarmos em um processo de
              Alfabetização Financeira contemplamos de forma integradora as
              ações da escola, da família e da sociedade na formação dos jovens.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais">4.0 - Pilares Educacionais</Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default EscolaFamilia;
