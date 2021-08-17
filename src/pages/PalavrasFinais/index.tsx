import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import presentationIcon from "../../assets/icons/apresentacao.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../styles";

const PalavrasFinais: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/palavras-finais">
              <strong>5.0 Palavras Finais</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#fdd547">
          <div className="title">
            <article>
              <img src={presentationIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h3>5.0 Palavras Finais</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Esta proposta pedagógica é um documento vivo que será revisitado
              ao final de cada ciclo para incorporar inovações educacionais e
              tecnológicas, além de processos da sociedade contemporânea,
              características das juventudes e aspectos do mundo do trabalho,
              das finanças e do empreendedorismo. O processo de revisão dos
              fundamentos, das práticas e dos materiais da Mooney será realizado
              mediante aos feedbacks das escolas parceiras, dos professores, dos
              alunos, dos pais e das comunidades internas e externas da escola,
              incluindo pesquisadores e especialistas nas áreas de educação,
              psicologia, finanças e empreendedorismo.
            </p>
            <p>
              Esperamos que a diversidade de ambientes e processos educacionais,
              nas quais as aulas Mooney são aplicadas proporcionem
              aprofundamento as nossas práticas e criem ciclos virtuosos de
              engajamento e comunicação para a difusão e a criação de novas
              formas de pensar e praticar a educação para a formação dos
              cidadãos do século XXI.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/referencias">6.0 - Referências</Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default PalavrasFinais;
