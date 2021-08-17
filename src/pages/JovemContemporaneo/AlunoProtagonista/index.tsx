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

          <ContentText>
            <p>
              O aluno está no centro da aprendizagem, então, precisamos
              propiciá-lo a situações que possa se desenvolver e superar
              desafios a partir do seu repertório. Para efetivarmos o aluno como
              centro da nossa ação educativa, precisamos oferecer condições para
              o protagonismo discente, o que implica planejar as nossas aulas
              considerando a <strong>participação do aluno</strong> como eixo
              norteador.
            </p>
            <p>
              As aulas Mooney trazem situações que podem ser reconhecidas e
              identificadas pelos jovens de um modo simples e aberto evitando
              qualquer tipo de preconceito e articulando a participação dos
              alunos como elemento central da aula. A prática é um elemento
              fundamental para o desenvolvimento dos temas trabalhados de modo
              que as teorias e conceitos envolvendo as finanças se articulam com
              as situações do cotidiano e vivências em que o aluno possa aplicar
              e exercitar aquilo que aprendeu.
            </p>
            <p>
              É importante considerarmos que os jovens são nativos digitais,
              estão imersos na tecnologia e lidam diariamente com seus
              smartphones e outras ferramentas digitais. Cabe ao professor
              construir o senso crítico dos alunos para filtrar informações,
              analisá-las e distinguir o que é verdadeiro do que é falso.
            </p>
            <p>
              Além disso, os alunos também podem aprender a utilizar as
              Tecnologias de Informação e Comunicação (TIC) como ferramentas
              para melhorar a sua vida e a das outras pessoas, incluindo a
              cidadania digital e o empreendedorismo em seu projeto de vida. A
              construção de sujeitos conscientes e ativos deve ser a finalidade
              dos projetos de vida, para que os alunos tenham melhores condições
              de realização e satisfação pessoal sem deixar de promover
              transformações nas suas realidades sociais.
            </p>
          </ContentText>

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
