import { resumeData } from "@/data/resume-data";

export default function ExperienceSection() {
  const { experience } = resumeData;
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience</h2>
          <div className="section-heading-bar"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {experience.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase text-white"></i>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">{exp.company}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-neutral mb-4 italic">{exp.title}</p>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
