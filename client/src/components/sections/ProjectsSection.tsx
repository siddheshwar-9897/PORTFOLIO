import { resumeData } from "@/data/resume-data";

export default function ProjectsSection() {
  const { projects } = resumeData;
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projects</h2>
          <div className="section-heading-bar"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <i className={`${project.icon} text-6xl text-primary`}></i>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <span className="text-sm text-white bg-primary px-2 py-1 rounded">{project.date}</span>
                </div>
                
                <p className="text-neutral mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">{tech}</span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a href={project.demoLink} className="text-primary hover:text-blue-700 flex items-center">
                    <i className="fas fa-link mr-1"></i> View Project
                  </a>
                  <a href={project.githubLink} className="text-primary hover:text-blue-700 flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
