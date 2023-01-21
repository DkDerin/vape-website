import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../contactForm/contact.css";

export const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dyozuld",
        "template_jib2hn6",
        form.current,
        "MkebOPTi1qSaiDRG5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setStatus({ type: "success" });
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: "error", error });
        }
      );
  };

  return (
    <div>
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h5 className="title">Contact us</h5>
          <p className="description">
            Kontakta oss gärna om du behöver hjälp, hjälp eller andra frågor.
          </p>
          {status?.type === "success" && (
            <div class="alert alert-success" role="alert">
              Tack för ditt meddelande!
            </div>
          )}
          {status?.type === "error" && (
            <div class="alert alert-danger" role="alert">
              Oj, något gick fel, ring oss gärna!
            </div>
          )}
          <div>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              name="from_name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              name="from_email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              className="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="submit-button-wrapper">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};
