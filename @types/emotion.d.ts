import '@emotion/react'
import CSS from 'csstype'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: CSS.Property.Color
      black: CSS.Property.Color
      primary: CSS.Property.Color
      primaryLighter: CSS.Property.Color
      red: CSS.Property.Color
      redLighter: CSS.Property.Color
      green: CSS.Property.Color
      darkBlue: CSS.Property.Color
      neutral100: CSS.Property.Color
      neutral200: CSS.Property.Color
    }
    fonts: {
      default: string
    }
  }
}
