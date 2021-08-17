import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import childIcon from "../../assets/icons/usuario.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { Container, Content, ContentText } from "../styles";

const JovemContemporaneo: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/jovem-contemporaneo">
              <strong>3.0 - O Jovem Contemporâneo</strong>
            </Link>
          </li>
        </ul>
      </Header>

      <div className="container">
        <Content defaultColor="#F13A83">
          <div className="title">
            <article>
              <img src={childIcon} alt="Pilares Educacionais" />
            </article>

            <div className="section">
              <h3>3.0 - O Jovem Contemporâneo</h3>
            </div>
          </div>

          <ContentText>
            <p>
              Atualmente, os jovens possuem múltiplas referências culturais, e
              desafios particulares em seu desenvolvimento e jornada de vida.
              Cada aluno tem os seus conflitos cotidianos, os seus hábitos e as
              suas crenças, além de comportamento e humor variável conforme
              situações externas, contextos e capacidade de lidar com as
              próprias emoções. Por isso, os planos de aula da Mooney trazem
              referências e exemplos do cotidiano, pautado no diálogo e na
              compreensão dos diferentes pontos de vista.
            </p>

            <h5>3.1 DESENVOLVIMENTO BIOPSICOSSOCIAL</h5>
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
              Essa construção se dá, principalmente, a partir da linguagem que
              dá nome ao mundo e a atitude de nomeação das coisas ao redor
              ocorre mediante a participação do outro, que se mostra desde
              sempre um mediador das nossas observações e dos nossos sentimentos
              e emoções. Nesse caso, a afetividade é o elemento que mobiliza as
              ações e a sociabilidade é o que dá sentido e significado ao mundo
              ao redor. Assim, a atividade e o relacionamento interpessoal são
              condições fundamentais para o aprendizado e para o desenvolvimento
              das crianças e adolescentes.
            </p>
            <p>
              Segundo Vygotsky, o desenvolvimento se dá nas relações entre as
              pessoas, sobretudo nas relações entre os próprios estudantes. À
              medida que o jovem se depara com um problema cuja solução não
              consegue encontrar está em seu nível de desenvolvimento real,
              enquanto a solução está no nível de desenvolvimento potencial. A
              distância entre esses dois níveis é o que Vygotsky chama de zona
              de desenvolvimento proximal (ZDP). Na ZDP consta o potencial
              pedagógico para aprendizagem que pode ser realizada se o aluno
              realizar tarefas junto a outro aluno cuja solução para o problema
              já consta no nível real. A este aluno damos o nome de “par mais
              capaz” e são estes tipos de interações e configurações que devem
              ser mobilizadas pelos professores mediadores, a fim de fomentar a
              aprendizagem colaborativa (CAMARGOS JÚNIOR, 2020).
            </p>
          </ContentText>

          <div className="redirect">
            <Link to="jovem-contemporaneo/desenvolvimento-conforme-idade">
              3.2 - O Desenvolvimento Conforme a Idade
            </Link>

            <img src={arrowRight} alt="arrow" />
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default JovemContemporaneo;
