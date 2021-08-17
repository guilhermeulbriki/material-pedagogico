import styled, { keyframes } from "styled-components";

interface ContentProps {
  defaultColor: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 8rem;
`;

const redirectImgAnimation = keyframes`
  0% {
    transform: translateX(0px);
  } 25% {
    transform: translateX(4px);
  } 50% {
    transform: translateX(0px);
  } 75% {
    transform: translateX(4px);
  } 100% {
    transform: translateX(0px);
  }
`;

export const Content = styled.main<ContentProps>`
  padding-top: 6.4rem;

  .title {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    article {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background-color: ${(props) => props.defaultColor};

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .section {
      display: flex;
      align-items: center;

      h4 {
        font-size: 2.4rem;
        font-weight: normal;
        line-height: 150%;
        color: var(--grayscale-900);
        margin: 0 1.6rem;
      }

      h3 {
        margin-left: 1.6rem;
        font-size: 2.4rem;
        line-height: 150%;
        font-weight: 600;
        font-feature-settings: "pnum" on, "lnum" on;
      }
    }

    @media (max-width: 800px) {
      margin-top: 3.2rem;

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

      .section {
        h3 {
          font-size: 18px;
        }
      }
    }
  }

  .redirect {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    &:hover {
      a {
        color: ${(props) => props.defaultColor};
      }

      img {
        animation: ${redirectImgAnimation} 1s;
      }
    }

    a {
      font-size: 1.8rem;
      line-height: 150%;
      margin-right: 1.6rem;
      color: var(--grayscale-900);
      transition: color 0.3s;
    }
  }
`;

export const ContentText = styled.section`
  margin-top: 3.2rem;
  width: 100%;
  max-width: 100%;
  height: 100%;

  h5 {
    font-size: 1.8rem;
    line-height: 150%;
    text-indent: 2rem;
    font-weight: 600;
    color: var(--grayscale-900);
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--grayscale-700);
    text-indent: 2rem;
    text-align: justify;
    margin-bottom: 1.6rem;

    &.indetention {
      margin-left: 20%;
    }

    strong {
      font-weight: 600;
    }

    .itallic {
      font-style: italic;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.6rem;
    width: 100%;

    &.indentention {
      margin-left: 2.4rem;
    }

    li {
      margin-left: 2.4rem;
      font-size: 1.6rem;
      line-height: 150%;
      color: var(--grayscale-700);
      text-align: justify;
      position: relative;
      z-index: 1;

      & + li {
        margin-top: 0.8rem;
      }

      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--grayscale-700);
        transform: translateX(-16px) translateY(9.5px);
      }
    }
  }

  .image {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1.6rem;

    > img {
      max-width: 600px;
    }

    > p {
      margin-top: 2.4rem;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    margin-top: 2.4rem;
  }
`;
