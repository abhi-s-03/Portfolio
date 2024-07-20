import "./contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
            <span>
              Feel free to contact me if you have any questions, offers,
              oppurtunities or just want to say hi!
            </span>
          </div>
          <form className="contact-form" onSubmit={handlesubmit} ref={form}>
            <div className="contact-title">Email Me</div>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              name="from_name"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="contact-input"
              name="from_email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
              name="subject"
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="contact-text"
              name="message"
              required
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
