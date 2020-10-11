import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --color-primary: #FF9000;
    --color-primary-darken: ${shade(0.2, '#FF9000')};
    --color-white: #F4EDE8;
    --color-white-darken: ${shade(0.2, '#F4EDE8')};
    --color-text-white: #FFF;
    --color-light-gray: #999591;
    --color-hard-gray: #666360;
    --color-shape: #3E3B47;
    --color-black-medium: #28262E;
    --color-background: #312E38;
    --color-inputs: #232129;
    --color-error: #c53030;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-white);
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
