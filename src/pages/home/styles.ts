import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 8rem;
`;

export const ContentContainer = styled.main`
  padding-top: 6.4rem;

  .container {
    h1 {
      margin-top: 5.6rem;
      margin-bottom: 4.8rem;
    }

    @media (max-width: 600px) {
      h1 {
        margin-top: 4rem;
        margin-bottom: 3.2rem;
        font-size: 2.8rem;
      }
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
      & + li {
        margin-top: 4rem;

        @media (max-width: 600px) {
          margin-top: 3.2rem;
        }
      }
    }
  }

  > img {
    margin-right: 11.3rem;

    @media (max-width: 1038px) {
      display: none;
    }
  }
`;
