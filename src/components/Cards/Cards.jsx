import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import { Row, Col } from "react-bootstrap";
import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <Row className={styles.container}>
      <Col xs={12} md={12} lg={4} className="mb-2 mb-lg-none px-1">
        <Card className="w-100">
          <CardContent className={styles.infected}>
            <Typography className={styles.text_white} gutterBottom variant="h4">
              <strong>Infected</strong>
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={styles.text_white}
            >
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography className={styles.text_light}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4} className="mb-2 mb-lg-none">
        <Card className="w-100">
          <CardContent className={styles.recovered}>
            <Typography className={styles.text_white} gutterBottom variant="h4">
              <strong>Recovered</strong>
            </Typography>
            <Typography
              className={styles.text_white}
              variant="h2"
              component="h2"
            >
              <CountUp
                start={0}
                end={recovered.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography className={styles.text_light}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4} className="mb-2 mb-lg-none">
        <Card className="w-100">
          <CardContent className={styles.deaths}>
            <Typography className={styles.text_white} gutterBottom variant="h4">
              <strong>Deaths</strong>
            </Typography>
            <Typography
              className={styles.text_white}
              variant="h2"
              component="h2"
            >
              <CountUp
                start={0}
                end={deaths.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography className={styles.text_light}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Col>
    </Row>
  );
};
export default Info;
