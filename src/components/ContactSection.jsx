import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Your Name",
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);

      toast({
        title: "Error sending message",
        description:
          "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 text-foreground overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 transition-opacity duration-1000 animate-fade-in-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            Let's work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8 text-left animate-fade-in-left">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you!
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4">
              {[
                {
                  href: "https://github.com/SANJU-8273",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/sanjukishor",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:sanjukishor17@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
                {
                  href: "tel:+918273167118",
                  icon: Phone,
                  label: "Phone",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center justify-center p-3 border border-border rounded-lg text-foreground/70 hover:text-foreground hover:border-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 w-full mt-4 transform hover:scale-105 active:scale-95 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
