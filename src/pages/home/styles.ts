import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 8rem;
`;

export const ContentContainer = styled.main`
  .container {
    h1 {
      margin-top: 5.6rem;
      margin-bottom: 4.8rem;
    }
  }
`;

export const Content = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      display: flex;
      cursor: pointer;
      align-items: center;

      article {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background-color: var(--primary-light);

        display: flex;
        justify-content: center;
        align-items: center;

        &.icon-bg-mooney {
          background: var(--primary-gradient);
        }

        &.icon-bg-finance {
          background-color: var(--auxiliar-pink);
        }

        &.icon-bg-child {
          background-color: var(--auxiliar-magenta);
        }

        &.icon-bg-square {
          background-color: var(--auxiliar-red);
        }

        &.icon-bg-microphone {
          background-color: var(--auxiliar-yellow);
        }

        &.icon-bg-book {
          background-color: var(--auxiliar-orange);
        }
      }

      span {
        margin-left: 1.6rem;
        font-size: 2.4rem;
        line-height: 150%;
        font-weight: 400;
        color: var(--grayscale-700);
      }

      & + li {
        margin-top: 4rem;
      }

      &:hover {
        article img {
          color: var(--primary);
        }
      }
    }
  }
`;
