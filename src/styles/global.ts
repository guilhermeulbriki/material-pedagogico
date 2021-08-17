import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: #4151D7;
    --primary-light: #485AF0;
    --primary-gradient: linear-gradient(196.55deg, #5E2EC4 -111.7%, #3263E1 344.28%);

    --grayscale-900: #232931;
    --grayscale-700: #525963;
    --grayscale-100: #E1E5EC;
    --grayscale-white: #F0F3F7;

    --content-gray: #f8f9fb;
    --content-white: #fff;

    --auxiliar-red: #F13A45;
    --auxiliar-yellow: #fdd547;
    --auxiliar-orange: #ff9100;
    --auxiliar-pink: #D2269A;
    --auxiliar-magenta: #F13A83;
    --auxiliar-purple: #5E2EC3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
  }

  html {
    font-size: 62.5%;

    @media(max-width: 1280px) {
      font-size: 55%;
    } 
  }

  body {
    color: var(--grayscale-900);
    background: var(--content-white);
  }

  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    line-height: 150%;
    font-size: 4rem;
  }

  h1, h2 {
    background: var(--primary-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--grayscale-900);
  }

  .container {
    width: 100%;
    max-width: 137.5rem;
    padding: 0 3.2rem;
    margin: 0 auto;

    @media(max-width: 1280px) {
      padding: 0 2rem;
    } 
  }
`;
