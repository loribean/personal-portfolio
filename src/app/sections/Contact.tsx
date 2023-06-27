import Button from "@/app/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Drop me an email, I&apos;ll get back to you in a jiffy.
      </p>
      <div className="contact-cta">
        <Button link="mailto:aureliadotlim@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
