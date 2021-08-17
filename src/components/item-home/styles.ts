import styled from "styled-components";

interface ContainerProps {
  iconColor: string;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    article img {
      transform: rotate(15deg);
    }

    a {
      color: ${(props) => props.iconColor};
    }
  }

  article {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: ${(props) => props.iconColor};

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      transition: transform 0.3s;
    }
  }

  a {
    margin-left: 1.6rem;
    font-size: 2.4rem;
    line-height: 150%;
    font-weight: 400;
    transition: color 0.3s;
    color: var(--grayscale-900);
  }

  @media (max-width: 600px) {
    article {
      width: 32px;
      height: 32px;
      border-radius: 8px;

      > img {
        object-fit: contain;
        width: 14px;
        height: 14px;
      }
    }

    a {
      font-size: 1.8rem;
    }
  }
`;
