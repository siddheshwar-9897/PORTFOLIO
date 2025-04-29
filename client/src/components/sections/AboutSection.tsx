import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

export default function AboutSection() {
  const { education, personalInfo } = resumeData;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <div className="section-heading-bar"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Education</h3>
            
            {/* Education Timeline */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                  <div className="mb-1 flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <span className="text-sm text-neutral">{edu.period}</span>
                  </div>
                  <p className="text-neutral mb-1">{edu.degree}</p>
                  <p className="font-medium">{edu.percentage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Personal Info</h3>
              <p className="text-neutral mb-8">
                {personalInfo.bio}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary w-8"></i>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary w-8"></i>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-globe text-primary w-8"></i>
                  <span>{personalInfo.languages}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005885] text-white py-2 px-4 rounded-md transition-colors"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#333] hover:bg-[#222] text-white py-2 px-4 rounded-md transition-colors"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <Button className="flex items-center gap-2 bg-[#4f46e5] hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
                <i className="fas fa-download"></i>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
