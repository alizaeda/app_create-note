import { Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
