import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import tabela5 from "../../../assets/tabela5.jpg";
import tabela6 from "../../../assets/tabela6.jpg";
import tabela7 from "../../../assets/tabela7.jpg";
import tabela8 from "../../../assets/tabela8.jpg";
import tabela9 from "../../../assets/tabela9.jpg";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const EstruturaPedagogica: React.FC = () => {
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
            <Link to="/pilares-educacionais/estrutura-pedagogica-mooney">
              <strong>4.4 Estrutura Pedagógica Mooney</strong>
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
              <h3>4.4 Estrutura Pedagógica Mooney</h3>
            </div>
          </div>

          <ContentText>
            <p>
              <strong>4.4.1 Ensino Fundamental II</strong>
            </p>
            <p>
              O material da Mooney é disponibilizado para professores e alunos
              de acordo com o pacote determinado pela escola. O professor tem
              acesso aos planos de aula, material este produzido com o máximo
              cuidado para que ele se sinta confortável e não tenha mais
              trabalho, pois sabemos que nem todos os professores têm
              conhecimentos prévios sobre os temas que abordaremos na educação
              financeira, e não é um pré-requisito que tenham.
            </p>
            <p>
              Todo o conteúdo abordado nas aulas é traduzido em uma linguagem
              mais jovem e dinâmica para ser disponibilizado aos alunos por meio
              de uma jornada de conhecimento dentro do app da Mooney. O
              professor pode pedir aos alunos que façam a jornada antes das
              aulas como um modelo de sala de aula invertido, ou que utilizem a
              jornada como um complemento de lição de casa a ser feito após as
              aulas. Caso a escola tenha disponível para os alunos computadores,
              tablets ou celulares para uso pedagógico com acesso a internet, o
              professor pode até utilizar a jornada para complementar as aulas
              dele.
            </p>
            <p>
              Trazemos como proposta para o Ensino Fundamental II uma
              sensibilização aos temas dos módulos apresentados na Seção 1. Para
              cada ano, de acordo com as idades e níveis de maturidade, os temas
              são trabalhados de forma espiral, com o intuito de o aluno, ao
              chegar no 9o ano do Ensino Fundamental II, já saiba como organizar
              e planejar suas finanças pessoais, além de entender os fatores que
              afetam o planejamento financeiro. A esquematização dos temas pode
              ser conferida abaixo, sendo que um aprofundamento de cada ano
              escolar está descrito logo em seguida:
            </p>
            <p>
              6º ano: Qual é a minha relação com o dinheiro? <br /> Entendimento
              da importância do tema - Aprendizagem de conceitos básicos de
              finanças e início da formação integral do indivíduo;
            </p>
            <p>
              7º ano: Como lidar com o dinheiro? <br /> Entendendo o contexto e
              o futuro - Conhecimento de como as finanças se aplicam no dia a
              dia e como o autoconhecimento é importante para o projeto de vida;
            </p>
            <p>
              8º Como me planejar? <br /> Aplicando as finanças na prática -
              Início da montagem do planejamento e como os elementos do dia a
              dia podem influenciar o planejamento;
            </p>
            <p>
              9º Como empresas funcionam? <br />
              Formação Integral Básica - Conhecimento de possibilidades de
              empreendedorismo e completude do projeto de vida;
            </p>

            <h5 className="center">6º ano</h5>
            <div className="tabela">
              <img src={tabela5} alt="tabela" />
            </div>

            <h5 className="center">7º ano</h5>
            <div className="tabela">
              <img src={tabela6} alt="tabela" />
            </div>

            <h5 className="center">8º ano</h5>
            <div className="tabela">
              <img src={tabela7} alt="tabela" />
            </div>

            <h5 className="center">9º ano</h5>
            <div className="tabela">
              <img src={tabela8} alt="tabela" />
            </div>

            <p>
              <strong>4.4.2 Ensino Médio - Mooney Lab I</strong>
            </p>
            <p>
              Já para o Ensino Médio, o foco do aluno muda para um planejamento
              de carreira. Independente de qual carreira o aluno decida seguir,
              ele vai ter que lidar com suas finanças. Então, a proposta trazida
              é de um programa que contemple o projeto de vida na perspectiva
              financeira.
            </p>
            <p>
              Como a BNCC estabelece matérias eletivas, o projeto de educação
              financeira da Mooney pode e deve ser oferecido para todos os anos
              do Ensino Médio. Por isso, criamos a proposta do primeiro módulo
              do Mooney Lab (outros módulos serão desenvolvidos para a
              continuidade nos próximos anos). Em 2022, a proposta do Mooney Lab
              I contará com uma oficina de investimentos. Como o aluno terá seu
              projeto de vida estabelecido e se planejado financeiramente,
              apresentaremos ferramentas, simulações, para que o aluno consiga
              entender como transformar a teoria do planejamento financeiro em
              ações práticas.
            </p>
            <p>
              A esquematização do Mooney Lab I pode ser conferida abaixo, sendo
              que um aprofundamento do conteúdo está descrito ao final desta
              seção:
            </p>
            <p>
              Mooney Lab I - Projeto de vida na perspectiva das finanças Pensar
              sobre o projeto de vida na perspectiva financeira entendendo o
              porquê o dinheiro é importante, além de investimentos de renda
              fixa e variável, aliado à simulações básicas para o entendimento
              das principais características;
            </p>
            <div className="tabela">
              <img src={tabela9} alt="tabela" />
            </div>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais/professor-mediador">
              4.5 O Professor Mediador
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default EstruturaPedagogica;
