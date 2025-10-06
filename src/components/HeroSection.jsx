import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
 const titles = [
  "Frontend Developer",
  "React.js Developer",
  "JavaScript Enthusiast",
  "Web Developer",
  "UI/UX Learner",
  "Problem Solver",
 
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  },);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 text-foreground my-5"
    >
      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Sanju Kishor
          </h1>
         <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground h-10 relative overflow-hidden">
        <span
           key={titles[currentTitle]}
            className="block absolute w-full animate-fadeSlide"
             >
             {titles[currentTitle]}
        </span>
        </h2>

          <p className="text-base text-foreground/70 leading-relaxed">
           I'm a full-stack developer passionate about turning ideas into real, usable products. From responsive frontends to scalable backends, I enjoy building tools I'd actually use—whether simple or ambitious.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="sanju-kishor-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg font-medium hover:bg-muted transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start mt-4">
            <a
              href="https://github.com/SANJU-8273"
              target="_blank"
              className="p-3 border rounded-lg text-foreground/70 hover:text-foreground hover:border-primary transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
           
            <a
              href="https://www.linkedin.com/in/sanjukishor"
              target="_blank"
              className="p-3 border rounded-lg text-foreground/70 hover:text-foreground hover:border-primary transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sanjukishor17@gmail.com"
              className="p-3 border rounded-lg text-foreground/70 hover:text-foreground hover:border-primary transition-transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+918273167118"
              className="p-3 border rounded-lg text-foreground/70 hover:text-foreground hover:border-primary transition-transform hover:scale-110" 
               >
                 <Phone className="h-5 w-5" />
               </a>
          </div>
        </div>

        {/* Right: Image */}
       <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg group relative transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
  {/* Image with hover zoom + rotate */}
  <img
    src="/sanju.jpg"
    alt="Sanju Kishor"
    className="w-full h-full object-cover transform transition duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
  />

  {/* Optional dark overlay on hover */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
</div>

      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection("experience")}
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center text-primary animate-bounce"
      >
        <span className="text-sm text-foreground/60 mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};
