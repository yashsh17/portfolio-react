import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter your email.");
      return;
    }

    // basic email check (optional but nice)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    setStatus("Subscribing...");

    const formData = new FormData();
    formData.append("access_key", "12b6f935-89a5-462c-97f9-5c8e7078ff90"); // same key as contact form
    formData.append("email", email);
    formData.append("subject", "New Portfolio Newsletter Subscriber");
    formData.append("message", `New subscriber: ${email}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("🎉 Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
        console.log("Web3Forms error:", data);
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <footer className="footer">

      <div className="footer-top">
        <p>Enter your email</p>

        <div className="footer-subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>

        {status && <p className="footer-status">{status}</p>}
      </div>

      <p className="footer-made">
        Made with <span>❤️</span> & <span>🧠</span> by <strong>Yash Sharma</strong>
      </p>

      <p className="footer-copy">
        © 2025 Yash Sharma. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;



