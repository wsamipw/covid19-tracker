import React from 'react';
import {Row, Col} from 'react-bootstrap';
const Footer = () => {
    return (
      <Row className="mt-3">
        <Col>
          <p>
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
// COVID-19 global data (from JHU CSSE for now) as-a-service