import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import tabela2 from "../../../assets/tabela2.jpg";
import tabela3 from "../../../assets/tabela3.jpg";
import tabela4 from "../../../assets/tabela4.jpg";
import squareIcon from "../../../assets/icons/quadrado.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../../styles";

const BnccEnsinoMedio: React.FC = () => {
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
            <Link to="/pilares-educacionais/bncc-novo-ensino-medio">
              <strong>4.2 A BNCC e o Novo Ensino Médio</strong>
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
              <h3>4.2 A BNCC e o Novo Ensino Médio</h3>
            </div>
          </div>

          <ContentText>
            <p>
              No Brasil, a educação por competências está articulado à Base
              Nacional Comum Curricular (BNCC, 2018) a partir da concepção de
              aprendizagens essenciais para todas as etapas da Educação Básica,
              dos 0 aos 17 anos. Nesse período, a igualdade educacional é
              proporcionada pelo conceito de equidade, que prevê a
              personalização da aprendizagem e a incorporação de diversidade e
              inclusão nas estratégias pedagógicas. Assim, o direito à educação
              é efetivado no contexto do direito à aprendizagem e nessa direção
              são definidas as “Dez Competências Gerais da Educação Básica”:
            </p>

            <div className="tabela">
              <img src={tabela2} alt="tabela" />
            </div>

            <p>
              Há um certo consenso em torno da admissão das competências básicas
              6 a 10 como socioemocionais, embora elas estejam articuladas e
              distribuídas em todas as aprendizagens relacionadas na Base.
              Temos, portanto, uma sinergia entre as estruturas do CCR e P21 e
              as diretrizes da educação brasileira no que se refere à
              argumentação, autoconhecimento, autocuidado, empatia, cooperação,
              responsabilidade e cidadania.
            </p>
            <p>
              A competência 6, por outro lado, articula mais detalhadamente o
              significado da formação para o trabalho atrelado a um projeto de
              vida, que deve atravessar toda a escolarização dos jovens. Esse
              projeto de vida compreende a busca e a efetivação de um propósito
              vital capaz de gerar transformações pessoais e coletivas. Nesse
              contexto, admite-se a Alfabetização Financeira como um elemento de
              integração entre as competências 6 a 10, mais relacionadas às
              atitudes; e as competências de 1 a 5, mais relacionadas aos
              conhecimentos e habilidades.
            </p>
            <p>
              A Alfabetização Financeira articula a um só tempo, saberes de
              âmbito técnico, social e cultural; habilidades de organização
              pessoal e uso das tecnologias; atitudes de compreensão de si e dos
              outros para uma maior sustentabilidade individual, familiar e
              coletiva. A educação financeira aparece pela primeira vez na BNCC
              atrelada às diretrizes curriculares, quando evocada como tema
              transversal a ser trabalhado no Ensino Fundamental de 9 (nove)
              anos (BRASIL, 2010a, 2010b). Também é citada na fundamentação da
              disciplina Matemática na unidade temática “Números no Ensino
              Fundamental” mediante uma série de possibilidades intra e
              interdisciplinares:
            </p>
            <p className="indetention">
              Outro aspecto a ser considerado nessa unidade temática é o estudo
              de conceitos básicos de economia e finanças, visando à educação
              financeira dos alunos. Assim, podem ser discutidos assuntos como
              taxas de juros, inflação, aplicações financeiras (rentabilidade e
              liquidez de um investimento) e impostos. Essa unidade temática
              favorece um estudo interdisciplinar envolvendo as dimensões
              culturais, sociais, políticas e psicológicas, além da econômica,
              sobre as questões do consumo, trabalho e dinheiro. É possível, por
              exemplo, desenvolver um projeto com a História, visando ao estudo
              do dinheiro e sua função na sociedade, da relação entre dinheiro e
              tempo, dos impostos em sociedades diversas, do consumo em
              diferentes momentos históricos, incluindo estratégias atuais de
              marketing. Essas questões, além de promover o desenvolvimento de
              competências pessoais e sociais dos alunos, podem se constituir em
              excelentes contextos para as aplicações dos conceitos da
              Matemática Financeira e também proporcionar contextos para ampliar
              e aprofundar esses conceitos (BRASIL, 2018, p. 269).
            </p>
            <p>
              Verificamos que os conteúdos de educação financeira são atrelados
              à Matemática, mas não se restringem a ela extrapolando às ciências
              humanas em termos de abordagem cultural, política e social, e às
              competências socioemocionais no que se refere aos aspectos
              comportamentais de consumo e finanças pessoais. No quadro a
              seguir, apresentamos as menções diretas à educação financeira nas
              habilidades previstas para o Ensino Fundamental - Anos Finais:
            </p>

            <div className="tabela">
              <img src={tabela3} alt="" />
            </div>

            <p>
              Já no Ensino Médio, temos a educação financeira e o
              empreendedorismo expressamente definidos na área de Ciências
              Humanas e Sociais Aplicadas: “[...] há hoje mais espaço para o
              empreendedorismo individual, em todas as classes sociais, e cresce
              a importância da educação financeira e da compreensão do sistema
              monetário contemporâneo nacional e mundial [...]” (BRASIL, 2018,
              568). Por outro lado, aparece também como habilidade nas áreas de
              Matemática e suas Tecnologias e Ciências Humanas e Sociais
              Aplicadas:
            </p>

            <div className="tabela">
              <img src={tabela4} alt="" />
            </div>

            <p>
              Assim sendo, enxergamos a Alfabetização Financeira como um
              processo amplo com potencial de incorporação às disciplinas
              curriculares do Ensino Fundamental (EF) como tema transversal
              (sazonal) e no Novo Ensino Médio (EM) como disciplina eletiva
              (semestral) ou como curso de qualificação profissional (mínimo de
              160 horas). A depender do Projeto Pedagógico da escola também é
              possível construir um programa de Alfabetização Financeira a
              partir de projetos interdisciplinares e/ou extracurriculares na
              perspectiva da Educação Integral.
            </p>
            <p>
              Os Temas Contemporâneos Transversais (BRASIL, 2019) para o Ensino
              Fundamental (1º a 9º ano) contemplam a Alfabetização Financeira
              nas macroáreas Economia (trabalho, educação financeira e educação
              fiscal), Meio Ambiente (educação para o consumo) e Ciência e
              Tecnologia. Nesse caso, a AF pode ser ofertada aos estudantes do
              EF de forma intracurricular, se articulada à várias habilidades da
              BNCC de uma mesma disciplina como ciências e matemática,
              interdisciplinar tendo uma habilidade da BNCC específica de uma
              disciplina como história articulada com habilidades de Geografia e
              Língua Portuguesa, e transdisciplinar relacionando habilidades da
              BNCC de várias disciplinas ao mesmo tempo.
            </p>
            <p>
              No Novo Ensino Médio, a Alfabetização Financeira tem várias
              possibilidades de ser efetivada no contexto dos eixos
              estruturantes de “Empreendedorismo e Processos Criativos”, pois
              pode ser aplicada como disciplina eletiva dentro dos itinerários
              formativos linguagens e suas tecnologias; matemática e suas
              tecnologias; ciências humanas e suas tecnologias e formação
              técnica e profissional. Sua oferta no currículo escolar pode se
              dar como disciplina eletiva semestral com aulas semanais de 45
              minutos ou em um total de 15 horas. Uma outra possibilidade é a
              oferta de cursos de qualificação profissional no contexto da
              formação continuada e profissional (FIC) com módulos de
              aproximadamente 3 meses com no mínimo 160 horas a carga horária.
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="/pilares-educacionais/metodologia-mooney">
              4.3 - Metodologia Mooney
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default BnccEnsinoMedio;
