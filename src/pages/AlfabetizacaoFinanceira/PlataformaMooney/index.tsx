import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const PlataformaMooney: React.FC = () => {
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
            <Link to="/alfabetizacao-financeira/plataforma-mooney">
              <strong>2.4 - Plataforma Mooney (App e Web)</strong>
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
              <h3>2.4 - Plataforma Mooney (App e Web)</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Pensando na necessidade de articular educação financeira e
              competências socioemocionais com o uso de tecnologias na
              aprendizagem, a Mooney criou uma solução educacional que
              proporciona uma experiência gamificada aos estudantes. A proposta
              da Plataforma Mooney é ser um instrumento lúdico e prático que
              proporcione o desenvolvimento de competências financeiras,
              considerando o processo de amadurecimento rumo à autonomia
              emocional e financeira dos jovens.
            </p>
            <p>
              O desenvolvimento dos jovens envolve a organização pessoal, a
              criação de hábitos que promovam bem estar e realização, exercício
              da autonomia e expressão, compreensão de responsabilidades para
              com a família e com o próprio futuro no processo de
              sustentabilidade financeira e social de uma vida adulta madura,
              incluindo e respeitando a diversidade de valores familiares e
              individuais dos usuários.
            </p>
            <p>
              A Mooney considera a Alfabetização Financeira como um conjunto de
              competências a serem desenvolvidas pelos estudantes de modo que o
              uso de tecnologias na aprendizagem seja feito para aproximar os
              estudantes dos processos financeiros que se dão na vida social,
              humanizando tanto aspectos técnicos e conceituais como a relação
              pedagógica entre professores e alunos, e entre pais e filhos. Para
              que o aprendizado seja prático, humanizado e divertido, a
              plataforma conta com os seguintes princípios:
            </p>

            <ul>
              <li>
                Integração e comunicação entre pais e jovens (interface
                conectada);
              </li>
              <li>
                Gamificação (elementos de jogos sem necessariamente envolver
                jogos);
              </li>
              <li>
                Relação prática com hábitos diários (relação com o dia a dia).
              </li>
            </ul>

            <p>
              Assim, ao considerar aspectos cognitivos e afetivos do
              desenvolvimento dos jovens, as situações do cotidiano estão
              incorporadas na dinâmica de funcionamento da Plataforma Mooney,
              que trabalha com cinco conceitos básicos:
            </p>

            <ul>
              <li>
                <strong>Ganhar</strong> - responsabilidade, compromisso e
                referência realista de valor monetário;
              </li>
              <li>
                <strong>Gastar</strong> - registro de gastos, orçamento para
                compras extraordinárias, comparação de preços, priorização de
                despesas levando em consideração necessidades e desejos;
              </li>
              <li>
                <strong>Poupar</strong> - estabelecer metas a curto, médio e
                longo prazo, e compromisso com a decisão de poupar para
                alcançá-los;
              </li>
              <li>
                <strong>Doar</strong> - impacto positivo na sociedade e
                proatividade na construção de um mundo melhor;
              </li>
              <li>
                <strong>Investir</strong> - compreensão de risco e retorno de
                investimentos.
              </li>
            </ul>

            <p>
              Nesse caso, as funções básicas disponíveis na Plataforma Mooney
              permitem ao estudante a compreensão gradativa das
              responsabilidades e gratificações decorrentes do trabalho, o
              entendimento das formas de organização pessoal e financeira, a
              percepção da importância em estabelecer metas e objetivos em
              curto, médio e longo prazo. Além disso, também são exercitados os
              princípios da educação para a cidadania e habilidades necessárias
              para compreender riscos e realizar investimentos de diversos
              tipos.
            </p>
            <p>
              A participação do jovem nas finanças familiares possibilita-o
              adquirir maior senso de responsabilidade, cuidado consigo mesmo e
              com os demais, como processo de amadurecimento e transformação
              gradual das relações familiares, conforme os jovens vão crescendo,
              sem pular ou desrespeitar o direito de aproveitar sua etapa de
              desenvolvimento e seu tempo de lazer. Além disso, o jovem
              experimenta uma sensação de dever cumprido. Dito isso, acreditamos
              na divisão entre organização de responsabilidades diárias e
              oportunidades de ensinar o valor do dinheiro através de afazeres.
            </p>
            <p>
              As “obrigações” devem aos poucos se tornar valores para que os
              jovens tenham mais responsabilidade por si e pelos outros ao seu
              redor. Isto envolve desenvolvimento acadêmico e responsabilização
              diária de autocuidado e cuidado da família. Para tanto, a
              recompensa financeira como um reforço “externo” aos valores de
              colaboração e responsabilidade deve ser inserida apenas para
              atividades que sejam extras e que não são consideradas pela
              família como obrigações.
            </p>
            <p>
              Atribuir recompensa financeira a atividades extras obrigatórias é
              uma forma prática de inserir o conceito de receita, mostrando que
              o dinheiro requer esforço, trabalho para ser alcançado. Por isso,
              queremos que o jovem:
            </p>

            <ul>
              <li>1. Reflita sobre carreira e profissões futuras;</li>
              <li>2. Aprenda a gerenciar o tempo e a ética profissional;</li>
              <li>3. Assimile o conceito de responsabilidade;</li>
              <li>
                4. Desenvolva confiança e autoestima de que consiga gerar algo
                valioso;
              </li>
              <li>
                5. Evite o tédio e falta de sentido, que pode levar à formas
                destrutivas de socialização e solidão.
              </li>
            </ul>

            <p>
              Para proporcionar aos jovens a aprendizagem de princípios
              financeiros, o Mooney App ou Web contempla algumas
              funcionalidades, como: as Missões, os Cofrinhos, os Mooners e as
              Jornadas. Cada uma dessas funções pode exercitar habilidades
              financeiras e socioemocionais, proporcionando uma abordagem
              transversal e conectada com a vida diária.
            </p>

            <h5>2.4.1 Missões</h5>

            <p>
              As “Missões” são propostas que envolvem a atribuição de
              responsabilidade e afazeres diversos por adultos aos jovens com a
              possibilidade de atribuição de diferentes tipos de recompensas
              como remuneração pedagógica e recompensa solidária.
            </p>

            <p>
              <strong>RESPONSABILIDADES DIÁRIAS</strong>
            </p>
            <p>
              Na relação entre jovens e adultos existe um contrato que
              estabelece limites. Entretanto, os jovens vivem intensamente suas
              emoções e relações sociais devido às mudanças hormonais que, junto
              com a capacidade de julgamento crítico em desenvolvimento,
              precisam de uma referência externa para se organizarem. Para isso,
              existem as responsabilidades diárias que organizam afazeres
              esperados sem uma contrapartida financeira dos pais, ajudando a
              esclarecer o papel desse jovem dentro de casa, além de ajudar os
              pais na negociação dos combinados.
            </p>
            <p>
              A Mooney oferece sugestões adequadas de responsabilidades diárias
              de acordo com a idade do jovem, mas a família tem autonomia de
              escolher a partir da sua própria realidade cotidiana. O importante
              é dar significado para as atividades realizadas no sentido da sua
              contribuição com a coletividade e nas recompensas simbólicas e
              materiais possíveis.
            </p>

            <p>
              <strong>REMUNERAÇÃO PEDAGÓGICA</strong>
            </p>
            <p>
              Devido a falta de referência dos jovens no quesito receita, a
              Mooney trabalha o conceito através da possibilidade dos pais
              atribuírem uma remuneração pedagógica para ensinar o valor da
              recompensa mediante ao esforço e comprometimento que o mundo
              adulto exige. Além disso, ao começar a conquistar o próprio
              dinheiro, o jovem torna-se responsável por essa quantia,
              estimulando uma reflexão sobre suas decisões de compra.
            </p>
            <p>
              Além da relação com o dinheiro, o jovem desenvolve competências
              requeridas no mercado de trabalho que podem ser desde cedo
              desenvolvidas. Para pais que não queiram envolver, nesse momento,
              uma recompensa financeira, há a possibilidade de uma recompensa
              não financeira para estimular a cooperação de uma forma mais
              gratificante para o jovem.
            </p>
            <p>
              Estes jovens não entendem ainda o adiamento de recompensa, ou
              seja, não têm amadurecida de deixar de fazer alguma atividade não
              prazerosa hoje para serem recompensados no futuro. Por isso, a
              função de uma remuneração financeira ou recompensa não financeira
              dá a possibilidade de as famílias exercitarem junto aos jovens
              essa postergação gradual do prazer e da satisfação, conforme eles
              se desenvolvem com responsabilidades e hábitos saudáveis.
            </p>

            <p>
              <strong>RECOMPENSA SOLIDÁRIA</strong>
            </p>
            <p>
              Doar é um ato de generosidade que impacta a vida das pessoas.
              Procura-se difundir na Educação Financeira que a doação é um bem
              para a sociedade e que o dinheiro pode contribuir para um mundo
              mais consciente e humano.
            </p>

            <h5>2.4.2 Cofrinhos</h5>

            <p>
              Poupar dinheiro requer abrir mão da gratificação imediata. Por
              isso, é necessário criar uma forma prática e divertida para poupar
              dinheiro. Para tanto, o uso de gamificação e feedback instantâneo
              tem o objetivo de incentivar uma relação de hábitos e recompensas
              no futuro.
            </p>
            <p>
              Além do ato de poupar, a organização de objetivos com interesse
              autêntico dos jovens é uma forma de ajudá-los a estabelecer metas
              mais desafiadoras que requerem planejamento e consistência para
              efetivação. Isto requer compreender custos mais elevados de
              compras “não rotineiras”, adquirindo aos poucos uma referência
              realista de preços para aquisições que farão cada vez mais parte
              da vida, conforme amadurecem em direção a uma autonomia
              financeira.
            </p>

            <h5>2.4.3 Mooners</h5>

            <p>
              Para que as competências financeiras alcancem um sentido pessoal
              que vai se interiorizando como parte saudável do desenvolvimento
              deste jovem, é necessário que façamos reforços de comportamentos
              relacionados ao dinheiro.
            </p>
            <p>
              É necessário que os jovens estabeleçam progressivamente uma
              relação pessoal com hábitos e decisões financeiras para que de
              fato aprendam. Nesse sentido, a plataforma oferece uma coleção de
              Mooners, que são pets virtuais, que é completada e evoluída
              conforme o jovem consegue desempenhar um engajamento positivo
              atrelado à proposta pedagógica.
            </p>
            <p>
              Os Mooners simbolizam, virtualmente, o progresso dos alunos. Com
              isso, pretende-se estimular os jovens a buscarem forças para
              atingir seus objetivos. O Mooner se torna uma interface também de
              sinalização de dicas e informações que auxiliam os jovens a
              tomarem decisões que estejam alinhadas com a proposta pedagógica
              do aplicativo, respeitando o desejo e os objetivos de cada um..
            </p>
            <p>
              Um sistema de progressão de experiências por meio da conquista de
              gemas, moedas virtuais, permite que o jovem se engaje em utilizar
              a plataforma Mooney com mais frequência, avançando nos desafios
              indicados, para evoluir cada vez mais a sua conta. Esse sistema
              está relacionado com todas as funcionalidades disponíveis para os
              alunos.
            </p>

            <h5>2.4.4 Jornadas</h5>

            <p>
              As jornadas são um conjunto de conteúdos e atividades interativas
              divididas em etapas e módulos que os alunos têm à sua disposição
              para navegar no Mundo Mooney, entrando em contato com experiências
              e exemplos sobre planejamento financeiro, investimentos,
              empreendedorismo, economia e projeto de vida. Neles estão
              disponíveis estudos de caso para que os alunos possam aplicar
              conhecimentos prévios e, como consequência, evoluir seus
              "Mooners", que podem funcionar como trilha autônoma de
              conhecimento do aluno ou como uma pós-aula do professor.
            </p>
            <p>
              A Jornada está alinhada com os planos de aula oferecidos aos
              professores e pode ser utilizada em três propostas: antes da aula
              - no modelo sala de aula invertida - durante a aula - como
              complemento ou finalização do conteúdo - ou após a aula, como uma
              proposta para casa.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/jovem-contemporaneo">3.0 - O Jovem Contemporâneo</Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default PlataformaMooney;
