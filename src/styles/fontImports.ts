import { css } from '@emotion/react'

export const poppinsImports = css`
  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-100-Thin.ttf') format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-200-ExtraLight.ttf') format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-400-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-400-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-500-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-600-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-700-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-800-ExtraBold.ttf') format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins/Poppins-900-Black.ttf') format('truetype');
    font-weight: 900;
  }
`

const loraImports = css`
  @font-face {
    font-family: Lora;
    src: url('/fonts/Lora/Lora-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
  }
`

export const IBMPlex = css`
  @font-face {
    font-family: IBM Plex Mono;
    src: url('/fonts/IBMPlex/IBMPlexMono-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: IBM Plex Mono;
    src: url('/fonts/IBMPlex/IBMPlexMono-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: IBM Plex Mono;
    src: url('/fonts/IBMPlex/IBMPlexMono-Semibold.ttf') format('truetype');
    font-weight: 600;
  }
`

export const fontImports = css`
  ${poppinsImports}
  ${IBMPlex}
  ${loraImports}
`
