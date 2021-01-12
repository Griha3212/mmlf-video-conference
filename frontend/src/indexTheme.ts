/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});
const { breakpoints } = defaultTheme;

export const arimo = {
  fontFamily: 'Arimo',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 14,
  alignItems: 'center',
  src: `
    local('Arimo'),
    local('Arimo-Regular'),
    url('./font/Arimo-Regular.ttf) format('ttf')
  `,
};

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});
