import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import { fetchCountries } from "../../api";
import styles from "./CountryList.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CountryList = ({ handleCountryChange, selectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  return (
    <>
      <Autocomplete
        id="country-select-demo"
        style={{ marginBottom: 10 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => {
          return (
            <React.Fragment>
              {option.name}
            </React.Fragment>
          );
        }}
        onChange={(e, v) => {
          if (v) {
            handleCountryChange(v.name);
          } else {
            handleCountryChange("");
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search country"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <p className="mb-2 text-muted">
        <small>Or choose directly from the list.</small>
      </p>
      <div className={styles.wrapper}>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item
            active={selectedCountry === ""}
            action
            onClick={() => handleCountryChange("")}
          >
            Worldwide
          </ListGroup.Item>
          {countries.map((country, index) => (
            <ListGroup.Item
              key={index}
              action
              active={selectedCountry === country.name}
              onClick={() => handleCountryChange(country.name)}
            >
              {country.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default CountryList;
