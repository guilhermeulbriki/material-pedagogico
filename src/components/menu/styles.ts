import styled, { css } from "styled-components";

interface ContainerProps {
  isHidden: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 99;
  right: 0;
  bottom: 0;
  height: calc(100vh - 64px);
  padding: 4rem 0rem 0 4rem;
  width: 100%;
  max-width: 50rem;
  background-color: var(--content-gray);
  transition: transform 0.5s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.isHidden
      ? css`
          transform: translateX(0px);
          display: none;
        `
      : css`
          transform: translateX(500px);
          display: block;
        `}

  h2 {
    width: 100%;
    margin-bottom: 4rem;
  }

  > ul {
    width: 100%;
    height: 100%;
    padding-right: 4rem;
    padding-bottom: 4rem;
    max-height: 100%;
    overflow-y: auto;
  }
`;
