export const ExperienceSection = () => {
  const experiences = [
    {
  title: 'Web Development Intern',
  company: 'ShoeRiser PVT. LTD',
  type: 'On-site',
  location: 'Agra, UP',
  duration: 'June 2025 - July 2025 • 2 mos',
  logo: '/transvolt.png', // Replace with actual ShoeRiser logo if available
  description: [
    'Built and maintained responsive user interfaces using HTML, CSS, and JavaScript, ensuring optimal performance across devices and browsers.',
    'Integrated RESTful APIs into the frontend, streamlining product catalog rendering and enhancing the customer shopping experience.',
   
    'Collaborated with UI/UX designers to improve user flows and implement dynamic features using React.js and Tailwind CSS.',
    
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'REST API',
    'Mongoose',
    'Next.js'
  ],
}
,
  ];

  return (
    <section id="experience" className="py-30 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 py-2 transition-all duration-500">
            Experience
          </h2>
          <p className="text-base text-foreground/80 mb-24 transition-all duration-500">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row group transition-all duration-700 ease-in-out"
              >
                {/* Timeline Dot or Logo */}
                <div className="absolute left-2 w-8 h-8 bg-background rounded-full border-2 border-gray-800 dark:border-gray-200 shadow-lg z-10 flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-12 flex-1 flex flex-col md:flex-row">
                  {/* Left: Title */}
                  <div className="flex-shrink-0 w-full md:w-72 md:pr-12 mb-4 md:mb-0 transform transition-transform duration-500 group-hover:-translate-x-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Right: Details */}
                  <div className="flex-1 transform transition-transform duration-500 group-hover:translate-x-1">
                    <h4 className="text-lg font-semibold text-primary mb-1 text-left">
                      {exp.company}
                    </h4>
                    <div className="mb-2 text-left">
                      <span className="text-sm text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4 text-left">
                      {exp.type} • {exp.location}
                    </div>

                    {/* Description */}
                    <div className="text-muted-foreground text-sm mb-3 leading-relaxed text-left max-w-2xl">
                      {exp.description.map((bullet, bulletIndex) => (
                        <p key={bulletIndex} className="mb-2">
                          • {bullet}
                        </p>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-secondary text-secondary-foreground text-xs px-2 sm:px-3 py-1 rounded-full border border-border/50 transition-transform duration-200 hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
