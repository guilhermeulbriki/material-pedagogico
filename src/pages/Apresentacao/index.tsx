import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import presentationIcon from "../../assets/icons/apresentacao.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../styles";

const Apresentacao: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/apresentacao">
              <strong>Apresentação</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#485AF0">
          <div className="title">
            <article>
              <img src={presentationIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h3>Apresentação</h3>
            </div>
          </div>

          <ContentText>
            <h5>Olá, educador!</h5>
            <p>
              Pense, por alguns instantes, em como seria a sua vida atualmente
              se você tivesse aprendido durante a infância ou adolescência como
              se relacionar com o dinheiro de uma forma saudável e sustentável.
              Provavelmente, você teria organizado o seu projeto de vida de
              forma diferente: teria investido em oportunidades que não sabia
              que eram boas e utilizado melhor o seu dinheiro. Tem algo sobre
              finanças e organização pessoal que você aprendeu com as
              experiências da vida?
            </p>
            <p>
              E se os seus alunos tivessem a oportunidade de entender o valor do
              dinheiro para a realização pessoal e coletiva? Se a escola, a
              família e a sociedade proporcionassem situações para que os nossos
              jovens aprendessem na prática o que significa receita, despesa,
              investimento, fluxo de caixa e tantos outros conceitos que nos
              ajudam a compreender as finanças? Possivelmente, o planejamento de
              vida deles seria positivamente impactado, gerando maior satisfação
              e realização pessoal e coletiva.
            </p>
            <p>
              Nós vamos te apresentar a Mooney, um novo mundo de Alfabetização
              Financeira! Nele, cresceu e se desenvolveu uma metodologia
              inovadora que envolve tecnologias digitais, competências
              socioemocionais e cognitivas.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/mundo-mooney">1.0 - O Mundo Mooney</Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default Apresentacao;
