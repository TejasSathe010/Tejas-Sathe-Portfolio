import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { motion } from "framer-motion";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailValidation = () =>
    String(formData.email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrMsg("");
    
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username.trim()) return setErrMsg("Name is required!");
    if (!phoneNumber.trim()) return setErrMsg("Phone number is required!");
    if (!email.trim() || !emailValidation()) return setErrMsg("Valid email required!");
    if (!subject.trim()) return setErrMsg("Subject is required!");
    if (!message.trim()) return setErrMsg("Message is required!");

    try {
      await emailjs.sendForm("service_x1meo4k", "template_lthw7qt", "#contactForm", "11");
      setSuccessMsg(`Thank you, ${username}! Your message has been sent.`);
      setTimeout(() => {
        setSuccessMsg("");
        setFormData({ username: "", phoneNumber: "", email: "", subject: "", message: "" });
      }, 5000);
    } catch (error) {
      setErrMsg(error.text || "An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
        <ContactLeft />

        <div className="w-full lg:w-[60%] bg-white shadow-lg rounded-xl border border-gray-200 p-8">
          <Title title="Contact" des="Get in Touch" />

          {errMsg && (
            <p className="text-red-600 bg-red-50 p-3 rounded-md text-center mb-6">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="text-green-600 bg-green-50 p-3 rounded-md text-center mb-6">
              {successMsg}
            </p>
          )}

          <form id="contactForm" className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                rows="6"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              onClick={handleSend}
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;