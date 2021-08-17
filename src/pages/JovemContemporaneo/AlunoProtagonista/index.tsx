import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const AlunoProtagonista: React.FC = () => {
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
            <Link to="/jovem-contemporaneo/aluno-protagonista">
              <strong>3.3 - O Aluno Protagonista</strong>
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
              <h3>3.3 - O Aluno Protagonista</h3>
            </div>
          </div>

          <ContentText></ContentText>

          <div className="redirect">
            <Link to="/jovem-contemporaneo/escola-familia-sociedade">
              3.4 - Escola, Família e Sociedade
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default AlunoProtagonista;
