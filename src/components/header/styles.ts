import styled, { css } from "styled-components";

interface RightProps {
  changeMenu: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 6.4rem;
  background: var(--primary-gradient);
  position: fixed;
  z-index: 1000;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
  }
`;

export const Left = styled.section`
  display: flex;
  align-items: center;

  > nav {
    margin-left: 4.8rem;

    ul {
      display: flex;
      align-items: center;

      li {
        position: relative;

        & + li {
          margin-left: 1.6rem;

          a {
            &::before {
              height: 1px;
              width: 16px;
              content: "";
              position: absolute;
              transform: rotate(-72deg) translateY(-11px) translateX(-16px);
              background-color: var(--grayscale-white);
            }
          }
        }

        a {
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 150%;
          color: var(--grayscale-white);
        }

        strong {
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 600px) {
    > a img {
      height: 18px;
    }

    > nav {
      display: none;
    }
  }
`;

export const Right = styled.section<RightProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    .menu {
      hr.one {
        width: 12px;
      }
    }
  }

  .menu {
    hr {
      width: 24px;
      height: 2px;
      background-color: var(--grayscale-white);
      transition: all 0.5s;

      &.three {
        width: 16px;
        float: right;
      }

      & + hr {
        margin-top: 6px;
      }

      ${(props) =>
        props.changeMenu === true &&
        css`
          &.one {
            width: 12px;
            transform: translateX(6px) translateY(4px) rotate(45deg);
          }

          &.two {
            width: 24px;
            transform: translateX(4.5px) translateY(1px) rotate(-45deg);
          }

          &.three {
            width: 12px;
            transform: translateX(3.5px) translateY(-2px) rotate(45deg);
          }
        `}
    }
  }

  span {
    margin-left: 1.6rem;
    font-size: 1.8rem;
    line-height: 150%;
    color: var(--grayscale-white);
  }

  @media (max-width: 600px) {
    > span {
      display: none;
    }
  }
`;
