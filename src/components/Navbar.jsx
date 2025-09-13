import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Adjust path to your utility

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const current = navItems.find((item) => {
        const section = document.getElementById(item.href.slice(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all",
        isScrolled
          ? "bg-background/80 backdrop-blur shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-primary transition-transform hover:scale-110">
          Sanju's Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium duration-300hover:text-foreground hover:border-primary transition-transform hover:scale-110",
                activeSection === item.name
                  ? "text-primary"
                  : "text-foreground/80"
              )}
              onClick={() => setActiveSection(item.name)}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Menu icon */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-muted transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Menu Content */}
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-background/95 backdrop-blur-md md:hidden flex flex-col"
    >
      {/* Close Button in Top-Right */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "text-lg font-medium transition-colors duration-300 hover:text-primary",
              activeSection === item.name
                ? "text-primary"
                : "text-foreground/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(item.name);
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </>
)}

    </nav>
  );
};
