import Papa from "papaparse";

const TEST_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1HkoiQTzr3xUEEQDLxZ8nJZDKwTknZjMgRqJ9qW3oQpA/export?format=csv&gid=0";

const getTestData = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(TEST_DATA_URL, {
      download: true,
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
};

export default getTestData;
