import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const InfoCard = ({ value, date, title, wrapperClassName }) => {
  return (
    <Card className="w-100">
      <CardContent className={wrapperClassName}>
        <Typography className={styles.text_white} gutterBottom variant="h4">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="h2" component="h2" className={styles.text_white}>
          <CountUp start={0} end={value} duration={1} separator="," />
        </Typography>
        <Typography className={styles.text_light}>
          {new Date(date).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
