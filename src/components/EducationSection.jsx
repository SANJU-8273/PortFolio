import { Calendar, GraduationCap, School } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Education
        </h2>
        <p className="text-foreground/80 text-center mb-16">
          Academic background and qualifications
        </p>

        {/* Mobile: Single column, Desktop: Two columns */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-12 items-start">
          {/* B.Tech Degree */}
          <div
            className="p-6 md:p-8 w-full"
            style={{
              '--desktop-x': '-50px',
              '--desktop-y': '0px',
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 self-center sm:self-start">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                  B.Tech CSE (Web Development)
                </h3>
                <p className="text-primary font-medium mb-2 text-sm sm:text-base">
                  Dr. A.P.J. Abdul Kalam university  </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm sm:text-base">2022 - 2026</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  PURSUING
                </p>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="p-6 md:p-8 w-full">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 self-center sm:self-start">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                  UP Board - Class XII
                </h3>
                <p className="text-primary font-medium mb-2 text-sm sm:text-base">
                  New Sun Flower Inter college - AGRA
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm sm:text-base">2022</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Grade: 75.6%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
