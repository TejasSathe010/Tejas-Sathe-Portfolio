import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
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
      <main className="max-w-screen-2xl mx-auto px-6 sm:px-4 md:px-16 py-2 sm:space-y-16 space-y-32">
        {/* Banner Section */}
        <section className="rounded-3xl p-10 sm:p-0 md:p-4 text-white shadow-lg flex flex-col items-center text-center">
          <Banner />
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 p-8 sm:p-0 md:p-4 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Features />
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gray-100 text-white p-8 sm:p-0 md:p-4 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-gray-100 p-8 sm:p-0 md:p-4 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Resume />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-100 text-white p-8 sm:p-0 md:p-4 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Testimonial />
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 p-8 sm:p-0 md:p-4 rounded-3xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-6 sm:py-8 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* <Footer /> */}
          <FooterBottom />
        </div>
      </footer>
    </div>
  );
}

export default App;
