import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../menu";
import logo from "../../assets/logo.svg";

import { Container, Left, Right } from "./styles";
import { useCallback } from "react";

const Header: React.FC = () => {
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  const controlMenu = useCallback(() => {
    setMenuIsHidden(!menuIsHidden);
  }, [menuIsHidden]);

  return (
    <Container>
      <div className="container">
        <Left>
          <Link to="/">
            <img src={logo} alt="logo mooney" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
            </ul>
          </nav>
        </Left>

        <Right onClick={controlMenu} changeMenu={menuIsHidden}>
          <div className="menu">
            <hr className="one" />
            <hr className="two" />
            <hr className="three" />
          </div>

          <span>Sumário</span>
        </Right>
      </div>

      <Menu isHidden={menuIsHidden} />
    </Container>
  );
};

export default Header;
