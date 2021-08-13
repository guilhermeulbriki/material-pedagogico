import React from "react";

import presentationIcon from "../../assets/icons/apresentacao.svg";
import ItemMenu from "../item-menu";

import { Container } from "./styles";

interface MenuProps {
  isHidden: boolean;
}

const Menu: React.FC<MenuProps> = ({ isHidden }) => {
  return (
    <Container isHidden={true}>
      <h2>Sumário</h2>

      <ul>
        <ItemMenu icon={presentationIcon} title="Apresentação" />
      </ul>
    </Container>
  );
};

export default Menu;
