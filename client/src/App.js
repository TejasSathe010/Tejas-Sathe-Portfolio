import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from 'framer-motion';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  const penguinRef = useRef(null);
  const friendPenguinRef = useRef(null);
  const leftLegRef = useRef(null);
  const rightLegRef = useRef(null);
  const leftArmRef = useRef(null);
  const rightArmRef = useRef(null);
  const friendLeftLegRef = useRef(null);
  const friendRightLegRef = useRef(null);
  const friendLeftArmRef = useRef(null);
  const friendRightArmRef = useRef(null);
  const thoughtCloudRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [walking, setWalking] = useState(false);
  const walkingAnimationsRef = useRef(null);
  const friendWalkingAnimationsRef = useRef(null);

  // Initialize walking animations for both penguins
  useEffect(() => {
    walkingAnimationsRef.current = {
      leftLeg: gsap.to(leftLegRef.current, {
        duration: 0.5,
        y: 10,
        rotation: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      rightLeg: gsap.to(rightLegRef.current, {
        duration: 0.5,
        y: 10,
        rotation: -15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      leftArm: gsap.to(leftArmRef.current, {
        duration: 0.5,
        rotation: -20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      rightArm: gsap.to(rightArmRef.current, {
        duration: 0.5,
        rotation: 20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      })
    };

    friendWalkingAnimationsRef.current = {
      leftLeg: gsap.to(friendLeftLegRef.current, {
        duration: 0.5,
        y: 10,
        rotation: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      rightLeg: gsap.to(friendRightLegRef.current, {
        duration: 0.5,
        y: 10,
        rotation: -15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      leftArm: gsap.to(friendLeftArmRef.current, {
        duration: 0.5,
        rotation: -20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      }),
      rightArm: gsap.to(friendRightArmRef.current, {
        duration: 0.5,
        rotation: 20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true
      })
    };

    // Initially hide the thought cloud and friend penguin
    gsap.set(thoughtCloudRef.current, { opacity: 0, scale: 0 });
    gsap.set(friendPenguinRef.current, { opacity: 0, scale: 0, x: -window.innerWidth });
  }, []);

  useEffect(() => {
    let moveTimeout;
    
    const cursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      lastMousePos.current = { x: mouseX, y: mouseY };

      const x = mouseX - 30;
      const y = mouseY - 30 + window.scrollY;

      // Move main penguin
      gsap.to(penguinRef.current, {
        duration: 0.3,
        x: x,
        y: y,
      });

      // Center thought bubble above penguin's head
      gsap.to(thoughtCloudRef.current, {
        duration: 0.3,
        x: x - 45,
        y: y - 90,
      });

      // Hide friend penguin while moving
      gsap.to(friendPenguinRef.current, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
        x: -window.innerWidth,
      });

      if (!walking) {
        setWalking(true);
        Object.values(walkingAnimationsRef.current).forEach(anim => anim.play());
      }

      gsap.to(thoughtCloudRef.current, { 
        opacity: 0, 
        scale: 0, 
        duration: 0.2,
        ease: "power2.out"
      });

      clearTimeout(moveTimeout);

      moveTimeout = setTimeout(() => {
        setWalking(false);
        Object.values(walkingAnimationsRef.current).forEach(anim => anim.pause());
        
        // Show thought cloud
        gsap.to(thoughtCloudRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });

        // Animate friend penguin dramatically entering and hugging
        gsap.timeline()
          .to(friendPenguinRef.current, {
            duration: 0.8,
            opacity: 1,
            scale: 1,
            x: x + 30, // Slightly to the right of main penguin
            y: y,
            ease: "power2.out",
            onStart: () => {
              Object.values(friendWalkingAnimationsRef.current).forEach(anim => anim.play());
            }
          })
          .to(friendPenguinRef.current, {
            duration: 0.3,
            rotation: -10,
            x: x + 10, // Move very close to main penguin
            onComplete: () => {
              Object.values(friendWalkingAnimationsRef.current).forEach(anim => anim.pause());
              
              // Hug animation
              gsap.to([friendLeftArmRef.current, leftArmRef.current], {
                rotation: -40,
                duration: 0.3,
                ease: "power1.inOut"
              });
            }
          });
      }, 1000);
    };

    const handleScroll = () => {
      const x = lastMousePos.current.x - 30;
      const y = lastMousePos.current.y - 30 + window.scrollY;
      
      gsap.set(penguinRef.current, { x, y });
      gsap.set(thoughtCloudRef.current, { 
        x: x - 45,
        y: y - 90
      });
      gsap.set(friendPenguinRef.current, {
        x: x + 30,
        y: y
      });
    };

    document.addEventListener("mousemove", cursor);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", cursor);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(moveTimeout);
    };
  }, [walking]);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Thought Cloud */}
      <div
        ref={thoughtCloudRef}
        className="absolute z-50"
        style={{
          pointerEvents: "none",
          width: "140px",
          height: "85px"
        }}
      >
        <svg width="140" height="85" viewBox="0 0 140 85">
          <defs>
            <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#f8f8ff", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="bubbleShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main thought bubble */}
          <path
            d="M15,42.5 
               Q15,15 42.5,15 
               L97.5,15 
               Q125,15 125,42.5 
               Q125,70 97.5,70 
               L42.5,70 
               Q15,70 15,42.5"
            fill="url(#bubbleGradient)"
            stroke="#6a1b9a"
            strokeWidth="1.5"
            filter="url(#bubbleShadow)"
          />

          {/* Thought circles - aligned from penguin's head */}
          <circle cx="70" cy="73" r="4" fill="white" stroke="#6a1b9a" strokeWidth="1.5" />
          <circle cx="70" cy="78" r="3" fill="white" stroke="#6a1b9a" strokeWidth="1.5" />
          <circle cx="70" cy="82" r="2" fill="white" stroke="#6a1b9a" strokeWidth="1.5" />
          <circle cx="70" cy="86" r="2" fill="white" stroke="#6a1b9a" strokeWidth="1.5" />
          
          {/* Text with refined styling */}
          <text 
            x="70" 
            y="30" 
            textAnchor="middle" 
            fill="#6a1b9a" 
            fontSize="10" 
            fontFamily="Arial, sans-serif" 
            fontWeight="500" 
            letterSpacing="0.2"
          >
            <tspan x="70" dy="0" fontWeight="600">Since you are here,</tspan>
            <tspan x="70" dy="11">why don't you contact</tspan>
            <tspan x="70" dy="11">Tejas and share</tspan>
            <tspan x="70" dy="12">your thoughts?</tspan>
          </text>
        </svg>
      </div>

      <svg
        ref={friendPenguinRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute pointer-events-none z-40"
        width="60"
        height="60"
      >
        <g fill="#9c27b0">
          <ellipse cx="50" cy="60" rx="20" ry="25" />
        </g>
        <g fill="white">
          <ellipse cx="50" cy="70" rx="15" ry="20" />
        </g>
        <circle cx="50" cy="30" r="10" fill="#9c27b0" />
        <circle cx="45" cy="27" r="3" fill="white" />
        <circle cx="55" cy="27" r="3" fill="white" />
        <circle cx="45" cy="27" r="1.5" fill="black" />
        <circle cx="55" cy="27" r="1.5" fill="black" />
        <polygon points="50,33 55,37 45,37" fill="orange" />
        <g fill="#9c27b0">
          <ellipse cx="35" cy="50" rx="6" ry="9" />
          <ellipse cx="65" cy="50" rx="6" ry="9" />
        </g>
        <g ref={friendLeftArmRef} fill="#9c27b0">
          <ellipse cx="30" cy="55" rx="6" ry="8" />
        </g>
        <g ref={friendRightArmRef} fill="#9c27b0">
          <ellipse cx="70" cy="55" rx="6" ry="8" />
        </g>
        <g fill="orange">
          <ellipse ref={friendLeftLegRef} cx="38" cy="85" rx="4" ry="2" />
          <ellipse ref={friendRightLegRef} cx="62" cy="85" rx="4" ry="2" />
        </g>
      </svg>

      {/* Penguin SVG */}
      <svg
        ref={penguinRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute pointer-events-none z-40"
        width="60"
        height="60"
      >
        {/* Penguin body parts remain the same */}
        <g fill="#6a1b9a">
          <ellipse cx="50" cy="60" rx="20" ry="25" />
        </g>
        <g fill="white">
          <ellipse cx="50" cy="70" rx="15" ry="20" />
        </g>
        <circle cx="50" cy="30" r="10" fill="#6a1b9a" />
        <circle cx="45" cy="27" r="3" fill="white" />
        <circle cx="55" cy="27" r="3" fill="white" />
        <circle cx="45" cy="27" r="1.5" fill="black" />
        <circle cx="55" cy="27" r="1.5" fill="black" />
        <polygon points="50,33 55,37 45,37" fill="orange" />
        <g fill="#6a1b9a">
          <ellipse cx="35" cy="50" rx="6" ry="9" />
          <ellipse cx="65" cy="50" rx="6" ry="9" />
        </g>
        <g ref={leftArmRef} fill="#6a1b9a">
          <ellipse cx="30" cy="55" rx="6" ry="8" />
        </g>
        <g ref={rightArmRef} fill="#6a1b9a">
          <ellipse cx="70" cy="55" rx="6" ry="8" />
        </g>
        <g fill="orange">
          <ellipse ref={leftLegRef} cx="38" cy="85" rx="4" ry="2" />
          <ellipse ref={rightLegRef} cx="62" cy="85" rx="4" ry="2" />
        </g>
      </svg>
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 text-gray-900 antialiased"
    >
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 space-y-24 md:space-y-32">
        {/* Banner Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12 mb-8">
          <Banner />
        </section>

        {/* Features Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12 mb-8">
          <Features />
        </section>

        {/* Projects Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12 mb-8">
          <Projects />
        </section>

        {/* Resume Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12 mb-8">
          <Resume />
        </section>

        {/* Testimonial Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12 mb-8">
          <Testimonial />
        </section>

        {/* Contact Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-lg p-2 md:p-12">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <FooterBottom />
        </div>
      </footer>
    </motion.div>
    </div>
  );
}

export default App;
