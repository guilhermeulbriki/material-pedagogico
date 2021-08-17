import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const MetodologiaMooney: React.FC = () => {
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
            <Link to="/pilares-educacionais/metodologia-mooney">
              <strong>4.3 Metodologia Mooney</strong>
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
              <h3>4.3 Metodologia Mooney</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A Metodologia Mooney se organiza a partir do princípio de que o
              sujeito constrói o seu conhecimento interagindo com os outros e
              com o seu ambiente e, portanto, incorpora práticas ativas,
              colaborativas e lúdicas em suas aulas. Com o aluno no centro do
              processo de ensino e aprendizagem, prezamos por uma educação
              prática e contextualizada. Nesse contexto, os conceitos e os
              processos ligados à educação e planejamento financeiro,
              empreendedorismo, economia e projeto de vida são trabalhados a
              partir de situações do cotidiano e dos conhecimentos prévios dos
              estudantes.
            </p>
            <p>
              Considera-se, a partir de Paulo Freire, que a leitura do mundo é
              anterior à leitura e à aprendizagem, todo conhecimento é
              construído a partir de conexões com aquilo que já se sabe,
              articulado a partir de percepções e reflexões do mundo vivido
              pelos alunos. Por isso, é fundamental que os professores conheçam
              os seus alunos, saibam como se comportam, o que gostam e quais são
              os seus anseios pessoais. Assim, diversas situações de
              aprendizagem são organizadas e/ou iniciadas a partir de um tema
              gerador, em torno do qual se desenvolvem dinâmicas, discussões,
              reflexões e atividades de sensibilização, aproximação e
              aprofundamento nas temáticas elencadas.
            </p>
            <p>
              Não se deseja com a metodologia Mooney, a exposição pura e simples
              de conceitos seguida de exercícios corrigidos, mas ao contrário,
              teorias e conceitos devem ser construídos colaborativamente pelos
              alunos a partir das situações de aprendizagem proporcionadas pelo
              professor, envolvendo atividades participativas e diversificadas.
              Assim, nos inspiramos nas metodologias ativas de aprendizagem para
              criar experiências e ambientes confortáveis e engajadores para que
              os alunos possam demonstrar o seu protagonismo e a sua liberdade.
            </p>
            <p>
              A inovação pedagógica proposta não propõe soluções prontas, mas
              orientações claras e propostas bem definidas para que professores
              possam humanizar e contextualizar sua ação docente levando em
              consideração as características de cada grupo de alunos. Portanto,
              para compor as sequências didáticas sugeridas, a Mooney inspira-se
              na “Aprendizagem Baseada em Problemas e Projetos” (ABPP) e na
              Gamificação, sem deixar de introduzir estratégias ligadas a outras
              metodologias e práticas ativas.
            </p>
            <p>
              A “Aprendizagem Baseada em Problemas” (ABPP) caracteriza-se pela
              oferta de situações-problema a partir das quais os alunos buscam
              os recursos necessários para a resolução. É importante que os
              problemas propostos sejam contextualizados na realidade para que
              sejam significativos para os alunos diante das suas vivências
              cotidianas. Em geral, apresenta-se uma narração-descrição da
              situação chamando atenção para os desafios levantados pelo
              contexto. A mediação docente envolve a oferta de recursos,
              orientações e acompanhamento para que os alunos busquem a
              resolução e desenvolvam conhecimentos, habilidades e atitudes.
            </p>
            <p>
              A “Aprendizagem Baseada em Projetos”, por sua vez, necessariamente
              envolve a formação de grupos em torno de problemáticas reais e
              significativas. Além disso, muitas vezes espera-se que ao final
              dos projetos haja um produto ou processo a ser aplicado em
              simulações, demonstrações da realidade, ao menos a sua
              socialização entre os pares ou em eventos
              escolares/extraescolares. No trabalho em equipe, os alunos podem
              exercitar suas habilidades interpessoais à medida que cada membro
              ocupa um papel diferente na resolução com a consequente
              distribuição de tarefas. Portanto, é uma proposta que demanda
              ações coletivas e cooperativas no sentido de escolhas, decisões,
              riscos e incertezas.
            </p>
            <p>
              Uma outra metodologia ativa que inspira as aulas Mooney é a
              gamificação ou ludificação na educação, capaz de gerar mais
              atenção, interesse e envolvimento dos alunos. A introdução de
              elementos de jogos por meio de materiais, diretrizes e projetos
              insere o aluno no papel de protagonista e garante maior dinamismo
              às aulas. São dinâmicas, jogos criados e adaptados, cartas, itens
              e atividades que promovem a progressão em diferentes níveis.
              Elementos como regras, objetivos e feedback imediato promovem o
              engajamento dos alunos.
            </p>
            <p>
              As metodologias ativas de aprendizagem, portanto, são um conjunto
              de estratégias pedagógicas baseadas no protagonismo do aluno. Isso
              significa que a atividade de ensino deve proporcionar meios para
              que os estudantes sejam ativos e não entregar conteúdos prontos. A
              postura passiva dos alunos em apenas receber explicações do
              professor deve ser evitada em função de experiências que
              possibilitem a construção colaborativa e ativa dos estudantes.
              Isso não significa que o professor não realizará exposições, mas
              que elas devem ocorrer em momentos estratégicos da aula e em
              caráter dialogado, possibilitando a participação dos estudantes.
            </p>
            <p>
              Nessa direção, os recursos, estratégias e métodos utilizados para
              envolver os alunos devem ter como objetivo a personalização do
              aprendizado, já que cada um tem ritmo e repertório específicos,
              além de intenções, interesses e desejos particulares. Isso não
              significa que os alunos farão atividades individuais, mas que suas
              características de aprendizado serão consideradas para a
              proposição de experiências e formação de grupos. Esse contexto
              envolve uma reflexão ativa dos professores e escolas na
              mobilização de ferramentas pedagógicas e tecnológicas diversas.
            </p>
            <p>
              Mais do que a inspiração de algumas metodologias em particular ou
              a vocação em inovação pedagógica e tecnológica, a Mooney busca
              trazer para os ambientes de aprendizagem práticas ativas que
              promovam o protagonismo discente em ambientes de aprendizagem
              reais com professores imersos na realidade educacional brasileira.
              Por isso, temos um rico material didático elaborado por
              especialistas de diversas áreas com a colaboração e a curadoria
              atenta de uma equipe pedagógica com experiência e formação
              consistente. Este material didático inclui um conjunto de planos
              de aula elaborados cuidadosamente, pensando nos professores que
              aplicarão as aulas dentro do seu estilo de docência.
            </p>
            <p>
              Finalmente, apresentaremos a finalidade do “Projeto Pedagógico
              Mooney'' por meio de objetivos a curto, médio e longo prazo. Os
              objetivos de aprendizagem são organizados a curto prazo para
              possibilitar a autopercepção do comportamento e a quebra do tabu
              em relação aos assuntos da educação financeira. A médio prazo, os
              objetivos de aprendizagem giram em torno da mudança real de
              hábitos, conquista de metas e objetivos pessoais. Alongo prazo, os
              objetivos estão na construção de um propósito com a valorização e
              a compreensão do dinheiro como meio para alcançar objetivos,
              sonhos e construir ambientes mais saudáveis e sustentáveis.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais/estrutura-pedagogica-mooney">
              4.4 Estrutura Pedagógica Mooney
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default MetodologiaMooney;
