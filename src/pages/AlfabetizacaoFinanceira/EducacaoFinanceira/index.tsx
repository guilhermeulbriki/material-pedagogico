import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const EducacaoFinanceira: React.FC = () => {
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
            <Link to="alfabetizacao-financeira/educacao-financeira">
              <strong>2.1 - Educação Financeira</strong>
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
              <h3>2.1 - Educação Financeira</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A educação financeira por muito tempo e em diversos contextos foi
              resumida à matemática financeira, mas suas bases estão nas
              competências socioemocionais. O desafio é aplicar conhecimentos em
              diferentes circunstâncias relacionadas aos produtos e serviços
              financeiros para agir de uma forma construtiva em função das
              situações-problema que o cotidiano nos impõe.
            </p>
            <p>
              O dinheiro é algo presente todos os dias nas nossas vidas e muitas
              vezes é encarado de forma pejorativa, como sinônimo de vaidade e
              dominação. Quando pensamos no dinheiro como algo ruim, incorremos
              em um tabu e deixamos de falar sobre o assunto e entender melhor
              como ele afeta nas nossas decisões.
            </p>
            <p>
              Inicialmente, a sociedade fazia operações comerciais com base nas
              trocas entre produtos que tinham um valor baseado na utilidade ou
              em aspectos simbólicos. Para trocar produtos de natureza
              diferente, aos poucos foi sendo utilizado um valor de troca que
              pudesse garantir alguma equivalência entre mel e trigo, por
              exemplo. Essa medida de troca pouco a pouco evoluiu colocando em
              circulação as moedas de metal, quando o cobre, a prata e o ouro
              passaram a ser utilizados para fabricá-las.
            </p>
            <p>
              Mais a frente, passamos a utilizar o papel como moeda de troca, o
              que originou as cédulas que conhecemos hoje. Porém, com a criação
              de bancos e instituições financeiras, passamos a ter empréstimos,
              créditos e investimentos de forma mais sofisticada, até a forma
              especulativa de capital presente nas bolsas de valores. Para além
              do capital especulativo, atualmente temos as criptomoedas, códigos
              numéricos capazes de possibilitar transações comerciais pela
              internet com menor fiscalização estatal.
            </p>
            <p>
              Todo o legado histórico e cultural da nossa sociedade mostra o
              quanto o dinheiro e as transações comerciais estão presentes em
              nossas vidas e, por isso, superar o tabu de falar sobre o dinheiro
              deve ser encarado como um propósito importante para o sujeito do
              século XXI. Para superar a visão de que o dinheiro é algo ruim, a
              nossa principal tarefa é aprender a vê-lo como meio e não como um
              fim. Acumular riquezas não é em si um propósito de vida, mas
              compreender quais são os nossos objetivos e metas e como eles
              podem ser alcançados.
            </p>
            <p>
              Os nossos objetivos e metas pessoais, familiares e sociais, na
              maioria das vezes, passam pela necessidade de recursos,
              investimentos e planejamento financeiro. O dinheiro não é um bem
              infinito, mas escasso, e a sua obtenção relaciona-se sobretudo
              como o trabalho, o empreendedorismo, o retorno de investimentos em
              bens materiais ou produtos financeiros.
            </p>
            <p>
              Nesse caso, para que o jovem desde cedo compreenda como se
              organizar financeiramente, é importante que exerça o seu
              autoconhecimento e a sua responsabilidade quanto ao dinheiro.
              Desde a melhora nos hábitos de consumo até a capacidade de
              planejamento para conquistas futuras, as atitudes e reflexões
              sobre saúde financeira passam pela compreensão do que são ativos e
              passivos financeiros.
            </p>
            <p>
              Ativos são produtos e serviços financeiros capazes de gerar renda
              aos seus detentores, como é o caso de aluguéis de imóveis, ações
              ou até mesmo cursos de formação profissional que poderão gerar
              oportunidades futuras. Passivos, por outro lado, são produtos e
              serviços que geram despesas e não receitas. Um carro, por exemplo,
              gera gastos com combustível, manutenção, impostos e taxas.
            </p>
            <p>
              Nesse caso, é importante concentrar esforços na aquisição de
              ativos para que o dinheiro possa trabalhar para o indivíduo e não
              apenas o sujeito trabalhar em busca de dinheiro. Isso significa
              que o indivíduo precisa aprender a identificar oportunidades de
              investimento que possa multiplicar o seu patrimônio e proporcionar
              mais autonomia financeira.
            </p>
            <p>
              Kiyosaki (2017) ao fazer intenso questionamento sobre os
              conhecimentos financeiros oferecidos na escolarização formal, nos
              mostra a importância da educação financeira. Segundo o autor, as
              competências técnicas e formais assim como a formação cultural em
              geral não garantem o sucesso e a independência financeira, já que
              temos vários exemplos de pessoas com grande sucesso escolar, notas
              altas e reconhecimento acadêmico que não necessariamente têm uma
              vida financeira saudável.
            </p>
            <p>
              Para Kiyosaki (2017), o importante é pagar a si próprio antes de
              todos os outros credores. Isso significa que o sujeito deve
              destinar periodicamente uma parcela de recursos para os seus
              investimentos antes de quitar seus débitos mensais ou semanais.
              Assim, a prioridade de pagamento é o próprio sujeito que pouco a
              pouco torna seu patrimônio maior e mais sólido.
            </p>
            <p>
              Além disso, identificar o que é necessidade e desejo auxilia a
              entender o nosso comportamento diante das finanças. Ao comprarmos
              itens do dia a dia, como roupas e cafezinhos, são situações com um
              significado diferente para cada pessoa. A compreensão do impacto
              dos hábitos de consumo gera uma consciência pessoal sobre os
              objetivos e metas de cada um.
            </p>
            <p>
              Entender o próprio comportamento financeiro e saber escolher as
              melhores opções de investimento são competências que exigem uma
              aprendizagem contínua. Mudar hábitos e conhecer o mundo dos
              investimentos são coisas aprendidas pouco a pouco, mediante a
              nossa capacidade de aprender a aprender. Uma vez que o sujeito
              adquire autonomia, consegue entender a si próprio e reorientar as
              suas ações para a conquista da independência financeira.
            </p>
            <p>
              As decisões e escolhas das pessoas podem lhes garantir
              organização, segurança, liberdade e independência financeira. A
              organização financeira começa quando há um equilíbrio entre aquilo
              que se ganha (receitas) com aquilo que se gasta (despesas). Porém,
              é necessário também pensar em objetivos financeiros futuros e
              prever períodos com menor ou até ausência de receitas. Por isso, é
              importante ter uma reserva de emergência que possa cobrir gastos
              mensais de 6 a 12 meses, a depender do tipo de atividade
              profissional exercida.
            </p>
            <p>
              Quando se alcança o equilíbrio entre receitas e despesas, se
              conquista uma reserva de emergência significativa, mantém-se uma
              capacidade de poupar constante e há um planejamento financeiro bem
              definido, pode-se dizer que a pessoa atingiu a organização
              financeira, mas ainda há muitos passos até a independência
              financeira. Imagine que para ser independente financeiramente seja
              necessário não depender de nenhuma fonte de renda oriunda do
              trabalho. Ou seja, o sujeito independente financeiramente não
              precisa trabalhar porque tem investimentos que pagam dividendos
              suficientes para cobrir os gastos mensais conforme o seu padrão de
              vida.
            </p>
            <p>
              Como se pode ver, há diferentes níveis de independência financeira
              que tornam possíveis margens maiores ou menores de escolhas de
              consumo e concretização de objetivos. Para conquistar níveis mais
              efetivos de independência financeira, é importante conhecer o
              mundo das finanças e articulá-lo com a vida cotidiana de uma forma
              orgânica e fluida, mediante conhecimentos, habilidades e atitudes
              que possam gerar transformações nos hábitos e nos resultados do
              nosso comportamento financeiro.
            </p>
            <p>
              Nessa direção, os objetivos e metas financeiros devem estar
              alinhados aos sonhos e propósitos de cada um. Imagine que um
              planejamento financeiro adequado deve estar conectado ao projeto
              de vida, porque aquilo que se deseja conquistar direciona e
              orienta os esforços do indivíduo. Portanto, a educação financeira
              é um processo que está ligado à formação integral dos indivíduos
              em um contexto sociocultural cada vez mais marcado pelas mudanças
              e dinâmicas dos avanços tecnológicos, do mercado, do trabalho e da
              economia globalizada.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="competencias-socioemocionais">
              2.2 - Competências Socioemocionais
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default EducacaoFinanceira;
