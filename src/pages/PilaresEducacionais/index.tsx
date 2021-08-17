import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import squareIcon from "../../assets/icons/quadrado.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../styles";

const PilaresEducacionais: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/pilares-educacionais">
              <strong>4.0 Pilares Educacionais</strong>
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
              <h3>4.0 Pilares Educacionais</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A Mooney sustenta a sua proposta pedagógica nos debates
              contemporâneos sobre as competências necessárias para os cidadãos
              e profissionais do século XXI, a partir de referências adotadas e
              reconhecidas internacionalmente por diferentes organizações,
              instituições de pesquisa, educadores, pesquisadores e
              representantes do mercado de trabalho e da sociedade civil.
            </p>
            <p>
              Sabemos que acompanhar as mudanças no mundo é cada vez mais
              desafiador, de modo que a educação passa a ser um processo aberto,
              amplo e contínuo envolvendo um número cada vez maior de atores e
              indicadores em suas definições. Por isso, acreditamos que as
              escolas parceiras, os professores, os estudantes e as famílias se
              envolvam no propósito de construir uma educação financeira
              inovadora.
            </p>
            <p>
              De acordo com o Center for Curriculum Redesign (CCR), organização
              internacional sem fins lucrativos, a principal pergunta da
              educação contemporânea é: “o que os alunos devem aprender para o
              século XXI?” (CCR, 2021). Neste questionamento constam duas
              grandes frentes de reflexão. A primeira é o entendimento de como
              os alunos aprendem e como isso pode ser proporcionado pela
              educação. A segunda compreende as competências necessárias para a
              vida no século XXI.
            </p>
            <p>
              Por que é tão comum pensarmos na educação com essa marca do século
              XXI? O que há de tão especial neste nosso século que avança para
              sua terceira década? A publicação{" "}
              <strong>Educação em quatro dimensões</strong>:{" "}
              <span className="itallic">
                as competências que os estudantes devem ter para atingir o
                sucesso
              </span>{" "}
              (FADEL; BIALIK; TRILLING, 2015) aponta alguns desafios
              significativos para as sociedades deste século e,
              consequentemente, impactam as escolas e as famílias.
            </p>
            <p>
              Nessa direção, há um descompasso entre as transformações
              culturais, as mudanças do mundo e a educação, sobretudo no que se
              refere aos avanços das tecnologias digitais ocorridas nos últimos
              anos. Assim, a educação frustra, de certa forma, a promessa de
              conduzir as crianças e jovens para uma vida melhor marcada por
              reflexos sociais como “altos níveis de engajamento cívico e
              social, saúde e bem-estar, empregos de boa qualidade,
              produtividade econômica, sustentabilidade ecológica, etc.” (FADEL;
              BIALIK; TRILLING, 2015, p. 17).
            </p>
            <p>
              O CCR destaca várias tendências e desafios para o momento
              contemporâneo a partir de indicações extraídas do Fórum Econômico
              Mundial, dentre as quais ressaltamos:
            </p>
            <ul>
              <li>
                Aumento da disparidade na rede e riqueza: desemprego ou
                subemprego; falha de governança nacional; migração involuntária
                em grande escala; instabilidade social profunda;
              </li>
              <li>Envelhecimento da população: crise fiscal;</li>
              <li>
                Classe média em expansão nas economias emergentes: falha de
                planejamento urbano;
              </li>
              <li>
                Mudança climática e degradação ambiental: crise alimentar; crise
                da água;
              </li>
              <li>
                Mudança no cenário da governança internacional: colapso ou crise
                do Estado; conflito entre Estados.
              </li>
            </ul>
            <p>
              Todos estas questões mostram o quanto precisamos estar preparados
              para os desafios da sustentabilidade nas próximas décadas, o que
              implica na interdependência entre a sustentabilidade ambiental,
              social e econômica, abrindo espaços para a economia criativa,
              economia solidária, empreendedorismo social e uma consciência cada
              vez maior de corações e governos em relação aos impactos das
              atividades humanas no mundo e a possibilidade de equilíbrio em um
              contexto de alta volatilidade.
            </p>
            <p>
              Dentro deste contexto torna-se importante o acrônimo VUCA, evocado
              pelo CCR: “volatilidade (volatility), incerteza (uncertainty),
              complexidade (complexity) e ambiguidade (ambiguity)” (FADEL;
              BIALIK; TRILLING, 2015, p. 22). Destaca-se o progresso exponencial
              das tecnologias e suas transformações sociais decorrentes que
              mudam significativamente a necessidade de competências para se
              viver no século XXI. Abaixo relacionamos algumas tendências a
              serem observadas:
            </p>
            <ul>
              <li>Engenharia genética</li>
              <li>Engenharia biomédica</li>
              <li>Energia renovável</li>
              <li>Acesso global à internet</li>
              <li>Ciências de dados</li>
              <li>Inteligência artificial</li>
              <li>Tecnologia em nuvem</li>
            </ul>
            <p>
              A automatização de diversos serviços e processos atrelada às
              mudanças econômicas e sociais mostram que as tendências para
              trabalho e emprego durante as próximas décadas serão intensas e
              aceleradas, o que gera novas demandas e necessidades do ponto de
              vista educacional, já que a assimilação de uma quantidade maior de
              conteúdos parece inviável e mesmo indesejável, uma vez que temos
              acesso a uma quantidade sem precedentes de informações. Assim, o
              destino de uma educação para o futuro é o “[...] aprendizado de
              mais conhecimentos relevantes, em como aplicar o conhecimento de
              maneiras novas e diferentes e no desenvolvimento de outras três
              dimensões do aprendizado: habilidades, qualidades do caráter e
              estratégias de meta-aprendizado” (FADEL; BIALIK; TRILLING, 2015,
              p. 36).
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="pilares-educacionais/competenciais-para-o-seculo-xxi">
              4.1 Competências para o século XXI
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default PilaresEducacionais;
