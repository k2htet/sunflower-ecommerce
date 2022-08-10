import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(26, 100%, 55%)",
    },
    secondary: {
      main: "hsl(25, 100%, 94%)",
    },
    info: {
      main: "hsl(220, 13%, 13%)",
    },
  },
});

theme.typography.h5 = {
  fontSize: "1rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
    letterSpacing: "0.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    letterSpacing: "0.1rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.5rem",
  fontWeight: 400,
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
    letterSpacing: "0.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    letterSpacing: "0.1rem",
  },
};
