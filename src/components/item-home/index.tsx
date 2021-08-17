import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface ItemMenuProps {
  icon: string;
  title: string;
  url?: string;
  iconColor: string;
}

const ItemHome: React.FC<ItemMenuProps> = ({
  icon,
  title,
  iconColor,
  url = "",
}) => {
  return (
    <Container iconColor={iconColor}>
      <article>
        <img src={icon} alt="icon" />
      </article>

      <Link to={url}>{title}</Link>
    </Container>
  );
};

export default ItemHome;
