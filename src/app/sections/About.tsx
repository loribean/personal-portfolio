import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello there! My name is Aurelia, and I am passionate about creating
            scalable and robust web applications. My interest in web development was
            sparked in 2020 when I created my first project called Puppy Love, a
            tinder-style pet adoption app built using React and Node.js.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I&apos;m a software engineer. I help to build APIs, design infrastructure,
            and databases that powers the product over at{" "}
            <Link href="https://www.deliveryhero.com/" className="link" target="_blank">
              Delivery Hero
            </Link>
          </p>

         
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve worked with:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Golang</li>
            <li className="about-grid-info-list-item">Gin</li>
            <li className="about-grid-info-list-item">Terraform</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Laravel</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">REST</li>
            <li className="about-grid-info-list-item">OAuth2.0</li>
            <li className="about-grid-info-list-item">OpenAPI</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/lori6.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
