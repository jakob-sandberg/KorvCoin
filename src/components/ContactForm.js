import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../style/ContactForm.css";

import { init } from "@emailjs/browser";
init("Zg188Ty_PUywPQcwM");

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_h6odn93";
      const templateId = "template_ukwsjcg";
      const userId = "Zg188Ty_PUywPQcwM";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div id="contact-form">
      <h1>GET IN TOUCH</h1>
      <p>If you have any questions don't hesitate to send me an email!</p>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button>

      <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </div>
  );
};

export default ContactForm;
