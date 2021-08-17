import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const CompetenciasSeculo: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/pilares-educacionais">4.0 Pilares Educacionais</Link>
          </li>
          <li>
            <Link to="/competenciais-para-o-seculo-xxi">
              <strong>4.1 Competências para o Século XXI</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#F13A45">
          <div className="title">
            <article>
              <img src={squareIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h4>4.0 Pilares Educacionais</h4>
              <img src={arrowRight} alt="arrow" />
              <h3>4.1 Competências para o Século XXI</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Mediante os desafios e as tendências do mundo contemporâneo, a
              construção de competências torna-se um imperativo, uma vez que o
              diferencial na vida pessoal, social e profissional é e será a
              capacidade de adaptação, equilíbrio e aplicação contextualizada de
              soluções para diversos problemas em circunstâncias também
              diversificadas.
            </p>
            <p>
              Para Charles Fadel, professor e pesquisador da Universidade de
              Harvard e fundador do CCR, a construção da competência compreende
              quatro dimensões interconectadas e complementares entre si: a
              dimensão do conhecimento, a dimensão das habilidades, a dimensão
              do caráter e a dimensão metacognitiva (FADEL; BIALIK; TRILLING,
              2015). O detalhamento destas dimensões e a sua articulação como
              objetos de aprendizagem dentro de estratégias pedagógicas
              inovadoras são objetivos para uma educação do futuro.
            </p>
            <h5>4.1.1 Dimensão do conhecimento (aprender a conhecer)</h5>
            <p>
              A estrutura de conhecimento do CCR envolve alguns conteúdos
              fundamentais para o desenvolvimento do ser humano como a
              alfabetização global, a alfabetização ambiental, o letramento
              informacional, o letramento digital, o pensamento sistêmico e o
              design thinking. O CCR articula os conhecimentos em três linhas
              complementares:
            </p>

            <ul>
              <li>Conceitos e metaconceitos</li>
              <li>Processos, métodos e ferramentas</li>
              <li>Ramificações, assuntos e tópicos</li>
            </ul>

            <p>
              Estas linhas de entendimento estruturam dois eixos, os
              conhecimentos tradicionais e os conhecimentos modernos com um grau
              crescente de interdisciplinaridade. Entre os conhecimentos
              tradicionais temos a matemática, as ciências naturais, a língua
              materna e as línguas estrangeiras, as ciências sociais e as artes.
              Já os conhecimentos modernos envolveriam o bem-estar físico,
              mental e social, finanças pessoais, empreendedorismo e negócios, a
              compreensão de mídias como o jornalismo digital ou o cinema, além
              das tecnologias e engenharias, incluindo conteúdos relacionados à
              programação, robótica e inteligência artificial, bioengenharia e
              técnicas avançadas de design e criação (FADEL; BIALIK; TRILLING,
              2015).
            </p>
            <p>
              Este conjunto de conhecimentos tradicionais aliados aos
              conhecimentos modernos caracterizam os conteúdos necessários a uma
              educação para o futuro e podem ser complementados pela estrutura
              de aprendizagens para o século XXI elaborada pela Parceria P21
              para a Aprendizagem do Século XXI - P21 Partnership for 21st
              Century Learning (BATTELLE FOR KIDS, 2021):
            </p>

            <ul>
              <li>consciência global</li>
              <li>alfabetização financeira e econômica</li>
              <li>alfabetização em negócios e empreendedorismo</li>
              <li>alfabetização cívica</li>
              <li>alfabetização em saúde</li>
              <li>alfabetização ambiental</li>
            </ul>

            <p>
              Notamos, portanto, que educação financeira, formação empreendedora
              e domínio de tecnologias aliadas ao desenvolvimento de uma
              consciência pessoal e coletiva definem os saberes necessários ao
              cidadão do século XXI.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="pilares-educacionais/bncc-novo-ensino-medio">
              4.2 A BNCC e o novo ensino médio
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default CompetenciasSeculo;
