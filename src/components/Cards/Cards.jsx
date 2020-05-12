import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { cases, deaths, recovered } }) => {
  if (!cases) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.cases)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Cases
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of reported cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
