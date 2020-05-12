import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Header.module.css";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <Button color="inherit">
            <Link
              target="_blank"
              href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
              className={classes.link}
            >
              What is COVID-19
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              target="_blank"
              href="https://www.who.int/health-topics/coronavirus#tab=tab_2"
              className={classes.link}
            >
              How to Stay Safe
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              target="_blank"
              href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
              className={classes.link}
            >
              FAQs
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
