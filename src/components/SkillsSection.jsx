import { useEffect, useRef, useState } from 'react';

const skillsData = {
  Languages: [
    
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    
    
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  
  Frontend: [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Redux',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      name: 'Context API',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'React Router',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg',
    },
    
    {
      name: 'React Hooks',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'React Hook Form',
      logo: 'https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png',
    },
  ],
  Styling: [
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'CSS Modules',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Styled Components',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg',
    },
   
  ],
  Backend: [
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    
    {
      name: 'Mongoose',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
    },
    {
      name: 'REST API',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    },
  ],
  
  Database: [
   
   
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
   
    {
      name: 'Supabase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    },
  ],
  'Tools & IDEs': [
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    
    
   
    {
      name: 'Vite',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    },
    {
      name: 'Visual Studio Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
   
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    },
    
  ],

};

// Reusable Tab Component
const Tab = ({ children, setPosition, isActive, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={`relative z-10 block cursor-pointer px-2 py-1.5 text-xs font-medium transition-colors duration-200 sm:px-3 sm:py-2 md:px-4 md:py-3 md:text-sm  ${
        isActive ? 'text-black' : 'text-foreground hover:text-foreground/80'
      }`}
    >
      {children}
    </li>
  );
};

// Cursor (now static since motion is removed)
const Cursor = ({ position }) => {
  return (
    <li
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
        transition: 'all 0.3s ease',
      }}
      className="absolute z-0 h-6 rounded-lg bg-primary sm:h-8 sm:rounded-xl md:h-11 "
    />
  );
};

const SlideTabs = ({ tabs, activeTab, setActiveTab }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeElement = document.querySelector(`[data-tab-index="${activeIndex}"]`);
    if (activeElement) {
      const { width } = activeElement.getBoundingClientRect();
      setPosition({
        left: activeElement.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className="overflow-x-auto scrollbar-hide ">
      <ul
        onMouseLeave={() => {
          const activeIndex = tabs.indexOf(activeTab);
          const activeElement = document.querySelector(`[data-tab-index="${activeIndex}"]`);
          if (activeElement) {
            const { width } = activeElement.getBoundingClientRect();
            setPosition({
              left: activeElement.offsetLeft,
              width,
              opacity: 1,
            });
          }
        }}
        className="relative mx-auto flex w-max min-w-full sm:w-fit rounded-xl sm:rounded-2xl border-2 border-border bg-card p-1 shadow-sm "
      >
        {tabs.map((tab, index) => (
          <div key={tab} data-tab-index={index}>
            <Tab
              setPosition={setPosition}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          </div>
        ))}
        <Cursor position={position} />
      </ul>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('Languages');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const tabs = Object.keys(skillsData);

  useEffect(() => {
    const preloadImages = async () => {
      const allLogos = Object.values(skillsData)
        .flat()
        .map((skill) => skill.logo);
      const uniqueLogos = [...new Set(allLogos)];

      const imagePromises = uniqueLogos.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-30 px-4 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl text-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 py-2">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8 max-w-md sm:max-w-none">
            My expertise across various technologies and tools
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <SlideTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Skills Content */}
          <div className="bg-muted/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] relative">
            {!imagesLoaded ? (
              <div className="flex items-center justify-center py-8 absolute inset-0">
                <div className="animate-spin rounded-2xl h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-muted-foreground text-xs sm:text-sm">
                  Loading skills...
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {skillsData[activeTab].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background border rounded-md font-medium text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4 hover:bg-accent transition-all duration-300 flex items-center gap-1.5 sm:gap-2 group cursor-pointer  hover:scale-110 "
                  >
                    <img
                      alt={`${skill.name} logo`}
                      className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                      src={skill.logo}
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-foreground whitespace-nowrap text-xs  sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
