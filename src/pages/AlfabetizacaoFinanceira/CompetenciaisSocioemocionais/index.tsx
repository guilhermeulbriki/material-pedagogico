import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const CompetenciasSocioemocionais: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/alfabetizacao-financeira">
              2.0 - Alfabetização Financeira
            </Link>
          </li>
          <li>
            <Link to="/alfabetizacao-financeira/competenciais-socioemocionais">
              <strong>2.2 - Competências Socioemocionais</strong>
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
              <h4>2.0 Alfabetização Financeira</h4>
              <img src={arrowRight} alt="arrow" />
              <h3>2.2 - Competências Socioemocionais</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Quando falamos em Alfabetização Financeira estamos relacionando o
              processo de educação financeira que envolve a compreensão das
              finanças a partir de mudanças de atitude. Ela é, portanto, uma
              articulação entre letramento financeiro e competências
              socioemocionais.
            </p>
            <p>
              Segundo a organização internacional Collaborative for Academic,
              Social and Emotional Learning (CASEL), o processo de aprendizagem
              socioemocional (Social and Emotional Learning - SEL) consiste na
              compreensão e aplicação de conhecimentos, habilidades e atitudes
              no gerenciamento de emoções, no desenvolvimento de identidades
              saudáveis e na conquista de objetivos pessoais e coletivos. Além
              disso, a SEL contempla sentir e demonstrar empatia, construir e
              manter redes de apoio e tomar decisões de maneira responsável
              (CASEL, 2021).
            </p>
            <p>
              A SEL foi estruturada por meio da cooperação de universidades e
              instituições dedicadas ao aprimoramento da educação estadunidense
              com a colaboração de diversas organizações, pesquisadores e
              educadores para construir um conjunto de reflexões e estruturas
              orientadoras baseada em evidências e pesquisas empíricas. Foi
              estabelecido então o CASEL 5, um conjunto de 5 competências que
              sintetizam a SEL:
            </p>

            <ul>
              <li>
                <strong>Autoconsciência</strong> → Habilidade em compreender as
                próprias emoções e pensamentos, e como eles interferem nas
                decisões e atitudes tomadas no cotidiano. Implica no
                reconhecimento de forças e fraquezas, mantendo a autoconfiança,
                propósitos e valores pessoais.
              </li>
              <li>
                <strong>Autogestão</strong> → Habilidade para gerenciar as
                emoções em diferentes situações do dia a dia, incluindo a
                capacidade de orientá-las para a conquista de objetivos e
                sonhos. Implica em adiar a recompensa sustentando e mantendo a
                motivação durante um período prolongado, conseguindo administrar
                o estresse e criar estratégias para lidar com diferentes formas
                de pressão no ambiente.
              </li>
              <li>
                <strong>Consciência social</strong> → Habilidades para
                compreender as outras pessoas com empatia, reconhecendo suas
                motivações e contextos identitários e culturais. Envolve a
                compaixão pelos outros, o reconhecimento de suas circunstâncias
                históricas e sociais, além da identificação do apoio familiar,
                escolar e comunitário.
              </li>
              <li>
                <strong>Habilidades de relacionamento</strong> → Habilidade para
                construir e cultivar relacionamentos saudáveis e sentir-se
                confortável em relação a diferentes indivíduos e espaços
                sociais. Envolve as capacidades de comunicação, trabalho em
                equipe, mediação de conflitos, liderança e cooperação.
              </li>
              <li>
                <strong>Tomada de decisão responsável</strong> → Habilidades
                para fazer escolhas cuidadosas e construtivas quanto ao
                comportamento pessoal e às relações interpessoais em diferentes
                contextos. Consiste em avaliar eticamente as diferentes
                situações e calcular riscos pessoais, sociais e coletivos.
              </li>
            </ul>

            <p>
              A partir das cinco competências socioemocionais sintetizadas pela
              CASEL, notamos que a SEL se articula em diferentes âmbitos de
              formação como na comunidade, na família, na escola e no ambiente
              de aprendizagem, tendo um alinhamento de oportunidades de
              aprendizagem a partir de parcerias construtivas que possam gerar
              impactos positivos na cultura escolar e no clima dos ambientes de
              aprendizagem.
            </p>
            <p>
              Observa-se, portanto, que a SEL está ligada a uma educação
              integral que articula aspectos cognitivos e afetivos para
              possibilitar transformações sociais, pessoais e coletivas. Tendo
              em vista estes pressupostos, a metodologia Mooney articula os
              quatro domínios do letramento financeiro avaliados no PISA
              (conteúdos, processos, contextos e fatores não cognitivos) com as
              cinco competências socioemocionais da SEL, o que gera o conceito
              de Alfabetização Financeira. As competências financeiras são
              trabalhadas a partir de contextos de colaboração e prática com o
              intenso uso de tecnologias educacionais, apoiado ao dinamismo e à
              ludicidade das metodologias ativas de aprendizagem.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="educacao-tecnologias-gamificacao">
              2.3 - Educação, Tecnologias e Gamificação
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default CompetenciasSocioemocionais;
