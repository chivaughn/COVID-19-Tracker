import axios from "axios";

const url = "https://corona.lmao.ninja/v2";

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}?yesterday=false&strict=true`;
  } else {
    changeableURL = `${url}/all`;
  }
  try {
    const {
      data: { cases, deaths, recovered, active },
    } = await axios.get(`${changeableURL}`);
    const modifiedData = {
      cases,
      deaths,
      recovered,
      active,
    };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async (country) => {
  let dailyURL = url;
  if (country) {
    dailyURL = `${url}/historical/${country}?lastdays=150`;
    const {
      data: { timeline },
    } = await axios.get(`${dailyURL}`);
    return timeline;
  } else {
    dailyURL = `${url}/historical/all?lastdays=150`;
    const { data } = await axios.get(`${dailyURL}`);
    return data;
  }
  try {
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data.map((data) => data.country);
  } catch (error) {
    return error;
  }
};
