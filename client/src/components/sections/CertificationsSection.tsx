import { resumeData } from "@/data/resume-data";

export default function CertificationsSection() {
  const { certifications } = resumeData;
  
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications & Achievements</h2>
          <div className="section-heading-bar"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className={`${cert.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold">{cert.name}</h3>
              </div>
              <p className="text-neutral">{cert.description}</p>
              <div className="mt-4">
                {cert.date && <span className="text-sm text-neutral">Issued: {cert.date}</span>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-blue-700 mt-2 block">
                    <span>{cert.linkText}</span>
                    <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
