import React, { useState } from "react";

export const Form = () => {
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsName('');
    setIsEmail('');
    setIsMessage('');
  };

  return (
    <form onSubmit={handleSumbit}>
      <br/>
      <label htmlFor="name">Name *</label>
      <br/>
      <input
        type="text"
        id="name"
        value={isName}
        onChange={(e) => setIsName(e.target.value)}
      />

      <br />

      <label htmlFor="email">Email *</label>
      <br/>
      <input
        type="email"
        id="email"
        value={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
      />
      <br />

      <label htmlFor="message">Message *</label>
      <br />
      <textarea
        id="message"
        value={isMessage}
        onChange={(e) => setIsMessage(e.target.value)}
      />
      <br />

      <button type="submit">Send Message</button>
    </form>
  );
};
