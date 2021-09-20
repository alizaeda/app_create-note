import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles, TextField } from "@material-ui/core";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  field: {
    marginBottom: 10,
    marginTop: 10,
    display: "block",
  },
  btn: {
    // marginTop: 20,
  },
});

const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("reminders");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography variant="h6" component="h2" color="primary" gutterBottom>
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Notes Title"
          variant="outlined"
          size="small"
          required
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          className={classes.field}
          label="Details"
          variant="outlined"
          size="small"
          multiline
          rows={5}
          required
          fullWidth
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              value="reminders"
              label="Reminders"
            />
            <FormControlLabel control={<Radio />} value="money" label="Money" />
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel control={<Radio />} value="work" label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
          className={classes.btn}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
