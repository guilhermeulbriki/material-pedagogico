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
  }

  body {
    color: var(--grayscale-900);
    background: var(--content-white);
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    line-height: 150%;
    color: var(--primary-gradient);
    font-size: 4rem;
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
    max-width: 135.9rem;
    padding: 0 1.6rem;
    margin: 0 auto;
  }
`;
