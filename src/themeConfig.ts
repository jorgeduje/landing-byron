import { createTheme } from "@mui/material";

export const colors = {
  lightPurple: "#5B4FB9",
  mediumPurple: "#2F3349",
  darkPurple: "#25293C",
  white: "#F5F5F5",
};
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.lightPurple,
    },
    secondary: {
      main: colors.mediumPurple,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.darkPurple,
      secondary: colors.mediumPurple,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});
