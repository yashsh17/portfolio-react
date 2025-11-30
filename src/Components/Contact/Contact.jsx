import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // ✅ Your Web3Forms access key
    formData.append("access_key", "12b6f935-89a5-462c-97f9-5c8e7078ff90");

    // (Optional) Subject line in email
    formData.append("subject", "New message from portfolio contact form");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>yashparth50@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 80767 62988</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"               // ✅ IMPORTANT
            placeholder="Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"             // ✅ IMPORTANT
            placeholder="Enter your email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"           // ✅ IMPORTANT
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Status text */}
          {result && <p className="form-status">{result}</p>}

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

