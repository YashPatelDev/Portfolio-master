import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I'm <span className="purple">Yash Patel</span>, a passionate professional based in <span className="purple">Toronto, Canada</span>, with a diverse background that reflects my journey from a high school graduate to a seasoned Business Development Executive.
          </p>

          <p style={{ textAlign: "justify" }}>
            My love for coding started with online courses like CS50 and CodeCamp after high school. These early experiences ignited my curiosity and set the foundation for a fulfilling career in software development. I transitioned from being a self-learner to a freelancer, taking on exciting projects that allowed me to apply and expand my coding skills.
          </p>

          <p style={{ textAlign: "justify" }}>
            My academic journey at Seneca Polytechnic in Computer Programming and Analysis further refined my technical prowess. During my tenure at Nutshell Information Technology Network Service LLC in Dubai, I served as a Junior Web Developer, contributing to responsive web applications and honing my expertise in both front-end and back-end technologies.
          </p>

          <p style={{ textAlign: "justify" }}>
            Eager to explore the broader aspects of technology, I took on the role of a Junior Project Manager within the same organization. This allowed me to lead collaborative efforts, ensuring the timely delivery of projects while nurturing client relationships. The experience opened my eyes to the dynamic intersection of technology and business.
          </p>

          <p style={{ textAlign: "justify" }}>
            Now, as a Business Development Executive at Maoq Digital in Toronto, I've taken on a pivotal role in spearheading successful initiatives, surpassing sales targets, and contributing to the company's sustained growth. My role involves executing strategic market analysis and maintaining robust client relationships.
          </p>

          <p style={{ textAlign: "justify" }}>
            Apart from my professional life, I find joy in playing games, writing tech blogs, and exploring new places through travel. My mantra is simple: "<span className="purple">Strive to build things that make a difference!</span>"
          </p>

          <footer className="blockquote-footer">Yash Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
