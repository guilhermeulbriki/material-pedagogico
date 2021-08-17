import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const DesenvolvimentoIdade: React.FC = () => {
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
            <Link to="/jovem-contemporaneo/desenvolvimento-conforme-idade">
              <strong>3.2 - O Desenvolvimento Conforme a Idade</strong>
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
              <h3>3.2 - O Desenvolvimento Conforme a Idade</h3>
            </div>
          </div>

          <ContentText>
            <p>
              O desenvolvimento psíquico humano é mediado por múltiplos fatores:
              sociais, culturais (construídos historicamente), biológicos
              (evolutivos) e pessoais (ontogenéticos). O construtivismo
              piagetiano e o pensamento de Lev Vygotsky romperam definitivamente
              com a ideia de que a inteligência humana é inata e, portanto, a
              capacidade de aprendizagem seria genética. Falamos em
              construtivismo porque entendemos que o conhecimento não está
              apenas no sujeito e nem no seu ambiente, mas sendo construído a
              partir da interação do sujeito e do meio que ele vive.
            </p>
            <p>
              A seguir estão alguns apontamentos de desenvolvimento humano e
              competências financeiras análogas que são tipicamente acompanhadas
              pelas faixas etárias e que norteiam o desenvolvimento da nossa
              metodologia:
            </p>

            <h5>9 a 11 anos</h5>
            <p>
              <strong>Desenvolvimento humano</strong>
            </p>
            <p>
              A brincadeira ainda tem um papel importante para aprender
              conceitos essenciais do funcionamento do mundo. Nessa idade, a
              criança está em um processo crucial de socialização. Crianças e
              adultos de fora do núcleo familiar passam a ter um papel
              importante na vida desses indivíduos, fortalecendo idealizações e
              papéis sociais que as crianças admiram.
            </p>
            <p>
              Há forte relação com os responsáveis por elas e ainda bastante
              insegurança na separação destas figuras de autoridade. Há uma
              necessidade de começar interações de forma mais autônoma com
              amigos, professores e familiares, mas com atenção e suporte de
              referências adultas que consigam ajudar a sustentar esse processo
              de aproximação e distanciamento da família.
            </p>

            <p>
              <strong>Competências financeiras</strong>
            </p>
            <p>
              Nessa idade, estão começando a compreender como funciona o mundo
              do trabalho e sua relação com o dinheiro, e a existência de
              instituições como os bancos. É importante deixar claro que o
              trabalho gera receita; a receita será o sustento para as despesas
              da família. Atividades como dar banho no cachorro, lavar o carro
              ou cuidar do jardim são boas oportunidades de ilustrar que o
              dinheiro vem com trabalho e responsabilidade.
            </p>
            <p>
              Crianças nessa faixa etária têm uma autonomia bastante limitada,
              mas já podem ser confrontadas em relação aos limites de orçamento
              para compra de brinquedos, por exemplo. Dar independência para
              compra de itens como lanches ou brinquedos é um exercício
              apropriado e com poucas consequências conforme as escolhas desta
              criança. É importante, porém, que sintam as consequências de suas
              escolhas sem privá-las das necessidades básicas.
            </p>
            <p>
              Além disso, algumas metas a longo prazo podem ser estabelecidas,
              sem deixar de lado as metas de curto prazo. Deixe as propostas
              divertidas, ajudando esses jovens a separar o dinheiro da próxima
              viagem em família ou para comprar um presente de aniversário para
              alguém. Atenção aos jovens desta idade porque ainda não entendem a
              necessidade de se lidar com postergação da gratificação, ou seja,
              os prazeres envolvidos com alguma atividade não podem ser
              postergados muito se não há desengajamento da atividade proposta.
            </p>
            <p>
              Ciclo de administração do próprio dinheiro:{" "}
              <strong>semanada</strong>.
            </p>

            <h5>12 a 13 anos</h5>
            <p>
              <strong>Desenvolvimento humano</strong>
            </p>
            <p>
              Surge um desejo grande por serem reconhecidos como indivíduos mais
              maduros, ou "jovens adultos”. Isto deve ser legitimado, mas não
              levado ao pé da letra. Nessa idade, as liberdades e pequenas
              responsabilidades são importantes para darem esse espaço de
              validação. Ainda está em desenvolvimento a capacidade de lidar com
              frustração e postergação de gratificação, entretanto, é necessário
              começar a instituir metas a médio e longo prazo com maior
              consistência.
            </p>
            <p>
              Nessa fase também, começa a pressão social da adolescência e o
              pertencimento a um grupo se torna relevante. A família é um
              suporte importante para garantir um pertencimento pelo que ela
              realmente é, independente de roupas, posses ou gostos pessoais.
              Isto deve ser reforçado para esses jovens por conta da ansiedade e
              medo de rejeição social.
            </p>
            <p>
              Aqui, pode começar a intensa produção hormonal, trazendo eventuais
              variações de humor: agressividade, tristeza profunda, excitação e
              alegria. Saiba que nessa idade é importante dar limites para eles,
              mesmo que não queiram ouvir. Os limites darão ao jovem a
              capacidade de lidar com frustrações e compreensão que existem
              limites e sacrifícios nas escolhas.
            </p>
            <p>
              <strong>Competências financeiras</strong>
            </p>
            <p>
              Responsabilidade financeira e autonomia são importantes para o
              senso de responsabilidade e de autoestima do jovem. Aqui é
              importante que ele consiga administrar o dinheiro que recebe entre
              necessidades, lazer e objetivos pessoais.
            </p>
            <p>
              Nessa fase também, são muito bem-vindas atividades que requeiram
              empenho pela casa e que não seja parte de suas obrigações diárias,
              como, por exemplo, limpar a geladeira, lavar as janelas da casa ou
              cozinhar uma refeição básica para a família em troca de algum
              dinheiro.
            </p>
            <p>
              Use o retorno às aulas para fazer uma lista de coisas necessárias
              para comprar com esse jovem, incluindo materiais escolares e
              roupas. Fazer um orçamento para essas compras pode envolver ou não
              a quinzenada, mas dar um limite para ele conseguir ajudar a
              organizar e planejar essa compra. Ajude-o no processo de busca por
              alternativas antes de cada compra para estimulá-lo a comparar
              preços.
            </p>
            <p>
              Também é importante ajudar os jovens a pensar objetivos
              financeiros de compras, mas dando espaço para que escolham por
              conta própria de acordo com os limites estabelecidos pela família.
            </p>
            <p>
              Acompanhar as metas a médio e longo prazo com o jovem exige
              sacrifício em algumas escolhas para alcançar os objetivos.
              Lembrá-lo sempre dos objetivos quando surgirem outras opções de
              compra.
            </p>
            <p>
              Estabeleça pequenos empréstimos para compras não rotineiras para
              ensiná-los a lidar com dívidas e não ter problemas com isso no
              futuro. É importante estabelecer os termos de pagamento desse
              empréstimo no momento em que for feito junto aos familiares e que
              esse pagamento seja efetuado em até um ano.
            </p>
            <p>
              O pagamento das parcelas deve ser leve, mas significativo para que
              o jovem sinta o peso dos empréstimos. Não deixe de dar a
              quinzenada ou subtrair automaticamente a quantia que é devida, mas
              sim, dê a quinzenada e peça o dinheiro que é devido ao pagamento
              do empréstimo. A cobrança de juros não é necessária nessa idade.
            </p>
            <p>
              Ciclo de administração do próprio dinheiro:{" "}
              <strong>quinzenada</strong>.
            </p>

            <h5>14 a 15 anos</h5>
            <p>
              <strong>Desenvolvimento Humano</strong>
            </p>
            <p>
              Neste período, há uma intensa pressão social que incentiva hábitos
              e comportamentos para inserção a determinados grupos sociais. A
              insegurança pode estar presente como parte da descoberta do corpo
              e da sexualidade. Nessa fase, pode começar a haver uma necessidade
              de contrariar os adultos de referência e criar um ponto de vista
              particular que os diferencie. Isto é normal e requer paciência e
              compreensão dos pais (mesmo isso sendo um desafio para todas as
              partes).
            </p>
            <p>
              Mesmo que contrariando, os “adultos referência” continuam sendo um
              modelo de aprendizado e os jovens continuam absorvendo muita coisa
              do comportamento e visão de mundo desses adultos. A solidão pode
              ser um sentimento comum, mesmo que tenham amigos e socializem
              intensamente. A família é uma importante parceira nesse momento de
              descoberta de si mesmo. Dar limites e tolerar as reações desses
              jovens são importantes.
            </p>
            <p>
              <strong>Competências Financeiras</strong>
            </p>
            <p>
              Nesse período, é importante trazer reflexão e não cobrança sobre
              as expectativas de futuro desse jovem. Não é necessário precisão,
              mas que ele comece a se projetar no futuro, envolvendo desejos e
              expectativas financeiras.
            </p>
            <p>
              Conversar sobre decisões financeiras evitando “não tenho dinheiro
              para isso”. Essa é uma boa oportunidade para transmitir os valores
              que pretende através da explicação de suas escolhas financeiras.
            </p>
            <p>
              Caso tenha condições, o ideal é que os jovens consigam administrar
              o dinheiro suficiente para gastos básicos e algo para gastos
              extras, incluindo um excedente para ser poupado. Evite dar uma
              quantia grande que estimule gastos desnecessários e excessivos.
            </p>
            <p>
              No acordo de mesada, é uma boa prática construir junto com o jovem
              um orçamento para o mês, refletindo junto sobre o quanto precisam,
              baseado nos fatores acima. Reconheça e reflita sobre cada caso
              específico, sobre as necessidades e capacidades de lidar com
              responsabilidades. Aqui é importante escutar e entender as
              necessidades.
            </p>
            <p>
              Não sejamos exigentes e controladores além do saudável: é
              necessário permitir o erro no orçamento, acompanhando através de
              registros ou ferramentas digitais. Use esses erros financeiros
              para não o culpar, mas responsabilizá-lo pelas consequências. Se
              ele não sentir o impacto das decisões, não aprenderá ter
              responsabilidade. Podemos usar das ferramentas de acompanhamento
              para avaliar junto com o jovem as decisões que tiveram maior
              impacto e suas consequências.
            </p>
            <p>
              Quando o jovem fizer gastos que comprometem o orçamento, ajude-o a
              encontrar formas gratuitas ou baratas para resolver o problema.
              Caso necessário, dê um “empréstimo” em dinheiro para os gastos
              básicos a serem descontados das mesadas futuras e não dê mais do
              que o básico para ele cortar gastos extras como consequência das
              más decisões.
            </p>
            <p>
              Para que os jovens se sintam confiantes encarando as
              responsabilidades, é importante acompanha-los, dando espaço para
              tentativas e erros. Incentive-os às discussões e reflexões em
              direção às metas a médio e longo prazo. Focar somente nas
              limitações e sacrifícios faz com que a auto-estima e os aspectos
              positivos e recompensadores da educação financeira sejam podados
            </p>
            <p>
              Ensine o conceito de doação e o impacto de ações positivas para a
              comunidade. Estimule a reflexão sobre a forma mais impactante de
              ação social e as causas que gostariam de contribuir. É importante
              a discussão de reservar uma porção da mesada para ações
              comunitárias, de forma que não comprometam seu próprio orçamento,
              mas para também ajudar os outros.
            </p>
            <p>
              Os familiares precisam evitar comparações ou dar um ideal negativo
              de pertencimento através de posses. Os jovens estão muito
              sensíveis a estes estímulos nessa fase da vida. Dê exemplos
              pessoais para os filhos de boas e más decisões com o dinheiro. Os
              jovens estão em um momento de tentar buscar a sua própria
              identidade no mundo e, por isso, podem aprender muito com as
              experiências de vida dos familiares.
            </p>
            <p>
              Ciclo de administração do próprio dinheiro:{" "}
              <strong>mesada</strong>.
            </p>

            <h5>16 a 18 anos</h5>
            <p>
              <strong>Desenvolvimento Humano:</strong>
            </p>
            <p>
              Nessa etapa, os jovens estão começando a se deparar com decisões
              de carreiras, estudos e planos a longo prazo. A finalização do
              ciclo de educação obrigatória leva a reflexões sobre como lidar
              com o próximo passo. Há, contraditoriamente, uma dificuldade de
              pensar a longo prazo e o envolvimento com o presente é intenso. Há
              forte necessidade de justiça pelo começo do desenvolvimento do seu
              senso crítico e moral e é comum que se coloquem de forma enfática
              e emocionalmente carregada quando percebem alguma injustiça.
              Buscam se destacar e criar suas próprias identidades, confrontando
              e apontando diferenças em relação às figuras de autoridade. Pode
              haver apatia e dificuldade de concentração por forte vivência
              emocional e social.
            </p>
            <p>
              A construção de hábitos e a consistência no desenvolvimento de
              responsabilidade e postergação de algumas gratificações é um
              desafio e deve ter um suporte dos pais mesmo que haja uma forte
              reação emocional dos jovens. O desenvolvimento da autonomia e
              responsabilidade passa pela oportunidade de expressão e atuação no
              mundo, começando a ser confrontado com as consequências de suas
              ações que vão ganhando maior poder de ação.
            </p>
            <p>
              <strong>Competências Financeiras:</strong>
            </p>
            <p>
              Como os jovens estão começando a se deparar com as escolhas e as
              aptidões profissionais, é um bom momento para os adultos
              responsáveis conversarem sobre isso, trazendo pessoas próximas que
              seja referência para o jovem. Estimule-o a refletir sobre como os
              desejos dele podem ser revertidos em um possível trabalho. Por
              exemplo, o empreendedorismo, considerando as restrições legais e o
              desenvolvimento de cada jovem, é uma forma de incentivar a
              reflexão e a prática de sonhos e habilidades de um futuro
              próspero.
            </p>
            <p>
              É nesse momento que são apresentados os gastos da vida adulta que
              requerem um planejamento maior, como compra de itens duradouros a
              longo prazo (casa, carro, investimentos profissionais, formação,
              hobbies). Além disso, é importante que comece a compreender o
              pagamento de impostos e taxas como parte do cotidiano do mundo
              adulto.
            </p>
            <p>
              Pode haver alguma receita própria por trabalho em tempo integral
              ou parcial e conseguirem compreender, mesmo que não exercitando
              isso no momento, referência real do custo de vida de um adulto e
              de uma família, levando em consideração uma referência de receita
              real considerando o mercado de trabalho.
            </p>
            <p>
              Isto inclui também a compreensão de crédito e as consequências que
              o empréstimo pode acarretar na vida financeira de uma pessoa. Por
              exemplo, abordar o tema “crédito através de cartão ou empréstimos”
              deve ser feito com muito cuidado, pois devemos considerar o grau
              de maturidade de cada jovem, uma vez que nesta idade ainda estão
              desenvolvendo um controle mais refinado de impulsos e tomada de
              decisão que leve em consideração o longo e curto prazo.
            </p>
            <p>
              Os jovens, nesse período, têm plenas condições de organizar um
              orçamento considerando gastos essenciais e extras; poupanças e
              doações a partir do seu dinheiro. Neste processo, é importante que
              estejam exercitando o fluxo de caixa, ou seja, mantendo a receita
              (mesada ou algum trabalho) equilibrados considerando suas despesas
              do mês. O controle e acompanhamento de seus gastos faz parte desse
              exercício. Nesse momento, é importante estimular o compromisso com
              metas a curto, médio e longo prazo.
            </p>
            <p>
              Ciclo de administração do próprio dinheiro:{" "}
              <strong>mesada</strong>.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/jovem-contemporaneo/aluno-protagonista">
              3.3 - O Aluno Protagonista
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default DesenvolvimentoIdade;
