import { createTheme, ThemeOptions } from '@mui/material'
import { blue, lightBlue } from '@mui/material/colors'
import { AppFontUrlAssets } from '@app/assets/app.font-url.assets'
const appFontUrlAssets = new AppFontUrlAssets()
const elliotProFont = appFontUrlAssets.elliotProFont
const elliotProBoldFont = appFontUrlAssets.elliotProBoldFont

interface CustomThemeOptions extends ThemeOptions {
  components?: {
    MuiCssBaseline?: {
      styleOverrides?: {
        '@font-face'?: Array<{
          fontFamily: string;
          fontStyle: string;
          fontDisplay: string;
          fontWeight: number;
          src: string;
          unicodeRange: string;
        }>;
      };
    };
  };
}

export const AppMainTheme = createTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.87)',
    //   secondary: '#00e676'
    // }
  },
  typography: {
    // fontFamily: 'Source Sans Pro'
    fontFamily: 'Elliot Pro, Elliot Pro Bold '
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Elliot Pro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('elliotPro'), local('elliotPro-Regular'), url(${elliotProFont}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Elliot Pro Bold';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('elliotProBold'), local('elliotPro-Bold'), url(${elliotProBoldFont}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  }
} as CustomThemeOptions)

export const AppColors = {
  bgColor: '#f2f2f2'
}

export const AppGradientColors = {
  terminal: 'linear-gradient(to left, #000000, #0f9b0f)',
  midnightCity: 'linear-gradient(to left, #232526, #414345)',
  coolBlues: 'linear-gradient(to right, #2193b0, #6dd5ed)',
  coolBlues2: 'linear-gradient(to left, #2193b0, #6dd5ed)'
}
