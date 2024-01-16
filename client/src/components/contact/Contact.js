import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailValidation = () => {
    return String(formData.email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username.trim()) {
      setErrMsg('Username is required!');
    } else if (!phoneNumber.trim()) {
      setErrMsg('Phone number is required!');
    } else if (!email.trim()) {
      setErrMsg('Please provide your Email!');
    } else if (!emailValidation()) {
      setErrMsg('Provide a valid Email!');
    } else if (!subject.trim()) {
      setErrMsg('Please provide your Subject!');
    } else if (!message.trim()) {
      setErrMsg('Message is required!');
    } else {
      const form = document.getElementById('contactForm');
      emailjs
        .sendForm('service_x1meo4k', 'template_lthw7qt', form, "RGbfNPp9Vg8miGvkS")
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully!`);
            setTimeout(() => setSuccessMsg(''), 10000);
          },
          (error) => {
            setErrMsg(error.text);
            setTimeout(() => setErrMsg(''), 10000); 
          }
        );

      setErrMsg('');
      setFormData({
        username: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-start items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-slate-50 to-slate-200 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-2xl">
            <form id='contactForm' className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-50 to-slate-200 shadow-2xl text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-slate-50 to-slate-200 shadow-2xl text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-800 uppercase tracking-wide">Your name</p>
                  <input
                    onChange={handleInputChange}
                    value={formData.username}
                    name="username"
                    className={`${
                      errMsg === 'Username is required!' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-800 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    className={`${
                      errMsg === 'Phone number is required!' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">Email</p>
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  className={`${
                    errMsg === 'Please provide your Email!' && 'outline-designColor'
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">Subject</p>
                <input
                  onChange={handleInputChange}
                  value={formData.subject}
                  name="subject"
                  className={`${
                    errMsg === 'Please provide your Subject!' && 'outline-designColor'
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={handleInputChange}
                  value={formData.message}
                  name="message"
                  className={`${
                    errMsg === 'Message is required!' && 'outline-designColor'
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-slate-50 rounded-lg text-base text-gray-800 tracking-wider uppercase hover:text-designColor duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
