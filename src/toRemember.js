import ButtonGroup from "@material-ui/core/ButtonGroup";

<ButtonGroup variant="text" color="primary" variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
  <Button>four</Button>
  <Button>Three</Button>
  <Button>Three</Button>
  <Button>Three</Button>
</ButtonGroup>;

import SendIcon from "@material-ui/icons/Send";

<Button
  variant="outlined"
  color="primary"
  type="submit"
  endIcon={<SendIcon />}
></Button>;

import { makeStyles } from "@material-ui/core";
const classes = useStyles();

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  },
});

import { createTheme, ThemeProvider } from "@material-ui/core";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
<ThemeProvider theme={theme}></ThemeProvider>;
