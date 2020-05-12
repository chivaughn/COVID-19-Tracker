import React from "react";
import { Cards, Chart, CountryPicker, Header } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDailyData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart country={country} />
        </div>
      </div>
    );
  }
}

export default App;
