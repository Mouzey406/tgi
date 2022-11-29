import React from "react";
import { createTheme } from '@mui/material/styles';

// export const MainTheme = React.createContext({
//     mainTheme: [{
//         theme: 'light',
//         bg: 'yellow'
//     }]
// });
export const MainTheme = React.createContext(null);


export const MuiTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
      light: '#393939',
    },
    secondary: {
      main: '#626262',
    },
    text: {
      secondary: 'rgb(68, 62, 62)',
      disabled: 'rgba(125,125,125,0.38)',
    },
    background: {
      default: '#e6fffd',
      paper: '#000000',
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  typography: {
    button: {
        fontSize: 15
    }
  },
  button: {
    '&:hover': {
        backgroundColor: "#fff"
    }
  }
});