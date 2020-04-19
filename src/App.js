import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Footer } from "./components";
import MainRoute from "./config/routes";
import styles from "./App.module.css";
import image from "./images/image.png";
const App = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col>
            <img className={styles.image} src={image} alt="COVID-19" />
          </Col>
        </Row>
        <MainRoute />
      </Container>
      <Footer />
    </>
  );
};

export default App;
