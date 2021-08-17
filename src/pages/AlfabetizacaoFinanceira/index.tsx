import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import moneyIcon from "../../assets/icons/dinheiro.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import tabela from "../../assets/tabela.jpg";

import { Container, Content, ContentText } from "../styles";

const AlfabetizacaoFinanceira: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/alfabetizacao-financeira">
              <strong>2.0 - Alfabetização Financeira</strong>
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
              <h3>2.0 - Alfabetização Financeira</h3>
            </div>
          </div>

          <ContentText>
            <p>
              O desempenho no Programa Internacional de Avaliação de Estudantes
              (PISA) - Programme for International Student Assessment é um dos
              principais indicadores educacionais internacionais contemporâneos.
              Trata-se de um conjunto de avaliações externas das competências em
              leitura, matemática, ciências e letramento financeiro dos
              estudantes dos sistemas de ensino dos países membros e
              parceiros-chave da Organização para Cooperação e Desenvolvimento
              Econômico (OCDE) -{" "}
              <span className="itallic">
                Organisation for Economic Co-Operation and Development (OECD)
              </span>
              .
            </p>
            <p>
              No PISA, o letramento financeiro é entendido como “uma combinação
              de consciência, conhecimento, habilidade, atitude e comportamento
              necessários para tomar decisões financeiras sólidas e, em última
              análise, alcançar o bem-estar financeiro individual” (OECD, 2016
              apud BRASIL/INEP, 2020, p. 23). Nesse contexto, o letramento é
              entendido como a capacidade de aplicação de conhecimentos e
              habilidades em áreas-chave e competência para interpretar e
              resolver problemas reais e cotidianos. Assim, o letramento
              financeiro pode ser definido como:
            </p>
            <p className="indetention">
              [...] o processo pelo qual os consumidores/investidores
              financeiros melhoram sua compreensão sobre os produtos, conceitos
              e riscos financeiros, e desenvolvem, por meio de informações,
              instruções e/ou aconselhamentos objetivos, as habilidades e a
              confiança para se tornarem mais conscientes dos riscos e
              oportunidades financeiras, fazer escolhas informadas, saber onde
              procurar ajuda e tomar outras ações eficazes a fim de melhorar seu
              bem-estar financeiro (OECD, 2005 apud BRASIL/INEP, p. 23).
            </p>
            <p>
              Assim, entendemos que o letramento financeiro se relaciona
              diretamente com a possibilidade de construção de competências a
              serem aplicadas em situações específicas da vida dos sujeitos de
              modo a proporcioná-los saúde financeira. O letramento financeiro
              contempla o conhecimento e a compreensão de conceitos e riscos
              financeiros. Nesse caso, é importante que os jovens conheçam
              diferentes aplicações financeiras e saibam quais os seus riscos.
            </p>
            <p>
              Além de conhecer e compreender os produtos e operações financeiras
              a partir dos desafios da sua vida cotidiana, os estudantes
              precisam acessar, analisar e comparar informações, realizar
              operações matemáticas, ler e interpretar textos em contextos
              financeiros. As habilidades financeiras são complementadas pelas
              atitudes em contextos financeiros, como a motivação para acessar e
              conhecer produtos financeiros, a capacidade de discernir entre
              diferentes fornecedores financeiros e de se envolver em atividades
              financeiras, a capacidade de tomar melhores decisões financeiras e
              de administrar recursos e investimentos a longo prazo.
            </p>
            <p>
              A competência financeira proporciona, portanto, a capacidade dos
              cidadãos tomarem decisões mais conscientes e eficazes sobre
              produtos e processos financeiros em diferentes contextos, a fim de
              proporcionar o bem-estar financeiro dos sujeitos e da sociedade.
              Este conjunto de conhecimentos, habilidades e atitudes são,
              portanto, essenciais para a participação dos sujeitos na vida
              econômica, considerado um importante indicador de desenvolvimento
              social.
            </p>
            <p>
              A <strong>Alfabetização Financeira</strong> é um desafio para a
              educação brasileira. Foram realizadas avaliações de letramento
              financeiro com estudantes brasileiros em 2012, 2015 e 2018. As
              provas e testes do PISA são aplicados aos estudantes de 15 anos,
              conforme domínios específicos a serem avaliados. Em 2018, foram
              aplicados 43 itens em dois blocos com duração de 1 hora, por meio
              de uma plataforma eletrônica contemplando 4 domínios de avaliação:
            </p>

            <p>
              <strong>CONTEÚDO</strong>
            </p>
            <ul className="indentention">
              <li>Dinheiro e transações</li>
              <li>Planejamento e gerenciamento financeiro</li>
              <li>Riscos e retorno</li>
              <li>Cenário financeiro</li>
            </ul>

            <p>
              <strong>PROCESSOS</strong>
            </p>
            <ul className="indentention">
              <li>Identificar informações financeiras</li>
              <li>Analisar informações e situações financeiras</li>
              <li>Avaliar questões financeiras</li>
              <li>Aplicar compreensão e conhecimento financeiro</li>
            </ul>

            <p>
              <strong>CONTEXTOS</strong>
            </p>
            <ul className="indentention">
              <li>Educação e trabalho</li>
              <li>Lar e família</li>
              <li>Individual</li>
              <li>Social</li>
            </ul>

            <p>
              <strong>FATORES NÃO COGNITIVOS</strong>
            </p>
            <ul className="indentention">
              <li>Acesso à informação e à educação</li>
              <li>Acesso e uso do dinheiro e produtos financeiros</li>
              <li>Atitudes financeiras</li>
              <li>Comportamento financeiro</li>
            </ul>

            <p>
              Além dos domínios que compõem conhecimentos, habilidades e
              atitudes dos estudantes no letramento financeiro, o PISA apresenta
              5 níveis de competência financeira, a partir dos quais podemos
              mensurar o desempenho dos nossos jovens:
            </p>

            <p>
              <strong>NÍVEL 1 (de 326 a menos de 400 pontos)</strong>
            </p>
            <ul className="indentention">
              <li>
                Reconhecer o valor de um orçamento simples e interpretar
                características proeminentes de documentos financeiros do dia a
                dia
              </li>
              <li>
                Aplicar uma única operação numérica básica, incluindo a divisão,
                para responder a questões financeiras.
              </li>
              <li>
                Mostrar uma compreensão das relações entre diferentes elementos
                financeiros, tais como a quantidade de uso (ou consumo) de algo
                e os custos envolvidos.
              </li>
            </ul>

            <p>
              <strong>
                NÍVEL 2 (de 400 a menos de 475 pontos) - Mínimo Adequado
              </strong>
            </p>
            <ul className="indentention">
              <li>
                Começar a aplicar seus conhecimentos sobre produtos financeiros
                comuns e sobre termos e conceitos financeiros comumente usados.
              </li>
              <li>
                Usar determinadas informações para tomar decisões financeiras em
                contextos que são imediatamente relevantes para eles.
              </li>
              <li>
                Reconhecer o valor de um orçamento simples e interpretar
                características proeminentes de documentos financeiros do dia a
                dia.
              </li>
              <li>
                Aplicar uma única operação numérica básica, incluindo a divisão,
                para responder a questões financeiras.
              </li>
              <li>
                Mostrar uma compreensão das relações entre diferentes elementos
                financeiros, tais como a quantidade de uso (ou consumo) de algo
                e os custos envolvidos.
              </li>
            </ul>

            <p>
              <strong>NÍVEL 3 (de 475 a menos de 550 pontos)</strong>
            </p>
            <ul className="indentention">
              <li>
                Aplicar seu entendimento de conceitos, termos e produtos
                financeiros comumente usados em situações que são relevantes
                para eles.
              </li>
              <li>
                Começar a considerar as consequências de decisões financeiras e
                fazer planejamentos financeiros simples em contextos familiares.
              </li>
              <li>
                Fazer interpretações diretas de uma variedade de documentos
                financeiros e aplicar uma série de operações numéricas básicas,
                incluindo cálculo de porcentagens.
              </li>
              <li>
                Escolher as operações numéricas necessárias para resolver
                problemas rotineiros em contextos relativamente comuns, como
                cálculos de orçamentos.
              </li>
            </ul>

            <p>
              <strong>NÍVEL 4 (de 550 a menos de 625 pontos)</strong>
            </p>
            <ul className="indentention">
              <li>
                Aplicar seu entendimento de conceitos e termos financeiros menos
                comuns a contextos que serão relevantes para eles à medida que
                avançam em direção à vida adulta, como gestão de contas
                bancárias e juros compostos em produtos de poupança.
              </li>
              <li>
                Interpretar e avaliar uma série de documentos financeiros
                detalhados, como extratos bancários, e explicar as funções de
                produtos financeiros menos usados.
              </li>
              <li>
                Tomar decisões financeiras levando em conta as consequências de
                longo prazo, como compreender as implicações gerais em termos do
                custo de pagamento de um empréstimo durante um período mais
                longo, e resolver problemas rotineiros em contextos financeiros
                menos comuns.
              </li>
            </ul>

            <p>
              <strong>NÍVEL 5 (625 pontos ou mais</strong>
            </p>
            <ul className="indentention">
              <li>
                Aplicar seu entendimento de uma ampla gama de termos e conceitos
                financeiros em contextos que possivelmente só se tornarão
                relevantes para suas vidas a longo prazo.
              </li>
              <li>
                Analisar produtos financeiros complexos e levar em consideração
                características significativas de documentos financeiros, mas
                que não estão declaradas ou não são imediatamente evidentes,
                tais como custos de uma transação.
              </li>
              <li>
                Trabalhar com um alto grau de precisão e resolver problemas
                financeiros não rotineiros, bem como descrever os possíveis
                resultados de decisões financeiras, mostrando uma compreensão do
                cenário financeiro mais amplo, como, por exemplo, o imposto de
                renda.
              </li>
            </ul>

            <p>
              Os resultados do PISA demonstram que os estudantes brasileiros
              possuem desempenho abaixo da média dos países da OCDE. Na edição
              de 2015, o número de estudantes com desempenho abaixo do nível 2
              (mínimo adequado) era significativamente maior do que estudantes
              nos demais níveis. São 53,3% de estudantes brasileiros no nível 1
              ou abaixo, enquanto que a média da OCDE é de 23,3%.
            </p>
            <p>
              No nível 2, temos 22,2% de estudantes, média bem próxima da
              porcentagem da OCDE, 21,8%. No nível 3, temos 14,8% contra 24,9%
              da OCDE. Já o nível 4 conta com 7,1% de estudantes avaliados,
              enquanto são 19,2% na média da OCDE. O nível 5, por sua vez,
              contempla apenas 2,6% dos estudantes brasileiros, enquanto a média
              da OCDE chega a 11,8% (OECD, 2017).
            </p>
            <p>
              No gráfico abaixo, elaborado pelo Instituto Nacional de Estudos e
              Pesquisas Educacionais Anísio Teixeira (INEP), temos a
              distribuição do desempenho dos estudantes brasileiros conforme
              seus níveis de desempenho em comparação com a média dos países da
              OCDE para a edição do PISA 2015.
            </p>
            <p>
              <strong>GRÁFICO 1</strong> - Desempenho dos estudantes para cada
              nível de proficiência em letramento financeiro (OCDE X Brasil).
            </p>
            <div className="image">
              <img src={tabela} alt="tabela" />

              <p>Fonte: BRASIL/INEP, 2017, p. 2.</p>
            </div>

            <p>
              Foram avaliados 23.141 alunos, em sua maioria matriculados no
              Ensino Médio. O Brasil ficou em último lugar com a pontuação de
              393 (nível 1), enquanto a média da OCDE foi de 489 pontos (nível
              3). Cerca de 55% dos estudantes brasileiros avaliados ficaram no
              nível mais baixo de desempenho e nenhum estado brasileiro alcançou
              a média da OCDE. Estamos, portanto, abaixo da pontuação mínima
              para o exercício de competências financeiras na sociedade atual. A
              China (566), a Bélgica (541) e o Canadá (533) ocupam o topo da
              lista.
            </p>
            <p>
              Uma vez que nenhum estado brasileiro conseguiu alcançar a média da
              OCDE e que o principal fator para este resultado é a desigualdade
              socioeconômica, torna-se bastante significativo seguirmos as
              políticas sugeridas pelo PISA para melhorar o letramento
              financeiro:
            </p>

            <ul>
              <li>Atender às necessidades dos alunos de baixo desempenho.</li>
              <li>
                Enfrentar as desigualdades socioeconômicas o mais cedo possível.
              </li>
              <li>
                Fornecer iguais oportunidades de aprendizagem para meninos e
                meninas.
              </li>
              <li>
                Ajudar os alunos a aproveitar ao máximo as oportunidades de
                aprendizagem disponíveis na escola.
              </li>
              <li>
                Envolver os pais, ao mesmo tempo que os jovens, na discussão
                sobre Letramento Financeiro.
              </li>
              <li>
                Fornecer aos jovens oportunidades seguras para que possam
                aprender por meio de experiências fora da escola.
              </li>
              <li>
                Avaliar o impacto das iniciativas sociais dentro e fora da
                escola.
              </li>
            </ul>

            <p>
              Já os resultados do PISA 2018 mostraram uma pequena melhora no
              desempenho dos estudantes brasileiros, pois ficaram com uma
              pontuação de 420, tirando o Brasil da última para a quarta pior
              posição, acima apenas do Peru (411), Geórgia (403) e Indonésia
              (388). Embora nesta edição o país tenha alcançado a pontuação
              mínima adequada, ainda estamos longe da média da OCDE de 505
              pontos (BERTÃO, 2020).
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="alfabetizacao-financeira/educacao-financeira">
              2.1 - Educação Financeira
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default AlfabetizacaoFinanceira;
