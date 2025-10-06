import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

// ✅ Project Data
const projects = [
  {
    id: 1,
    title: 'Trendify-E-commerce',
    description:
      "Trendify is a modern e-commerce platform offering stylish collections for men, women, and kids. Featuring a sleek UI, dynamic product listings, and responsive design built with React, HTML, CSS, and Bootstrap — Trendify makes online shopping smooth and visually engaging.",
    image: '/projects/landingpage.jpeg',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Bootstrap',
      'React Router',
      'React Context API',
      'Responsive Design',
      'E-commerce',
      'Component-Based Architecture',
      'State Management',
      'Hooks',
      'Flexbox',
      'Grid'
    ],

    demoUrl: 'https://trendify-e-commerce-snowy.vercel.app/',
    githubUrl: 'https://github.com/SANJU-8273/Trendify-E-commerce',
    demoStatus: 'online',
  },
  {
    id: 2,
    title: 'Real Estate',
    description:
      'Find your dream home easily! Explore a variety of properties, connect with trusted agents, and make buying, selling, or renting simple and fast. Start your journey with us today!',
    image: '/projects/estate.jpeg',
     tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Bootstrap',
      'React Router',
      'React Context API',
      'Responsive Design',
      'E-commerce',
      'Component-Based Architecture',
      'State Management',
      'Hooks',
      'Flexbox',
      'Grid'
    ],

    demoUrl: 'https://shanti-estate.vercel.app/',
    githubUrl: 'https://github.com/SANJU-8273/Shanti-Estate',
    demoStatus: 'online',
  },
  {
    id: 3,
    title: 'Image Gallery',
    description:
      'Explore stunning visuals in our curated image gallery. Browse, admire, and get inspired by high-quality photos from around the world.',
    image: '/projects/image.jpg',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Bootstrap',
      'React Router',
      'React Context API',
      'Responsive Design',
      'E-commerce',
      'Component-Based Architecture',
      'State Management',
      'Hooks',
      'Flexbox',
      'Grid'
    ],
    demoStatus: 'offline',
  },

];

// ✅ Card component
const ProjectCard = ({ project }) => (
  <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
    <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-5 md:p-6 text-left flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-secondary text-secondary-foreground text-xs px-2 sm:px-3 py-1 rounded-full border border-border/50 transition-transform duration-200 hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 sm:gap-3 mt-auto">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-200"
        >
          <div
            className={`w-2 h-2 rounded-full ${project.demoStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
              }`}
          />
          Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-200"
        >
          <Github size={14} />
          Code
        </a>
      </div>
    </div>
  </div>
);

// ✅ Carousel component
const Carousel = ({ currentIndex, cardsPerPage }) => {
  const visibleProjects = projects.slice(currentIndex, currentIndex + cardsPerPage);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

// ✅ Main section
export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCardsPerPage(width < 640 ? 1 : width < 768 ? 2 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const currentPage = Math.floor(currentIndex / cardsPerPage);

  const paginate = (direction) => {
    const newPage = currentPage + direction;
    if (newPage < 0 || newPage >= totalPages) return;
    setCurrentIndex(newPage * cardsPerPage);
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex * cardsPerPage);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Projects</h2>
          <p className="text-foreground/80 text-base sm:text-lg">Some of my recent work</p>
        </div>

        {/* Carousel */}
        <Carousel currentIndex={currentIndex} cardsPerPage={cardsPerPage} />

        {/* Navigation */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
            className={`p-2 sm:p-3 rounded-full border transition-all duration-300 ${currentPage === 0
              ? 'border-border/50 text-muted-foreground cursor-not-allowed'
              : 'border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer'
              }`}
          >
            <ArrowLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full ${index === currentPage ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            disabled={currentPage >= totalPages - 1}
            className={`p-2 sm:p-3 rounded-full border transition-all duration-300 ${currentPage >= totalPages - 1
              ? 'border-border/50 text-muted-foreground cursor-not-allowed'
              : 'border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer'
              }`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
