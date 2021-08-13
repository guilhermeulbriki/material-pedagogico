import React from "react";

import { Container } from "./styles";

interface ItemMenuProps {
  icon: string;
  title: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({ icon, title, children }) => {
  return (
    <Container>
      <div className="description">
        <article className="icon-bg-presentation">
          <img src={icon} alt="itemIcon" />
        </article>

        <span>{title}</span>
      </div>

      <nav>{children}</nav>
    </Container>
  );
};

export default ItemMenu;
