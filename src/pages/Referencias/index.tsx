import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import presentationIcon from "../../assets/icons/apresentacao.svg";

import { Container, Content, ContentText } from "../styles";

const Referencias: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/referencias">
              <strong>6.0 Referências</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#ff9100">
          <div className="title">
            <article>
              <img src={presentationIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h3>6.0 Referências</h3>
            </div>
          </div>

          <ContentText>
            <p>
              <Link to="https://www.battelleforkids.org/networks/p21/frameworks-resources">
                BATTELLE FOR KIDS. Frameworks & resources. Washington, EUA:
                Battelle for Kids, 2021. Disponível em:
                https://www.battelleforkids.org/networks/p21/frameworks-resources.
                Acesso em: 25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="https://valorinveste.globo.com/educacao-financeira/noticia/2020/05/07/brasil-e-o-4o-pior-pais-do-mundo-em-competencia-financeira-de-jovens-mostra-pisa.ghtml">
                BERTÃO, Naiara. Brasil é o 4º pior país em competência
                financeira de jovens, mostra PISA. Valor Investe, São Paulo, 7
                mai. 2020. Disponível em:
                https://valorinveste.globo.com/educacao-financeira/noticia/2020/05/07/brasil-e-o-4o-pior-pais-do-mundo-em-competencia-financeira-de-jovens-mostra-pisa.ghtml.
                Acesso em: 25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=6324-pceb011-10&category_slug=agosto-2010-pdf&Itemid=30192">
                BRASIL. Conselho Nacional de Educação/Câmara de Educação Básica.
                Parecer nº 11, de 7 de outubro de 2010. Diretrizes Curriculares
                Nacionais para o Ensino Fundamental de 9 (nove) anos. Diário
                Oficial da União, Brasília, 9 de dezembro de 2010a, seção 1, p.
                28. Disponível em:
                http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=6324-
                pceb011-10&category_slug=agosto-2010-pdf&Itemid=30192. Acesso
                em: 25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="http://portal.mec.gov.br/dmdocuments/rceb007_10.pdf">
                BRASIL. Ministério da Educação. Conselho Nacional de Educação;
                Câmara de Educação Básica. Resolução nº 7, de 14 de dezembro de
                2010. Fixa Diretrizes Curriculares Nacionais para o Ensino
                Fundamental de 9 (nove) anos. Diário Oficial da União, Brasília,
                15 de dezembro de 2010b, Seção 1, p. 34. Disponível em:
                http://portal.mec.gov.br/dmdocuments/rceb007_10.pdf. Acesso em:
                25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="">
                BRASIL. INEP. Informe dos resultados do PISA 2015 – Resultados
                do Brasil na Avaliação de Letramento Financeiro. Brasília:
                Instituto Nacional de Estudos e Pesquisas Educacionais Anísio
                Teixeira, 2017.
              </Link>
            </p>
            <p>
              <Link to="http://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf">
                _______. Base Nacional Comum Curricular (BNCC). Brasília:
                Ministério da Educação, 2018. Disponível em:
                http://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf.
                Acesso em: 14 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="">
                _______. Temas Contemporâneos Transversais na BNCC. Brasília:
                Secretaria de Educação Básica, 2019.
              </Link>
            </p>
            <p>
              <Link to="">
                _______. INEP. PISA 2021: matriz de referência de análise e de
                avaliação de letramento financeiro. Brasília: Instituto Nacional
                de Estudos e Pesquisas Educacionais Anísio Teixeira, 2020.
              </Link>
            </p>
            <p>
              <Link to="">
                CAMARGOS JÚNIOR, Artur Pires de. O papel do professor na
                superação da zona de desenvolvimento proximal. In: CAMARGOS
                JÚNIOR, Artur Pires de; SILVA, Edson Vieira da (org.). Educação
                em múltiplos olhares: temas do cotidiano. Curitiba: Appris,
                2020.
              </Link>
            </p>
            <p>
              <Link to="https://curriculumredesign.org/about/">
                CENTER FOR CURRICULUM REDESIGN (CCR). About. Boston, EUA: CCR,
                2021. Disponível em: https://curriculumredesign.org/about/.
                Acesso em: 25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="https://doi.org/10.1590/2175-623674528">
                COELHO, Patricia Margarida Farias; COSTA, Marcos Rogério
                Martins; MATTAR NETO, João Augusto. Saber Digital e suas
                Urgências: reflexões sobre imigrantes e nativos digitais. Educ.
                Real. Porto Alegre , v. 43, n. 3, p. 1077-1094, set. 2018.
                Disponível em: https://doi.org/10.1590/2175-623674528. Acesso
                em: 25 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="">
                COLLABORATIVE FOR ACADEMIC, SOCIAL AND EMOTIONAL LEARNING –
                CASEL. SEL: What are the core competence areas and where are
                they promoted? Chicago: CASEL, 2021.
              </Link>
            </p>
            <p>
              <Link to="">
                FADEL, Charles; BIALIK, Maya; TRILLING, Bernie. Educação em
                quatro dimensões: as competências que os estudantes devem ter
                para atingir o sucesso. Revisão técnica: Lilian Bacich. Boston,
                EUA: Center for Curriculum Redesign, 2015.
              </Link>
            </p>
            <p>
              <Link to="">
                IEDE. O que os dados do Pisa mostram sobre Educação Financeira
                no Brasil? Uma análise a partir dos microdados da avaliação de
                competência financeira do Pisa 2015. São Paulo:
                Interdisciplinaridade e evidências no debate educacional, 2018.
              </Link>
            </p>
            <p>
              <Link to="https://biblioteca.ibge.gov.br/visualizacao/livros/liv101543.pdf">
                INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). Acesso à
                Internet e à Televisão e Posse de Telefone Móvel Celular para
                Uso Pessoal 2016 - PNAD Contínua. IBGE, Diretoria de Pesquisas,
                Coordenação de Trabalho e Rendimento. Rio de Janeiro: IBGE,
                2018. Disponível em:
                https://biblioteca.ibge.gov.br/visualizacao/livros/liv101543.pdf.
                Acesso em: 27 abr. 2021.
              </Link>
            </p>
            <p>
              <Link to="">
                KIYOSAKI, Robert T. Pai rico, pai pobre: o que os ricos ensinam
                aos seus filhos sobre dinheiro. Tradução de: Maria José Cyhlar
                Monteiro. 2 ed. Rio de Janeiro: Alta Books, 2017.
              </Link>
            </p>
            <p>
              <Link to="">
                MATTAR, João Augusto. Games em educação: como os nativos
                digitais aprendem. São Paulo: Pearson Prentice Hall, 2010.
              </Link>
            </p>
            <p>
              <Link to="http://dx.doi.org/10.1787/9789264270282-en">
                ORGANIZATION FOR ECONOMIC COOPERATION AND DEVELOPMENT (OECD).
                PISA 2015 results: students’ financial literacy. Paris, FR: OECD
                Publishing, 2017. v. 4. Disponível em:
                http://dx.doi.org/10.1787/9789264270282-en. Acesso em: 25 abr.
                2021.
              </Link>
            </p>
          </ContentText>
        </Content>
      </div>
    </Container>
  );
};

export default Referencias;
