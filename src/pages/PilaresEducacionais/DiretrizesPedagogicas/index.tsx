import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const DiretrizesPedagogicas: React.FC = () => {
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
            <Link to="/pilares-educacionais/diretrizes-pedagogicas-para-o-ambiente-de-aprendizagem">
              <strong>
                4.6 Diretrizes pedagógicas para o ambiente de aprendizagem
              </strong>
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
              <h3>
                4.6 Diretrizes pedagógicas para o ambiente de aprendizagem
              </h3>
            </div>
          </div>

          <ContentText>
            <p>
              As aulas Mooney possuem uma estrutura definida para fomentar a
              participação dos estudantes e efetivar a construção das
              competências financeiras e socioemocionais almejadas. A seguir
              apresentaremos cada uma das etapas de uma aula contemplando o
              tempo e os espaços para sua aplicação.
            </p>

            <h5>4.6.1 A aula Mooney</h5>
            <p>
              As aulas da Mooney são estruturadas em 5 momentos com propósitos
              específicos. Inicia-se com um diálogo de sensibilização breve para
              aproximar os alunos dos objetivos almejados e ambientá-los nos
              propósitos do momento (Introdução). Na sequência são propostas
              atividades práticas, lúdicas e colaborativas de diversas naturezas
              para que os alunos tragam à tona os seus conhecimentos prévios e
              tentem resolver os desafios construindo os conhecimentos sem uma
              explicação teórica do professor (Atividades).
            </p>
            <p>
              Em um próximo momento, abre-se uma discussão mediada pelo docente,
              na qual os alunos apresentam as suas considerações sobre a
              atividade realizada e as conclusões dela tiradas (Discussão). No
              quarto momento, o professor apresenta os conceitos formais
              trabalhados, conectando-os às experiências vividas nas atividades
              e às intervenções dos alunos (Conceitos). No momento final, o
              professor faz apontamentos finais e propõe a continuidade das
              reflexões (Fechamento).
            </p>
            <p>
              Todos os planos de aula contém um título, os conceitos abordados,
              os objetivos da aula, as competências gerais da BNCC e os recursos
              utilizados.
            </p>
            <p>
              <strong> I) INTRODUÇÃO</strong>
            </p>
            <p>
              Trata-se de um acolhimento inicial e contextualização. Neste
              momento, o professor receberá os alunos e, caso a aula seja uma
              continuação de um tema anterior, deve ser feita a conexão, sem
              entrar em detalhes conceituais.
            </p>
            <p>
              A ideia da introdução é funcionar como sensibilização ao tema por
              meio do diálogo e de dinâmicas. Este momento é importante para
              gerar vínculo com os alunos e possibilitar um ambiente amigável de
              troca de experiências em torno do tema a ser desenvolvido.
            </p>
            <p>
              <strong>II) ATIVIDADES</strong>
            </p>
            <p>
              Trata-se de uma ou algumas atividades lúdicas de engajamento
              positivo diante do tema da aula. Consideramos as metodologias
              ativas de aprendizagem, nas quais os alunos aprendem fazendo, são
              protagonistas e resolvem problemas da realidade a sua volta.
              Portanto, propomos experiências que proporcionam engajamento e
              interação dos alunos, manifestando aspectos cognitivos, como o
              raciocínio e a análise; e aspectos afetivos, como vínculos com os
              colegas, com o professor e com a comunidade de modo geral.
            </p>
            <p>
              <strong>
                Evitar falar dos conceitos ou teorias que serão trabalhados na
                atividade, para evitar a passividade e desconexão com a vivência
                do aluno.
              </strong>
            </p>
            <p>
              Se apresentamos um conceito inerte, sem sentido pessoal para o
              aluno, corre-se o risco de não conquistar o interesse e a atenção
              dos alunos e limitar a sua capacidade de imaginação e articulação
              das ideias. Ao confrontá-los com uma atividade que seja divertida
              e intrigante, o conteúdo que será sintetizado em outro momento da
              aula se ancora na afetividade, favorecendo o engajamento positivo.
            </p>
            <p>
              Caso surja alguma dúvida no processo de execução da atividade que
              vá além da compreensão do enunciado das instruções, esta deve ser
              sempre uma oportunidade de provocar os alunos a serem criativos e
              assertivos na construção de uma resposta.
            </p>
            <p>
              <strong>O erro deve ser sempre incentivado e encorajado</strong>,
              uma vez que as metodologias ativas podem gerar desconforto ou
              insegurança nos alunos que podem estar acostumados com um processo
              passivo de receber o conteúdo. Este estranhamento é uma
              oportunidade de encorajar o aluno a tomar decisões a partir do que
              compreendeu, acolhendo quaisquer erros ou desvios honestos do que
              foi inicialmente idealizado pelo professor quanto à execução da
              aula.
            </p>
            <p>
              <strong>
                Jamais deve ser tirado do aluno o papel de protagonismo
              </strong>
              , como indicando caminhos para que ele consiga executar a
              atividade com a liderança do professor na execução. Ou seja, se o
              professor lança uma pergunta ou desafio no contexto da atividade,
              deve dar tempo para que o aluno resolva sozinho.
            </p>
            <p>
              <strong>III) DISCUSSÃO</strong>
            </p>
            <p>
              Nessa seção, o professor apresenta uma discussão a partir da
              experiência vivida pelos alunos para que cheguem às conclusões
              possíveis. Uma vez executado o momento anterior, o professor
              conduzirá uma discussão incentivando os alunos a compartilharem
              vivências e as conclusões às quais tenham chegado, já direcionando
              para o tema da aula. O objetivo é promover a reflexão coletiva e a
              assimilação de outros pontos de vista.
            </p>
            <p>
              As perguntas feitas pelo professor devem ser sempre abertas e
              convidativas para conclusões diversas, de forma que a diferença de
              pontos de vista possa ser celebrada e acolhida na discussão. Não
              deve haver sobreposição de perspectiva ou indução do professor
              para que a conclusão dele ou de outro aluno seja preponderante. Ao
              mesmo tempo, é importante que as respostas dos alunos possam
              servir de insumo para que o professor faça novas perguntas ou
              provocações.
            </p>
            <p>
              Este momento é, particularmente, rico para o desenvolvimento de
              competências socioemocionais, uma vez que exposição, escuta,
              negociação, argumentação e cooperação estão sendo exercitados
              ativamente. Nesse processo, o exemplo que o professor dá de
              escutar e acolher os pontos diferentes, é essencial para a
              dinâmica do grupo se desenvolver de forma saudável.
            </p>
            <p>
              <strong>IV) CONCEITOS</strong>
            </p>
            <p>
              Nesse momento ocorre a introdução formal aos conceitos previstos
              para a aula. Aqui, o conceito formal, caso seja adequado para esta
              aula, pode ser apresentado de forma a{" "}
              <strong>
                articular o que os alunos compartilharam, evitando contrariar ou
                apontar erros conceituais feitos pelos alunos no processo de
                descoberta
              </strong>
              .
            </p>
            <p>
              A intenção é que, a partir da atividade proposta, uma teorização
              possa dar suporte para que consigam dar sentido à atividade
              anterior e às vivências do cotidiano. A generalização do conceito
              para outras situações da vida cotidiana é muito bem-vinda e
              perguntas disparadoras podem ser convenientes para provocar os
              alunos a relacionarem o conceito com o que vivem.
            </p>
            <p>
              <strong>V) FECHAMENTO</strong>
            </p>
            <p>
              Aqui, o professor deverá dar apontamentos finais, podendo
              direcionar a reflexão para algum ponto importante que tenha
              faltado durante a discussão da atividade. Alguma indicação feita
              pelo professor pode ser muito bem-vinda, desde que não imprima
              juízo de valor que limite ou desqualifique os diferentes pontos de
              vista.
            </p>

            <h5>4.6.2 Planejamento docente</h5>
            <p>
              Os planos de aula da Mooney contemplam, além da descrição das
              dinâmicas e atividades em si, um conjunto de elementos de suporte
              ao professor como uma explicação mais detalhada dos conceitos
              abordados para que possa se preparar e ter mais segurança no
              momento da aula. Os planos contam com sugestões de estratégias de
              adaptação para ministrar as aulas no contexto do ensino remoto,
              propostas de reflexão a serem sugeridas para casa e materiais de
              apoio para aplicação das atividades.
            </p>
            <p>
              <strong>EXPLICAÇÃO DOS CONCEITOS ABORDADOS</strong>
            </p>
            <p>
              Uma explicação teórica breve dos conceitos que serão trabalhados
              na aula. Esta explicação visa apenas amparar o professor com o
              mínimo de fundamentação teórica, para que ele se sinta confortável
              em conduzir as aulas da Mooney, já que muitas vezes encontramos
              professores que não tiveram experiências prévias com as temáticas
              abordadas.
            </p>
            <p>
              <strong>ESTRATÉGIAS PARA O ENSINO REMOTO</strong>
            </p>
            <p>
              Adaptações necessárias para aplicação das atividades indicadas.
              Portanto, considere-se a situação de uma aula realizada pelo
              Google Meet, Zoom, Microsoft Teams ou semelhante.
            </p>
            <p>
              <strong>PROPOSTA PARA CASA</strong>
            </p>
            <p>
              Atividade complementar para casa, servindo de continuação para o
              que foi vivenciado no ambiente de aprendizagem, explorando outros
              aspectos da vida cotidiana que se relacionam com o tema. Isso pode
              ser muito construtivo para promover o diálogo em família ou com
              outras pessoas do convívio do aluno. Além disso, aqui é uma ótima
              oportunidade para sugerir o uso do Mooney App (Cofrinhos, Missões
              e Jornada) após a aula. É importante ressaltar que para cada aula
              que o professor desenvolve, há uma trilha específica a ser
              realizada no Mooney App ou Web após a aula.
            </p>
            <p>
              <strong>MATERIAL DE APOIO</strong>
            </p>
            <p>
              Os materiais de apoio contam com tabelas, mapas conceituais,
              quadros de imagens, jogos, e dinâmicas. Esses materiais e recursos
              estão ligados às estratégias de ensino e aprendizagem como
              gamificação, demonstração, simulação, storytelling,
              situação-problema, estudo de caso, entre outros.
            </p>

            <h5>4.6.3 Estratégias pedagógicas</h5>
            <p>
              Nos planos de aula da Mooney estão descritas as estratégias
              pedagógicas que são o cerne da metodologia proposta no contexto do
              programa de Alfabetização Financeira. Essas estratégias são postas
              em harmonia com diversas práticas contextualizadas frente às
              temáticas estabelecidas e ao público-alvo das aulas a serem
              ministradas. Elas são utilizadas em todas as etapas das aulas,
              sobretudo em Atividades.
            </p>
            <p>
              <strong>DINÂMICA DE GRUPO</strong>
            </p>
            <p>
              As atividades com jogos envolvem cooperação, competição e
              participação para a realização de objetivos específicos. São
              lúdicas e divertidas, gerando motivação e confiança nos
              participantes. Reforçam aspectos como diversidade e identidade ao
              mesmo tempo que mobilizam o raciocínio e a empatia.
            </p>
            <p>
              <strong>TRABALHO EM EQUIPE</strong>
            </p>
            <p>
              Consiste no agrupamento dos alunos em equipes com propósitos
              semelhantes ou complementares com objetivo de cooperação ou de
              competição. No interior de cada grupo serão definidos diversos
              papéis e etapas para as atividades propostas. É essencial que o
              professor acompanhe por alguns momentos cada um dos grupos
              formados trabalhando para provocar reflexões ou sanar dúvidas.
              Estes grupos podem ser formados por critérios de afinidade,
              aleatoriamente ou por critérios pedagógicos definidos pelo
              professor.
            </p>
            <p>
              <strong>JOGOS E GAMIFICAÇÃO</strong>
            </p>
            <p>
              Podem ser introduzidos jogos previamente preparados ou estratégias
              gamificadas, conforme os planos de aula da Mooney. Quanto mais
              conseguirmos proporcionar imersão aos alunos, mais há chances de
              nos momentos de jogos ou gamificação entrarem em estado de flow
              (fluxo), ou seja, ficarem totalmente compenetrados e envolvidos
              com as atividades gerando prazer, engajamento e concentração. As
              atividades envolvendo jogos e gamificação da Mooney contém
              objetivos claros, preveem feedbacks imediatos aos alunos e buscam
              equilibrar os desafios às capacidades de resolução dos alunos de
              diferentes faixas etárias. Além disso, são propostas que incluem
              em sua mecânica a cooperação, as narrativas e a exploração.
            </p>
            <p>
              <strong>SITUAÇÃO-PROBLEMA</strong>
            </p>
            <p>
              As situações-problema são propostas em forma de narrativas e
              apresentam um ambiente complexo para que os alunos possam
              desvendar as formas de resolução. São apresentadas sugestões de
              contextualização e condução, além do desenvolvimento passo a passo
              para que o professor possa aplicá-las e extrair delas as
              experiências necessárias para a discussão dos conceitos abordados.
            </p>
            <p>
              <strong>MÃO NA MASSA E CULTURA MAKER</strong>
            </p>
            <p>
              Atividades envolvendo o reaproveitamento e a ressignificação de
              materiais recicláveis e sucatas. Trabalhando criativamente com
              esses materiais os alunos podem construir narrativas, exemplificar
              conceitos, realizar simulações e demonstrações.
            </p>
            <p>
              <strong>DEBATE E JÚRI SIMULADO</strong>
            </p>
            <p>
              Consiste na organização da turma em grupos para debater algum
              assunto em específico, podendo ser divididos ou não em contrários
              e favoráveis ao tema tratado. Uma opção é a realização de debate
              envolvendo a situação de um júri simulado no qual pode haver
              acusação, defesa, juiz, jurados e etc.
            </p>
            <p>
              <strong>DRAMATIZAÇÃO</strong>
            </p>
            <p>
              Envolve a definição de papéis para que os alunos possam ensaiar e
              realizar pequenas apresentações para exemplificar metáforas e
              traduzir alguns conceitos em realidade. Nem todos os alunos
              precisam atuar. Alguns podem participar da produção e outros podem
              apenas assistir e opinar ao final.
            </p>
            <p>
              <strong>DEMONSTRAÇÃO/SIMULAÇÃO</strong>
            </p>
            <p>
              A demonstração ou simulação pode ser agregada a diversas
              atividades como ponto de observação para a aplicação de conceitos
              em tempo real. Pode envolver materiais diversos para simular
              estruturas reais ou tecnologias que possam facilitar a exploração.
            </p>
            <p>
              <strong>MAPA CONCEITUAL OU MAPA MENTAL</strong>
            </p>
            <p>
              O mapa mental é uma estratégia para que os alunos possam exercitar
              a sua capacidade de relacionar ideias ou conceitos,
              significativamente, construindo uma rede de ligações entre
              diferentes ideias em um suporte físico como o papel ou em um
              suporte eletrônico como um software específico ou para criação e
              edição de imagens. O que difere o mapa mental do mapa conceitual é
              que este último contempla, também, frases de ligação entre as
              ideias e conceitos relacionados.
            </p>
            <p>
              <strong>ROTAÇÃO POR ESTAÇÕES</strong>
            </p>
            <p>
              Pode ser elaborada pelo professor ou pelos alunos, a rotação por
              estações, para exemplificar, simbolizar ou simular conceitos e
              processos trabalhados em aula. Os alunos podem ser divididos em
              grupos para visitar os espaços disponíveis para observação e
              interação. Em cada uma estação deve haver um tema ou dimensão do
              tema central, podendo ser incorporados desafios e jogos para que
              os grupos vivenciem.
            </p>
            <p>
              <strong>EXPOSIÇÃO DIALOGADA</strong>
            </p>
            <p>
              Quando o professor for utilizar a exposição do tema para
              aprofundar um assunto, é importante trazer algum exemplo ou tirar
              dúvidas para que sejam abertos diálogos com os alunos, gerando um
              clima de interação e entusiasmo na turma.
            </p>
            <p>
              <strong>PESQUISA</strong>
            </p>
            <p>
              Práticas de pesquisa podem ser incorporadas a partir de suportes
              eletrônicos como os celulares ou a partir de materiais
              disponibilizados pelo professor como livros, revistas, jornais e
              etc. É importante que a pesquisa esteja conectada com objetivos
              específicos de aprendizagem e que haja um roteiro para os alunos,
              assim como a presença do professor como guia.
            </p>
            <p>
              <strong>PROJETOS</strong>
            </p>
            <p>
              Os projetos são práticas capazes de agregar diversas outras
              estratégias e podem durar uma ou mais aulas, a depender do produto
              ou processo almejado. São ricas experiências que envolvem a
              definição de equipes com diferentes papéis para solucionar
              problemas e situações do cotidiano dos estudantes.
            </p>
            <p>
              <strong>SALA DE AULA INVERTIDA</strong>
            </p>
            <p>
              Propõe-se atividades de estudo aos alunos a serem realizadas antes
              das aulas, o que possibilita aproveitar o momento da aula para
              aprofundamento, discussão e encaminhamento de dúvidas. No contexto
              das nossas aulas, pode-se solicitar aos alunos a realização de
              atividades da Jornada do Mooney App ou Web ou perguntar aos pais e
              responsáveis questões relativas aos temas, além de buscas por
              vídeos, filmes e séries que possam ilustrar e exemplificar os
              assuntos tratados.
            </p>

            <h5>4.6.4 Avaliação da aprendizagem</h5>
            <p>
              Propõe-se a aplicação de uma avaliação formativa para o
              desenvolvimento da Alfabetização Financeira, buscando compreender
              se os alunos se mantiveram engajados diante das propostas e
              temáticas; se demonstraram ter incorporado novos conceitos em seu
              vocabulário e repertório, se efetivaram mudanças de hábito no seu
              dia a dia e se conseguiram extrapolar os exemplo e a aula para o
              contexto familiar e social, inclusive com o uso do Mooney App ou
              Web.
            </p>
            <p>
              Nesse sentido, entendemos que não há uma mensuração do que é certo
              ou errado, mas do impacto do projeto na vida dos alunos e nas suas
              consequências enquanto formação de competências. Evidentemente que
              os conteúdos e atividades propostos pela Mooney podem ser
              adaptados aos propósitos do projeto pedagógico de cada escola.
            </p>
            <p>
              Uma opção para ficar no terreno da gamificação seria o
              estabelecimento de um sistema de pontos para que os alunos possam
              vencer os desafios e as atividades em aulas gradativamente e, com
              isso, receber recompensas simbólicas que podem ser atreladas ao
              Mooney App ou Web.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/palavras-finais">5.0 Palavras Finais</Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default DiretrizesPedagogicas;
