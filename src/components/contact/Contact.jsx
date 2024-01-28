import "./contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bpe0a4k",
        "template_b6kprm7",
        form.current,
        "gBGzS48B_PN18z8CG"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="contact">
        <div className="wrapper">
          <div className="edu-title" style={{ paddingBottom: "24px" }}>
            Contact
          </div>
          <div className="contact-desc">
            Feel free to contact me if you have any questions, offers,
            oppurtunities or just want to say hi!
          </div>
          <form className="contact-form" onSubmit={handlesubmit} ref={form}>
            <div className="contact-title">Email Me</div>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              name="from_name"
            />
            <input
              type="text"
              placeholder="Email"
              className="contact-input"
              name="from_email"
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
              name="subject"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="contact-text"
              name="message"
            />
            <input type="submit" value="Send" className="contact-btn" />
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email Sent Successfully"
            severity="success"
          />
        </div>
      </div>
    </>
  );
}
