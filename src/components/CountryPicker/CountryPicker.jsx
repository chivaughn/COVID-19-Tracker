import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      {/* <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect> */}

      <Autocomplete
        value={value}
        id="controllable-states-demo"
        options={countries}
        style={{ width: 300 }}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleCountryChange(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select a Country" variant="outlined" />
        )}
      />
      {/* <Typography
        style={{ marginTop: 30, alignContent: "center" }}
        variant="h5"
      >
        {value}
      </Typography> */}
    </FormControl>
  );
};

export default Countries;
