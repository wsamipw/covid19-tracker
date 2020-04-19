import React, {useState, useEffect} from 'react';
import { Row, Col } from "react-bootstrap";
import { fetchData } from '../api';
import { Cards, CountryList, Chart } from '../components';
import { Button } from "@material-ui/core";

const Home = (props) => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `COVID-19 | ${
      country !== "" ? country : "Worldwide"
    } status`;
    const fetch = async () => {
      setData(await fetchData());
    };
    fetch();
  }, [country]);
  const handleCountryChange = async (country) => {
    setCountry(country);
    setData(await fetchData(country));
  };

  return (
    <div>
      <Cards data={data} />
      <Row className="w-100">
        <Col xs={12} md={3}>
          <CountryList
            selectedCountry={country}
            handleCountryChange={handleCountryChange}
          />
        </Col>
        <Col xs={12} md={9}>
          <Chart data={data} country={country} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="d-flex flex-column align-items-center">
            <h5>
              Are you having doubts about COVID-19 infection? Take this quick
              survey to find out.
            </h5>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="mt-3"
              onClick={()=>props.history.push('/self-assessment')}
            >
              Start Self Assessment Now
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
