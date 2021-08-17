import React from "react";
import { Link } from "react-router-dom";

import presentationIcon from "../../assets/icons/apresentacao.svg";
import mooneyIcon from "../../assets/icons/mooney.svg";
import financeIcon from "../../assets/icons/dinheiro.svg";
import childIcon from "../../assets/icons/usuario.svg";
import squareIcon from "../../assets/icons/quadrado.svg";
import microphoneIcon from "../../assets/icons/microfone.svg";
import bookIcon from "../../assets/icons/livro.svg";
import ItemMenu from "../item-menu";

import { Container } from "./styles";

interface MenuProps {
  isHidden: boolean;
}

const Menu: React.FC<MenuProps> = ({ isHidden }) => {
  return (
    <Container isHidden={isHidden}>
      <h2>Sumário</h2>

      <ul>
        <ItemMenu
          iconColor={"#485AF0"}
          icon={presentationIcon}
          title="Apresentação"
          url="/apresentacao"
        />

        <ItemMenu
          iconColor={"#5E2EC3"}
          icon={mooneyIcon}
          url="/mundo-mooney"
          title="O Mundo Mooney"
        />

        <ItemMenu
          iconColor={"#D2269A"}
          icon={financeIcon}
          title="Alfabetização Financeira"
          url="/alfabetizacao-financeira"
        >
          <ul>
            <li>
              <div className="point"></div>
              <Link to="/alfabetizacao-financeira/educacao-financeira">
                Educação Financeira
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/alfabetizacao-financeira/competencias-socioemocionais">
                Competências Socioemocionais
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/alfabetizacao-financeira/educacao-tecnologias-gamificacao">
                Educação, tecnologias e gamificação
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/alfabetizacao-financeira/plataforma-mooney">
                Plataforma Mooney (App e Web)
              </Link>
            </li>
          </ul>
        </ItemMenu>

        <ItemMenu
          iconColor={"#F13A83"}
          icon={childIcon}
          title="O jovem Contemporâneo"
          url="/jovem-contemporaneo"
        >
          <ul>
            <li>
              <div className="point"></div>
              <Link to="/jovem-contemporaneo/desenvolvimento-conforme-idade">
                O Desenvolvimento Conforme a Idade
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/jovem-contemporaneo/aluno-protagonista">
                O Aluno Protagonista
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/jovem-contemporaneo/escola-familia-sociedade">
                Escola, Família e Sociedade
              </Link>
            </li>
          </ul>
        </ItemMenu>

        <ItemMenu
          iconColor={"#F13A45"}
          icon={squareIcon}
          url="pilares-educacionais"
          title="Pilares Educacionais"
        >
          <ul>
            <li>
              <div className="point"></div>
              <Link to="/pilares-educacionais/competenciais-para-o-seculo-xxi">
                Competências para o séclulo XXI
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/pilares-educacionais/bncc-novo-ensino-medio">
                A BNCC e o novo ensino médio
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/pilares-educacionais/metodologia-mooney">
                Metodologia Mooney
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/pilares-educacionais/estrutura-pedagogica-mooney">
                Estrutura Pedagógica Mooney
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="/pilares-educacionais/professor-mediador">
                O professor mediador
              </Link>
            </li>

            <li>
              <div className="point"></div>
              <Link to="">
                Diretrizes pedagógicas para o ambiente de aprendizagem
              </Link>
            </li>
          </ul>
        </ItemMenu>

        <ItemMenu
          iconColor={"#fdd547"}
          icon={microphoneIcon}
          title="Palavras Finais"
        />

        <ItemMenu iconColor={"#ff9100"} icon={bookIcon} title="Referências" />
      </ul>
    </Container>
  );
};

export default Menu;
