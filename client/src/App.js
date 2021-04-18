import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CoolButton from "./CoolButton";

const useStyles = makeStyles({
  buttonStyle: {
    color: "red",
    border: "none",
  },
  textStyle: {
    color: "green",
  },
});

function App() {
  const classes = useStyles();
  const cool = true;
  return (
    <div className="App">
      <Button className={classes.buttonStyle}>Small button</Button>
      <h1 className={classes.textStyle}>This is text</h1>
      <CoolButton cool={cool} />
    </div>
  );
}

export default App;
