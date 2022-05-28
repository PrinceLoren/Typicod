import { css, Theme } from '@emotion/react'
import { fontImports } from './fontImports'

export const globalStyles = (theme: Theme) => css`
  ${fontImports}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: ${theme.fonts.default};
    color: ${theme.colors.black};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  a:visited {
    color: ${theme.colors.green}; /* TODO: replace this */
  }

  button {
    border: none;
    background-color: inherit;
  }

  ul {
    list-style: none;
  }
`
