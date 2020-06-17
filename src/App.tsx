import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "pages/home";
import { GoogleSheetsContextProvider } from "common/google-sheets";
import { Flashcards } from "pages/flashcards";

export const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)") || true;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            dark: "rgb(100,141,174)",
            light: "rgb(166, 212, 250)",
            main: "#90caf9"
          },
          secondary: {
            dark: "rgb(170, 100, 123)",
            light: "rgb(246, 165, 192)",
            main: "#f48fb1"
          },
          error: {
            dark: "#d32f2f",
            light: "#e57373",
            main: "#f44336"
          },
          warning: {
            dark: "#f57c00",
            light: "#ffb74d",
            main: "#ff9800"
          },
          info: {
            dark: "#1976d2",
            light: "#64b5f6",
            main: "#2196f3"
          },
          success: {
            dark: "#388e3c",
            light: "#81c784",
            main: "#4caf50"
          }
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <GoogleSheetsContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" children={<Flashcards />} />
          </Switch>
        </GoogleSheetsContextProvider>
      </Router>
    </ThemeProvider>
  );
};
