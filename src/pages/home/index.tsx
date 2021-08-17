import React from "react";
import { Link } from "react-router-dom";

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
import ItemHome from "../../components/item-home";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
        </ul>
      </Header>

      <ContentContainer>
        <div className="container">
          <h1>Material Pedagógico</h1>

          <Content>
            <ul>
              <ItemHome
                icon={presentationIcon}
                title="Apresentação"
                iconColor="#485AF0"
                url="apresentacao"
              />

              <ItemHome
                icon={mooneyIcon}
                title="O Mundo Mooney"
                iconColor="#5E2EC3"
                url="mundo-mooney"
              />

              <ItemHome
                icon={financeIcon}
                title="Alfabetização Financeira"
                iconColor="#D2269A"
              />

              <ItemHome
                icon={childIcon}
                title="O Jovem Contemporâneo"
                iconColor="#F13A83"
              />

              <ItemHome
                icon={squareIcon}
                title="Pilares Educacionais"
                url="pilares-educacionais"
                iconColor="#F13A45"
              />

              <ItemHome
                icon={microphoneIcon}
                title="Palavras Finais"
                iconColor="#fdd547"
              />

              <ItemHome
                icon={bookIcon}
                title="Referências"
                iconColor="#ff9100"
              />
            </ul>

            <img src={illustra} alt="illustration" />
          </Content>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Home;
