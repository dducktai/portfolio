import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avt.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a student majoring in <b className="purple">Information Security</b> at University of Information Technology (VNU-HCM),
              passionate about <b className="purple">DevOps</b> and <b className="purple">Security Operations (SOC)</b>. 🛠️🔒
              <br />
              <br />
              I have hands-on experience with{" "}
              <i>
                <b className="purple">Python, C/C++, C#, Bash, and JavaScript</b>
              </i>
              , and I enjoy applying these skills to develop secure and automated systems.
              <br />
              <br />
              My technical interests include{" "}
              <i>
                <b className="purple">containerization, cloud infrastructures, CI/CD automation</b>
              </i>
              , and{" "}
              <b className="purple">monitoring/incident detection</b> for security environments.
              <br />
              <br />
              I’ve worked with tools such as{" "}
              <i>
                <b className="purple">
                  Docker, Kubernetes, k6, Grafana, Prometheus, Loki, InfluxDB, and Snort
                </b>
              </i>
              , and I’m also familiar with{" "}
              <b className="purple">AWS, Azure, and KVM virtualization</b>.
              <br />
              <br />
              My long-term goal is to become a{" "}
              <b className="purple">DevSecOps Engineer or SOC Analyst</b> — integrating{" "}
              <b className="purple">security, scalability, and observability</b> into enterprise-level systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dducktai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dducktai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dducktai/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
