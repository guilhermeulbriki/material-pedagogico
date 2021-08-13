import React from "react";

import Header from "../../components/header";
import illustra from "../../assets/illustra-home.jpg";
import presentationIcon from "../../assets/icons/apresentacao.svg";
import mooneyIcon from "../../assets/icons/mooney.svg";
import financeIcon from "../../assets/icons/dinheiro.svg";
import childIcon from "../../assets/icons/usuario.svg";
import squareIcon from "../../assets/icons/quadrado.svg";
import microphoneIcon from "../../assets/icons/microfone.svg";
import bookIcon from "../../assets/icons/livro.svg";

import { Container, ContentContainer, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContentContainer>
        <div className="container">
          <h1>Material Pedagógico</h1>

          <Content>
            <ul>
              <li>
                <article className="icon-bg-presentation">
                  <img src={presentationIcon} alt="presentation" />
                </article>

                <span>Apresentação</span>
              </li>

              <li>
                <article className="icon-bg-mooney">
                  <img src={mooneyIcon} alt="mooney" />
                </article>

                <span>O Mundo Mooney</span>
              </li>

              <li>
                <article className="icon-bg-finance">
                  <img src={financeIcon} alt="finance education" />
                </article>

                <span>Alfabetização Financeira</span>
              </li>

              <li>
                <article className="icon-bg-child">
                  <img src={childIcon} alt="child" />
                </article>

                <span>O Jovem Contemporâneo</span>
              </li>

              <li>
                <article className="icon-bg-square">
                  <img src={squareIcon} alt="square" />
                </article>

                <span>Pilares Educacionais</span>
              </li>

              <li>
                <article className="icon-bg-microphone">
                  <img src={microphoneIcon} alt="microphone" />
                </article>

                <span>Palavras Finais</span>
              </li>

              <li>
                <article className="icon-bg-book">
                  <img src={bookIcon} alt="book" />
                </article>

                <span>Referências</span>
              </li>
            </ul>

            <img src={illustra} alt="illustration" />
          </Content>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Home;
