import React from "react";
import "./contact.css";
import "./style.css";
export const Contact = () => {
  return (
    <section class="volunteer-contact">
      <form class="volunteer_contact-form">
        <h1>Contact Us</h1>
        <input
          class="contact-form"
          type="text"
          id="fname"
          placeholder="First Name"
          required
        />
        <input
          class="contact-form"
          type="text"
          id="lname"
          placeholder="Last Name"
          required
        />
        <input
          class="contact-form"
          type="email"
          id="email"
          placeholder="name@example.com"
          required
        />
        <input
          class="contact-form"
          type="tel"
          id="lname"
          placeholder="Phone number"
          required
        />
        <textarea id="contact-form-message" row="5" col="60">
          Message...
        </textarea>
        <input class=" btn contact-form-submit" type="submit" value="submit" />
      </form>
    </section>
  );
};
