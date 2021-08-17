import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import squareIcon from "../../../assets/icons/quadrado.svg";
import tabela1 from "../../../assets/tabela1.jpg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const CompetenciasSeculo: React.FC = () => {
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
            <Link to="/pilares-educacionais/competenciais-para-o-seculo-xxi">
              <strong>4.1 Competências para o Século XXI</strong>
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
              <h3>4.1 Competências para o Século XXI</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Mediante os desafios e as tendências do mundo contemporâneo, a
              construção de competências torna-se um imperativo, uma vez que o
              diferencial na vida pessoal, social e profissional é e será a
              capacidade de adaptação, equilíbrio e aplicação contextualizada de
              soluções para diversos problemas em circunstâncias também
              diversificadas.
            </p>
            <p>
              Para Charles Fadel, professor e pesquisador da Universidade de
              Harvard e fundador do CCR, a construção da competência compreende
              quatro dimensões interconectadas e complementares entre si: a
              dimensão do conhecimento, a dimensão das habilidades, a dimensão
              do caráter e a dimensão metacognitiva (FADEL; BIALIK; TRILLING,
              2015). O detalhamento destas dimensões e a sua articulação como
              objetos de aprendizagem dentro de estratégias pedagógicas
              inovadoras são objetivos para uma educação do futuro.
            </p>
            <h5>4.1.1 Dimensão do conhecimento (aprender a conhecer)</h5>
            <p>
              A estrutura de conhecimento do CCR envolve alguns conteúdos
              fundamentais para o desenvolvimento do ser humano como a
              alfabetização global, a alfabetização ambiental, o letramento
              informacional, o letramento digital, o pensamento sistêmico e o
              design thinking. O CCR articula os conhecimentos em três linhas
              complementares:
            </p>

            <ul>
              <li>Conceitos e metaconceitos</li>
              <li>Processos, métodos e ferramentas</li>
              <li>Ramificações, assuntos e tópicos</li>
            </ul>

            <p>
              Estas linhas de entendimento estruturam dois eixos, os
              conhecimentos tradicionais e os conhecimentos modernos com um grau
              crescente de interdisciplinaridade. Entre os conhecimentos
              tradicionais temos a matemática, as ciências naturais, a língua
              materna e as línguas estrangeiras, as ciências sociais e as artes.
              Já os conhecimentos modernos envolveriam o bem-estar físico,
              mental e social, finanças pessoais, empreendedorismo e negócios, a
              compreensão de mídias como o jornalismo digital ou o cinema, além
              das tecnologias e engenharias, incluindo conteúdos relacionados à
              programação, robótica e inteligência artificial, bioengenharia e
              técnicas avançadas de design e criação (FADEL; BIALIK; TRILLING,
              2015).
            </p>
            <p>
              Este conjunto de conhecimentos tradicionais aliados aos
              conhecimentos modernos caracterizam os conteúdos necessários a uma
              educação para o futuro e podem ser complementados pela estrutura
              de aprendizagens para o século XXI elaborada pela Parceria P21
              para a Aprendizagem do Século XXI - P21 Partnership for 21st
              Century Learning (BATTELLE FOR KIDS, 2021):
            </p>

            <ul>
              <li>consciência global</li>
              <li>alfabetização financeira e econômica</li>
              <li>alfabetização em negócios e empreendedorismo</li>
              <li>alfabetização cívica</li>
              <li>alfabetização em saúde</li>
              <li>alfabetização ambiental</li>
            </ul>

            <p>
              Notamos, portanto, que educação financeira, formação empreendedora
              e domínio de tecnologias aliadas ao desenvolvimento de uma
              consciência pessoal e coletiva definem os saberes necessários ao
              cidadão do século XXI.
            </p>

            <h5>4.1.2 Dimensão das habilidades (aprender a fazer)</h5>
            <p>
              A estrutura de habilidades do CCR é bem simples, contemplando
              aspectos relacionados à sociedade em rede como criatividade,
              pensamento crítico, comunicação, colaboração e aprendizado
              aplicado (FADEL; BIALIK; TRILLING, 2015). Nota-se que o CCR não
              discrimina habilidades técnicas, mas socioemocionais, evidenciando
              a importância dessas competências para o desenvolvimento dos
              estudantes. Por outro lado, o P21 entende como habilidades
              aspectos que o CCR inclui não só na dimensão das habilidades, mas
              nas dimensões do caráter e metacognitiva.
            </p>
            <p>
              Manteremos como critério organizador as estruturas do CCR e, por
              isso, apresentamos apenas as habilidades que não se enquadram como
              caráter e metacognição pelo P21, que são a alfabetização
              informacional, a alfabetização midiática e a alfabetização nas
              tecnologias de informação e comunicação (BATTELLE FOR KIDS, 2021).
              Nesse caso, entendemos o aspecto do saber fazer mediante a
              aplicação de competências socioemocionais em contextos de
              relacionamento interpessoal. Também coloca-se em evidência a
              habilidade para compreender as TIC e aplicá-las criticamente na
              realidade.
            </p>

            <h5>4.1.3 Dimensão do caráter (aprender a ser e a conviver)</h5>
            <p>
              Fadel, Bialik e Trilling (2015), apontam seis qualidades do
              caráter: mindfulness, curiosidade, coragem, resiliência, ética e
              liderança. Todos esses aspectos do caráter se articulam em torno
              de uma existência do sujeito no mundo que é sempre partilhada com
              o outro, portanto, construída por meio das relações com outras
              pessoas e com o ambiente. O CCR (2015, p. 17) indica que as
              finalidades da educação do caráter são:
            </p>
            <ul>
              <li>Criar uma base para aprendizagem ao longo da vida.</li>
              <li>
                Promover relações de sucesso em casa, na comunidade e no local
                de trabalho.
              </li>
              <li>
                Desenvolver os valores e as virtudes pessoais para a
                participação sustentável no mundo globalizado.
              </li>
            </ul>
            <p>
              Nesse caso, observamos que o ato de aprender aparece como condição
              humana para manter a sustentabilidade e possibilitar a vida em
              harmonia dos diferentes povos e culturas. Para compreender
              detalhadamente como se dá a formação do caráter a partir das seis
              qualidades destacadas a partir de uma pesquisa intensa e completa,
              apresentamos os diversos valores associados a essas qualidades,
              conforme o CCR (2015, p. 121):
            </p>

            <div className="tabela">
              <img src={tabela1} alt="tabela" />

              <p>Fonte: CCR (2015, p. 121)</p>
            </div>

            <p>
              Acima, está um quadro bem definido de valores a serem construídos
              no que se refere à dimensão do caráter, o que corresponde às
              competências socioemocionais. Ao mesmo tempo, podemos complementar
              a abordagem do CCR com as habilidades para vida e carreira do P21
              (2021) que agrega flexibilidade, adaptabilidade, iniciativa,
              autodirecionamento, habilidades sociais e interculturais;
              produtividade e prestação de contas; liderança e responsabilidade.
              Com isso, temos um conjunto completo de valores e aspectos a serem
              construídos em uma educação para o futuro.
            </p>

            <h5>4.1.4 Dimensão metacognitiva (aprender a aprender)</h5>
            <p>
              O aprender a aprender ou a dimensão metacognitiva do conhecimento
              é um dos mais valiosos aspectos de uma educação para o século XXI
              se considerarmos as tendências e desafios contemporâneos,
              sobretudo no que se refere às constantes mudanças. Ou seja, são
              necessários aos estudantes, aos cidadãos e aos trabalhadores, a
              capacidade de compreender suas próprias formas de aquisição do
              conhecimento e o reconhecimento dos seus estilos de aprendizado.
            </p>
            <p>
              Essa dimensão é considerada a mais nobre, justamente porque ela
              atravessa todas as outras, uma vez que a consciência dos próprios
              processos cognitivos proporciona aos sujeitos a capacidade de
              construir suas próprias competências e agirem como catalisadores
              de inovações em seus contextos e realidades. Aprender, desaprender
              e reaprender tornam-se os maiores ativos dos sujeitos, tendo em
              vista a progressão entre suas capacidades de metacognição,
              conforme síntese do CCR (2015, p. 136):
            </p>
            <p className="indetention">
              1. Verbalização do conhecimento que já está no estado verbal (por
              ex., lembrar-se do que aconteceu em uma história). <br />
              2. Verbalização do conhecimento não verbal (por ex., lembra-se
              como alguém resolveu o cubo mágico). <br />
              3. Verbalização de explicações do conhecimento verbal ou não
              verbal (por ex., explicar como uma pessoa faz uso das estruturas
              retóricas de uma história durante a leitura).
            </p>
            <p>
              Observamos que, nesse caso, a forma de avaliação da metacognição
              utilizada é a capacidade de verbalização daquilo que foi
              aprendido. A possibilidade de descrever detalhadamente com
              riqueza, rigor e consciência os processos de aprendizagem
              demonstram o nível de metacognição admitido, somada à capacidade
              dos sujeitos de integrar e relacionar conhecimentos, habilidades e
              atitudes.
            </p>
            <p>
              O P21, por sua vez, nos apresenta as habilidades de aprendizagem e
              inovação, que são discriminadas nos quatro Cs: criatividade e
              inovação (
              <span className="itallic">creativity and innovation</span>);
              pensamento crítico e resolução de problemas (
              <span className="itallic">
                critical thinking and problem solving
              </span>
              ); comunicação (<span className="itallic">communication</span>) e
              colaboração (<span className="itallic">collaboration</span>).
            </p>
            <p>
              Ao refletirmos sobre as competências necessárias para o século XXI
              a partir das estruturas construídas pelo CCR e pelo P21 concluímos
              que as competências socioemocionais atreladas aos diferentes usos
              das tecnologias e da comunicação são o cerne do perfil de formação
              ideal para enfrentar os desafios que o futuro reserva.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais/bncc-novo-ensino-medio">
              4.2 A BNCC e o novo ensino médio
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default CompetenciasSeculo;
