import styled from "styled-components";

interface ContainerProps {
  iconColor: string;
}

export const Container = styled.li<ContainerProps>`
  width: 100%;
  max-width: 42rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;

  & + li {
    margin-top: 3.2rem;
  }

  .description {
    display: flex;
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
      height: 48px;
      width: 48px;
      border-radius: 12px;
      margin-right: 16px;
      background-color: ${(props) => props.iconColor};

      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        transition: transform 0.3s;
      }
    }

    a {
      font-size: 2.4rem;
      line-height: 150%;
      color: var(--grayscale-900);
      font-weight: 400;
      transition: color 0.3s;
    }
  }

  nav ul {
    margin-top: 3.2rem;
    padding-left: 4rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      display: flex;
      align-items: center;
      width: 100%;

      & + li {
        margin-top: 2.4rem;
      }

      &:hover > a {
        color: ${(props) => props.iconColor};
      }

      .point {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: ${(props) => props.iconColor};
        margin-right: 1.6rem;
      }

      > a {
        width: 100%;
        font-size: 1.6rem;
        line-height: 150%;
        transition: color 0.3s;
        color: var(--grayscale-700);
      }
    }
  }
`;
