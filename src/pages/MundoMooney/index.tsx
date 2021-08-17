import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import mooneyIcon from "../../assets/icons/mooney.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../styles";

const MundoMooney: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/mundo-mooney">
              <strong>1.0 - O Mundo Mooney</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#5E2EC3">
          <div className="title">
            <article>
              <img src={mooneyIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h3>1.0 - O Mundo Mooney</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A Mooney nasceu com a missão de melhorar a qualidade de vida das
              pessoas a partir da educação financeira de maneira prática,
              simples e humanizada. Para isso, criamos um programa de{" "}
              <strong>Alfabetização Financeira</strong> agregando aprendizagem
              socioemocional, tecnologia, gamificação e finanças, aplicadas à
              vida cotidiana e ao projeto de vida dos alunos.
            </p>
            <p>
              O nosso objetivo é oferecer aos alunos situações de aprendizagem
              que envolvam metodologias ativas integrando atividades lúdicas e
              engajadoras. Acreditamos que a partir de práticas e exemplos
              contextualizados aos conhecimentos prévios dos alunos, é possível
              construirmos competências cognitivas e afetivas para os desafios
              do século XXI.
            </p>
            <p>
              Assim, apresentamos aos educadores, gestores, pais e responsáveis,
              uma metodologia de ensino na qual as finanças pessoais e demais
              conteúdos financeiros são trabalhados de forma lúdica e divertida
              com o auxílio da plataforma digital da Mooney, solução digital -
              na forma de aplicativo ou página web - em que alunos e adultos se
              unem para enfrentar desafios cotidianos relacionados à conquista
              de objetivos e metas pessoais, familiares e coletivas.
            </p>
            <p>
              A plataforma digital é utilizada para facilitar a aprendizagem por
              meio de aulas ricamente planejadas, visando uma experiência de
              alta qualidade para professores e alunos, com atividades,
              dinâmicas, projetos e jogos que fomentam o protagonismo dos
              alunos. São diversas situações de aprendizagem envolvendo
              planejamento financeiro, economia, empreendedorismo, investimentos
              e projeto de vida.
            </p>
            <p>
              Além das experiências de aprendizagem oferecidas para os
              estudantes do Ensino Fundamental - Anos Finais e do Novo Ensino
              Médio, a Mooney também garante o suporte aos educadores e à escola
              com atividades de formação e treinamento para que os professores
              possam compreender o universo das finanças de uma forma
              contextualizada e lúdica, com acompanhamento pedagógico. Assim,
              todos levarão aos seus alunos aulas engajadoras e participativas.
            </p>
            <p>
              O protagonismo do aluno é fundamental para a formação de
              indivíduos participativos em suas vidas pessoais, profissionais e
              sociais. A capacidade de resolver problemas do dia a dia e aplicar
              diferentes competências para criar novas soluções é o caminho para
              a formação integral de indivíduos autônomos e independentes. Tendo
              em vista os novos desafios de uma sociedade em rede com avanços
              tecnológicos constantes, habilidades técnicas e socioemocionais
              precisam convergir em uma preparação transversal e
              interdisciplinar para a vida.
            </p>
            <p>
              Nesse sentido, a Mooney acredita que as relações humanas são
              fundamentais para o aprendizado, considerando os conhecimentos, as
              necessidades e as vivências de cada um. Por isso, pensamos em uma
              alfabetização financeira baseada em atividades práticas e
              dialógicas capazes de mobilizar exemplos e situações reais como
              oportunidades de aprendizado. Acreditamos que a educação
              financeira pode ser ensinada e aprendida por meio de uma linguagem
              simples e lúdica.
            </p>
            <p>
              A Mooney conta com um time de especialistas em pedagogia,
              competências socioemocionais, tecnologias educacionais e finanças,
              integrados para pensar e repensar os seus propósitos formativos a
              partir dos desafios do mundo contemporâneo. Nesse caso, a
              interação interna soma-se ao diálogo com as escolas parceiras e
              famílias para viabilizar as transformações almejadas para o perfil
              de conclusão dos alunos atendidos.
            </p>
            <p>
              Acreditamos que a educação financeira vai muito além da matemática
              financeira, que é comumente vista nas escolas. Na verdade, uma
              formação para lidar com as finanças envolve conhecimentos,
              habilidades, atitudes e valores de diversas disciplinas e áreas do
              conhecimento, à medida que os desafios contemporâneos se mostram
              complexos e dinâmicos. Assim, contribuímos com a formação de
              jovens preparados para responder criativa e criticamente à
              imprevisibilidade do mundo do trabalho e à diversidade
              sociocultural.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="alfabetizacao-financeira">
              2.0 - Alfabetização Financeira
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default MundoMooney;
