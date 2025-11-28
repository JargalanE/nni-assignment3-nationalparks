import { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY   
      )
      .then(
        () => {
          alert("Message sent!");
          e.target.reset(); 
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="Contact" id="contact-section">
      <h2 className="title">CONTACT US</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="user_name" /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="user_email" /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" /><br />

        <div id="submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
