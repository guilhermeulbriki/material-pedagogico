import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const ProfessorMediador: React.FC = () => {
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
            <Link to="/pilares-educacionais/professor-mediador">
              <strong>4.5 Professor Mediador</strong>
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
              <h3>4.5 Professor Mediador</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A Estrutura Pedagógica Mooney contempla diversos temas a serem
              incorporados de forma orgânica nos currículos das escolas
              parceiras e, portanto, deve ser operacionalizada conforme as
              competências e talentos dos professores indicados para aplicar as
              aulas do “Programa de Alfabetização Financeira”.
            </p>
            <p>
              O perfil docente para ministrar as aulas da Mooney contempla
              habilidades para mediar a construção do conhecimento. Nesse caso,
              cabe aos docentes dar vida às situações de aprendizagem propostas
              pelos planos de aula elaborados conforme o seu estilo de docência,
              fazendo as adaptações necessárias às circunstâncias de cada escola
              ou sala de aula. O professor deve personalizar as situações de
              aprendizagem levando em consideração o Projeto Pedagógico da
              escola em que atua e as suas estratégias para uma boa condução nas
              aulas. Isso significa que a escola e o professor têm autonomia
              pedagógica frente a operacionalização das aulas.
            </p>
            <p>
              O professor que propõe o diálogo com os alunos, abandona o
              autoritarismo e assume a sua autoridade diante da turma, agindo
              como líder, motivando e, principalmente, exercendo a atividade de
              mediação do conhecimento, das relações e dos conflitos. Assim, com
              Paulo Freire, abandonamos a educação bancária em prol de uma
              educação problematizadora. Uma educação capaz de estimular o
              protagonismo discente e desenvolver a autonomia. Nesse caso, é
              necessário ao professor humildade e resiliência para lidar com
              serenidade diante das adversidades da ação docente que é
              essencialmente uma experiência humana.
            </p>
            <p>
              A docência como mediação envolve a dialogia nos termos freirianos.
              O professor deve falar com os alunos e não para os alunos buscando
              uma interação constante e uma comunicação fluida. As novas
              informações apresentadas a cada etapa das atividades devem ser
              conectadas com experiências vividas pelos alunos e com
              conhecimentos já exercidos por eles, partindo da realidade
              concreta para as atividades e exemplos de educação financeira, do
              empreendedorismo e dos projetos de vida. O professor também deve
              ficar atento à formação dos grupos para proporcionar aos alunos um
              ambiente de aprendizagem colaborativa em que a cooperação e a
              criatividade possam ampliar o desenvolvimento de todos.
            </p>
            <p>
              Para aplicar a Metodologia Mooney, o professor deve ler os planos
              de aula previamente, pensar em adaptações necessárias e aplicar
              cada uma das etapas conforme a melhor aceitação das turmas com as
              quais atua. A partir da recepção destas aulas pelos alunos, o
              professor pode aprimorar as suas estratégias e realizar novas
              adaptações até encontrar um modo mais efetivo de garantir as
              aprendizagens propostas em cada plano de aula. Será
              particularmente enriquecedor a troca de experiências entre
              diferentes professores que aplicaram a metodologia mesmo que em
              temáticas diferentes. Assim, espera-se que o programa de
              “Alfabetização Financeira” seja agregado à proposta pedagógica da
              escola e integrado em sua perspectiva de formação de professores.
            </p>
            <p>
              Para facilitar a operacionalização da Metodologia Mooney nas
              escolas será oferecido um momento específico de treinamento no
              início de cada bimestre ou semestre, que poderá ser realizado
              presencial ou virtual, com enfoque prático na implementação das
              aulas, troca de experiências, ampliação de repertório e de
              estratégias de mediação da aprendizagem. Um dos objetivos deste
              momento é o exercício concreto das atividades propostas e a
              descrição de como resolver eventuais problemas na aplicação das
              aulas.
            </p>
            <p>
              Além disso, os treinamentos serão uma oportunidade para
              potencializar as dinâmicas de docência e aprimorar as competências
              de todos os profissionais. Esses treinamentos serão ministrados
              por professores especialistas da equipe Mooney em parceria com a
              equipe gestora das escolas-parceiras. A complementação do
              treinamento inicial se dará com a oferta de momentos de formação
              continuada, cujo principal objetivo será o compartilhamento dos
              resultados alcançados pelos alunos na forma de projetos ou
              feedbacks, além da troca de experiências na aplicação das aulas.
              Eventualmente, podem ser oferecidos eventos em que os professores
              possam compartilhar as suas vivências com docentes de instituições
              de ensino diferentes agregando uma visão ampla e diversificada de
              estratégias.
            </p>
            <p>
              Além do treinamento para a docência, a Mooney oferece aos docentes
              o módulo Planejamento Financeiro para Professores, que inclui um
              processo de construção de competências para que os docentes possam
              aplicar a educação financeira e o empreendedorismo em suas vidas
              pessoais e profissionais gerando um maior acúmulo de
              conhecimentos, habilidades e atitudes para aplicar as aulas com os
              alunos. A Mooney acredita que se o docente vive a educação
              financeira, se constrói hábitos financeiros saudáveis, se exerce a
              atitude empreendedora, ele será capaz de aplicar e multiplicar os
              fundamentos para uma vida financeira plena dentro e fora das
              escolas onde atuam.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais/diretrizes-pedagogicas-para-o-ambiente-de-aprendizagem">
              4.6 Diretrizes pedagógicas para o ambiente de aprendizagem
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default ProfessorMediador;
