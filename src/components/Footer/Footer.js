import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from "./Footer.module.css";
const Footer = () => {
    return (
      <Row className={styles.footer}>
        <Col>
          <p className="text-center">
            <small>
              Powered by{" "}
              <a
                href="https://techkunja.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Kunja
              </a>{" "}
              &bull;{" "}
              <span>
                Data provided by{" "}
                <a
                  href="https://systems.jhu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JHU CSSE
                </a>
              </span>
            </small>
          </p>
        </Col>
      </Row>
    );
}
export default Footer;