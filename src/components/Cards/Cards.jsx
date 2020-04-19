import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Cards.module.css";
import InfoCard from "./InfoCard";
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <Row className={styles.container}>
      <Col xs={12} md={12} lg={4} className="mb-2 mb-lg-none px-1">
        <InfoCard
          value={confirmed.value}
          date={lastUpdate}
          title="Infected"
          wrapperClassName={styles.infected}
        />
      </Col>
      <Col xs={12} md={6} lg={4} className="mb-2 mb-lg-none px-1">
        <InfoCard
          value={recovered.value}
          date={lastUpdate}
          title="Recovered"
          wrapperClassName={styles.recovered}
        />
      </Col>
      <Col xs={12} md={6} lg={4} className="mb-2 mb-lg-none px-1">
        <InfoCard
          value={deaths.value}
          date={lastUpdate}
          title="Deaths"
          wrapperClassName={styles.deaths}
        />
      </Col>
    </Row>
  );
};
export default Info;
