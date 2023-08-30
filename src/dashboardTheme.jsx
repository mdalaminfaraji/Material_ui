import { createTheme } from '@mui/material/styles';
export const DashboardTheme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          contained: {
            // Some CSS
            fontSize: '1rem!important',
          },
        },
      },
    },

    palette: {
        primary: {
          main: '#FF5733',
          // light: will be calculated from palette.primary.main,
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          main: '#E0C2FF',
          light: '#F5EBFF',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#47008F',
        },
      },
  });