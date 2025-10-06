import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apt from "../../Assets/Projects/apt.png";
import aws from "../../Assets/Projects/aws.png";
import grafana from "../../Assets/Projects/grafana.png";
import idps from "../../Assets/Projects/idps.png";
import kvm from "../../Assets/Projects/kvm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grafana}
              isBlog={false}
              title="Performance Testing System with k6 on Kubernetes"
              description="Built a performance testing system on Kubernetes using k6 for load testing. Implemented a data pipeline with Kafka and Telegraf to stream metrics into InfluxDB, and created real-time dashboards with Grafana, Prometheus, and Loki."
              ghLink="https://drive.google.com/drive/folders/19TNALHOzL7nzwm9HMGZaE8IwMfOkqbaN?usp=drive_link"
              // demoLink can be added later if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kvm}
              isBlog={false}
              title="Deploy KVM Virtualization Tools (4 Main Scenarios)"
              description="Built an internal network on VMware with three virtual machines using KVM virtualization. Deployed a web server and a data server using Django, Gunicorn, Nginx and MySQL."
              ghLink="https://github.com/dducktai/Networks-And-Systems-Administration-Project"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="Confidentiality and Access Control in Amazon RDS MySQL"
              description="Implemented data encryption for SQL databases using AES-GCM-256, encrypted AES keys with CP-ABE, and applied Attribute-Based Access Control (ABAC) for fine-grained cloud access control."
              ghLink="https://github.com/dducktai/Cryptography-Project"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idps}
              isBlog={false}
              title="Hybrid Intrusion Detection using Suricata and Machine Learning"
              description="Built a test network to simulate attacks, trained ML models on CICIDS2017, and integrated the trained model into Suricata as a plugin for improved detection."
              ghLink="https://github.com/dducktai/suricata-ids-with-ml.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apt}
              isBlog={false}
              title="Detecting APT Attacks using Provenance Graphs and MAGNN"
              description="Constructed heterogeneous provenance graphs from DARPA E3 logs, designed meta-paths to capture semantics, and applied GNN classification to detect APT stages (privilege escalation, C2, stealthy file ops)."
              ghLink="https://github.com/dducktai/apt-detection.git"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
