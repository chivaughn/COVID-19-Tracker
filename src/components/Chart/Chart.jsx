import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData(country);
      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, [country]);
  if (!dailyData.cases) {
    return "Loading chart";
  }
  console.log(country);

  const cases_dates = Object.keys(dailyData.cases);
  const cases_values = Object.values(dailyData.cases);
  const deaths_values = Object.values(dailyData.deaths);
  const recovered_values = Object.values(dailyData.recovered);

  const lineChart =
    cases_dates.length !== 0 ? (
      <Line
        data={{
          labels: cases_dates,
          datasets: [
            {
              data: cases_values,
              label: "Infected",
              borderColor: "#3333ff",
              fill: false,
            },
            {
              data: deaths_values,
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: false,
            },
            {
              data: recovered_values,
              label: "Recovered",
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
              fill: false,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
