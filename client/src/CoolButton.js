import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

// const useStyles = makeStyles({
//   buttonStyle: {
//     color: (props) => (props.cool ? "blue" : "red"),
//   },
// });

// PASSING PROPS
// const useStyles = makeStyles({
//   buttonStyle: (props) => {
//     return {
//       color: props.cool ? "blue" : "red",
//       backgroundColor: props.cool ? "orange" : "yellow",
//     };
//   },
// });

// THEME
// const useStyles = makeStyles((theme) => ({
//   buttonStyle: (props) => {
//     return {
//       color: props.cool ? "blue" : "red",
//       [theme.breakpoints.up("sm")]: { color: "cyan" },
//       backgroundColor: props.cool ? "orange" : "yellow",
//     };
//   },
// }));

// ADDING MULTIPLE CLASSES
const useStyles = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: { color: "cyan" },
    };
  },
  buttonBackground: { backgroundColor: "red" },
}));

export default function CoolButton(props) {
  const classes = useStyles(props);
  return (
    <Button
      fullWidth
      className={classNames(classes.buttonStyle, classes.buttonBackground)}
    >
      The Button
    </Button>
  );
}
