import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 py-16 space-y-32">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 rounded-3xl p-14 text-white shadow-lg flex flex-col items-center text-center">
          <Banner />
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 p-14 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Features />
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white p-14 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-white p-14 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Resume />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gradient-to-l from-blue-400 via-indigo-500 to-purple-500 text-white p-14 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Testimonial />
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 p-14 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-14">
        <div className="max-w-7xl mx-auto">
          <Footer />
          <FooterBottom />
        </div>
      </footer>
    </div>
  );
}

export default App;
