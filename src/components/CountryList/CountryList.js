import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import { fetchCountries } from "../../api";
import styles from "./CountryList.module.css";
const CountryList = ({ handleCountryChange, selectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  return (
    <div className={styles.wrapper}>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item active={selectedCountry === ""} action onClick={() => handleCountryChange("")}>
          Worldwide
        </ListGroup.Item>
        {countries.map((country, index) => (
          <ListGroup.Item
            key={index}
            action
            active ={selectedCountry===country}
            onClick={() => handleCountryChange(country)}
          >
            {country}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CountryList;
