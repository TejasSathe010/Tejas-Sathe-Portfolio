import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailValidation = () =>
    String(formData.email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = (e) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username.trim()) return setErrMsg("Name is required!");
    if (!phoneNumber.trim()) return setErrMsg("Phone number is required!");
    if (!email.trim() || !emailValidation()) return setErrMsg("Valid email required!");
    if (!subject.trim()) return setErrMsg("Subject is required!");
    if (!message.trim()) return setErrMsg("Message is required!");

    emailjs
      .sendForm("service_x1meo4k", "template_lthw7qt", "#contactForm", "RGbfNPp9Vg8miGvkS")
      .then(
        () => {
          setSuccessMsg(`Thank you, ${username}! Your message has been sent.`);
          setTimeout(() => setSuccessMsg(""), 5000);
        },
        (error) => {
          setErrMsg(error.text);
          setTimeout(() => setErrMsg(""), 5000);
        }
      );

    setErrMsg("");
    setFormData({ username: "", phoneNumber: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
        <ContactLeft />

        <div className="w-full lg:w-[60%] bg-white shadow-lg rounded-xl border border-gray-200 p-8">
          <Title title="Contact" des="Get in Touch" />

          {errMsg && <p className="text-red-600 bg-red-100 p-3 rounded-md text-center">{errMsg}</p>}
          {successMsg && <p className="text-green-600 bg-green-100 p-3 rounded-md text-center">{successMsg}</p>}

          <form id="contactForm" className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-gray-700 font-medium">Your Name</label>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="contactInput" placeholder="Enter your name" />
              </div>
              <div className="w-full">
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="contactInput" placeholder="Enter your phone" />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="contactInput" placeholder="Enter your email" />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="contactInput" placeholder="Enter subject" />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className="contactTextArea" rows="6" placeholder="Type your message here..."></textarea>
            </div>

            <button onClick={handleSend} className="w-full py-3 bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;