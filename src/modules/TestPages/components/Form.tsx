import React, { FC, useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  score: number;
}

export const ContactForm: FC<ContactFormProps> = ({ score }) => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5leyrze",
        "template_gt8zuwh",
        form.current as any,
        "RemG0uGGQFda1RPKS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form as any} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
