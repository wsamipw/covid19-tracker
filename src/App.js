import React from "react";

import { Cards, Chart, CountryList, Assessment, Footer } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    document.title="COVID-19 | Worldwide status"
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };
  componentDidUpdate =(prevProps, prevState)=>{
    if(prevState.country !== this.state.country){
    document.title = `COVID-19 | ${this.state.country !== "" ?this.state.country :"Worldwide" } status`;
    }
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
        <Container className={styles.container}>
          <Row>
            <Col>
              <img className={styles.image} src={image} alt="COVID-19" />
            </Col>
          </Row>
          <Cards data={data} />
          <Row className="w-100">
            <Col xs={12} md={3}>
              <CountryList
                selectedCountry={country}
                handleCountryChange={this.handleCountryChange}
              />
            </Col>
            <Col xs={12} md={9}>
              <Chart data={data} country={country} />
            </Col>
          </Row>
          {/* <Row className="mt-4">
          <Col>
          <Assessment />
          </Col>
        </Row> */}
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
