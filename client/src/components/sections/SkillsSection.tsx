import { Progress } from "@/components/ui/progress";
import { resumeData } from "@/data/resume-data";
import ProgressBar from "@/components/ui/progress-bar";

export default function SkillsSection() {
  const { skills, softSkills } = resumeData;
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Interests</h2>
          <div className="section-heading-bar"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <i className="fas fa-code text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {skills.languages.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-primary mr-2`} style={{ fontSize: '20px' }}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Libraries */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <i className="fas fa-layer-group text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
            </div>
            <div className="space-y-4">
              {skills.frameworks.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-primary mr-2`} style={{ fontSize: '20px' }}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Databases & Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <i className="fas fa-database text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Database & Tools</h3>
            </div>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-primary mr-2`} style={{ fontSize: '20px' }}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-3 lg:col-span-3 mt-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <i className="fas fa-brain text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-md">
                  <i className={`fas ${skill.icon} text-primary mr-3`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
