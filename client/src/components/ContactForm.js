import React, { useState, useEffect } from "react";
import BACKEND_URL from "../config";
import axios from "axios";

const ContactForm = ({ isShowContact }) => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState("");
  const [subject, getSubject] = useState("");
  const [message, getMessage] = useState("");

  const onChangeName = (e) => {
    getName(e.target.value);
  };
  const onChangeEmail = (e) => {
    getEmail(e.target.value);
  };
  const onChangeSubject = (e) => {
    getSubject(e.target.value);
  };
  const onChangeMessage = (e) => {
    getMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const User = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    axios
      .post(BACKEND_URL + "/Contact/add", User)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    let toggler = document.getElementById("contactForm");

    let formText = document.getElementsByClassName("contact-text");
    formText[0].innerHTML = "SUCCESS!";

    setTimeout(() => {
      if (!toggler.classList.contains("active")) {
        toggler.classList.add("active");
      }
      getName("");
      getEmail("");
      getMessage("");
      getSubject("");
    }, 1000);

  };

  const togglePopUp = (e) => {
    let toggler = document.getElementById("contactForm");

    if (e.target.classList.contains("contact-form")) {
      toggler.classList.add("active");
    }
  };

  useEffect(() => {
    if (!document.getElementById("contactForm").classList.contains("active")) {
      document.addEventListener("click", togglePopUp);
    }
    let formText = document.getElementsByClassName("contact-text");
    formText[0].innerHTML = "CONTACT US!";
  }, [isShowContact]);

  return (
    <div id="contactForm" className={`${!isShowContact ? "active" : ""} show`}>
      <div className="contact-form">
        <div className="form-box-2 solid">
          <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="contact-text"> Contact us</h1>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="contact-box"
              onChange={onChangeName}
              required
              value={name}
            />{" "}
            <br />
            <br />
            <label>Email</label>
            <input
              type="text"
              email="email"
              className="contact-box"
              onChange={onChangeEmail}
              required
              value={email}
            />{" "}
            <br />
            <br />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              className="contact-box"
              onChange={onChangeSubject}
              required
              value={subject}
            />{" "}
            <br />
            <br />
            <label>Message</label>
            <input
              type="text"
              name="message"
              className="contact-box"
              onChange={onChangeMessage}
              required
              value={message}
            />{" "}
            <br />
            <br />
            <input
              id="submitButton"
              type="submit"
              value="Send"
              className="contact-btn"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;