import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface ItemMenuProps {
  icon: string;
  title: string;
  iconColor: string;
  url?: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  icon,
  title,
  iconColor,
  children,
  url = "",
}) => {
  return (
    <Container iconColor={iconColor}>
      <div className="description">
        <article className="icon-bg-presentation">
          <img src={icon} alt="itemIcon" />
        </article>

        <Link to={url}>{title}</Link>
      </div>

      <nav>{children}</nav>
    </Container>
  );
};

export default ItemMenu;
