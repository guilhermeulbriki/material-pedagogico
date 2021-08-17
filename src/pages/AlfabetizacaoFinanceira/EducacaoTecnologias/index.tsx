import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import moneyIcon from "../../../assets/icons/dinheiro.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const EducacaoTecnologias: React.FC = () => {
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
            <Link to="/alfabetizacao-financeira/educacao-tecnologias-gamificacao">
              <strong>2.3- Educação, Tecnologias e Gamificação</strong>
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
              <h3>2.3- Educação, Tecnologias e Gamificação</h3>
            </div>
          </div>

          <ContentText>
            <p>
              A presença das Tecnologias digitais de Informação e Comunicação
              (TIC) na vida social e o seu uso na educação são constantes e cada
              vez mais diversificados. O desenvolvimento das tecnologias é cada
              dia mais acelerado e as mudanças na cultura escolar e no mundo do
              trabalho tornam-se um desafio para os jovens do século XXI.
            </p>
            <p>
              As tecnologias digitais trazem cada vez mais possibilidades de
              construção pedagógica, levando em consideração a capilaridade da
              utilização de redes sociais por usuários de todos os tipos, a
              busca por entretenimento e diversão por meio das tecnologias e da
              web. Nesse caso, a cultura digital exerce uma grande influência na
              sociedade contemporânea, sobretudo nas crianças e jovens,
              considerados nativos digitais.
            </p>
            <p>
              Nativos digitais são aqueles que nasceram em um mundo mediado por
              tecnologias digitais como smartphones, smart TVs, notebooks e pen
              drives que sucederam as tecnologias analógicas utilizadas por
              muitos que hoje são adultos, os imigrantes digitais, como livros,
              televisões comuns, disquetes, câmeras de vídeo, dentre outros
              artefatos e equipamentos cujo funcionamento não era baseado no
              meio digital (COELHO; COSTA; MATTAR-NETO, 2018).
            </p>
            <p>
              À medida que as tecnologias digitais vão mudando o nosso
              comportamento e o comportamento dos alunos, a escola e a educação
              passaram a ter o desafio de lidar com a imersão e o interesse dos
              jovens na cultura digital, sobretudo porque as tecnologias móveis
              passaram a ter uma presença constante e significativa no cotidiano
              de todos. Segundo a Pesquisa Nacional de Amostra por Domicílios
              (IBGE, 2018), em 97,2% das residências brasileiras o celular é o
              principal dispositivo de acesso à internet.
            </p>
            <p>
              Quando falamos na mobilidade das tecnologias móveis também
              enxergamos a multiplicidade de ferramentas disponíveis para
              comunicação entre usuários, empresas, coletivos e governos. A
              circulação da informação, em rede, permite a conexão entre as
              pessoas, as instituições e os diferentes dados da realidade,
              possibilitando uma compreensão mais complexa da mesma. Somem-se as
              possibilidades cada vez mais ricas de interação que proporcionam a
              aproximação das fronteiras espaciais, temporais e afetivas.
            </p>
            <p>
              A ampliação da percepção da realidade que as tecnologias digitais
              oferecem proporciona ao contexto educacional a possibilidade de
              tornar os alunos produtores de conhecimento, já que as
              possibilidades de pesquisa e estudo tornam-se passíveis de
              criatividade, interação e colaboração. O compartilhamento torna a
              aprendizagem colaborativa um processo central para o estudante à
              medida que o caráter autoral da sua atuação fica evidente, ao
              mesmo tempo que o papel de direcionamento ocupado pelo professor
              se modifica em função de uma atuação mais ligada à mediação de
              todas essas relações atravessadas pelas tecnologias.
            </p>
            <p>
              O uso pedagógico das tecnologias envolve a concepção de
              ferramentas e processos para aprendizagem, a aplicação e reflexão
              sobre as estratégias pedagógicas e a reorientação das dinâmicas de
              avaliação. Para que seja possível tornar a aprendizagem
              significativa, o uso das tecnologias nos ambientes de aprendizagem
              deve ser intencional e contextualizado, evitando-se a aplicação da
              tecnologia pela tecnologia ou como puro entretenimento. O desafio
              é potencializar o aprendizado por meio das tecnologias e por isso
              é fundamental que a sua introdução ao contexto escolar ocorra
              acompanhada de inovações pedagógicas e metodológicas.
            </p>
            <p>
              Uma das formas mais significativas de utilização das tecnologias
              na educação é com o uso de jogos digitais ou em processos de
              gamificação. A aprendizagem baseada em jogos envolve o uso de
              jogos comerciais e educacionais em situações de aprendizagem, o
              debate sobre os jogos ou a produção de jogos pelos próprios
              alunos. A gamificação, por sua vez, significa a aplicação de
              princípios de design de jogos em atividades pedagógicas (MATTAR,
              2010).
            </p>
            <p>
              Uma das formas mais significativas de utilização das tecnologias
              na educação é com o uso de jogos digitais ou em processos de
              gamificação. A aprendizagem baseada em jogos envolve o uso de
              jogos comerciais e educacionais em situações de aprendizagem, o
              debate sobre os jogos ou a produção de jogos pelos próprios
              alunos. A gamificação, por sua vez, significa a aplicação de
              princípios de design de jogos em atividades pedagógicas (MATTAR,
              2010).
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="plataforma-mooney">
              2.4 - Plataforma Mooney (App e Web)
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default EducacaoTecnologias;
