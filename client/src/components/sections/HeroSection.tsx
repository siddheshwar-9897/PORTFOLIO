import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-secondary">Hi, I'm </span>
                <span className="text-primary">Siddheshwar Kadam</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral mb-6">Python Developer | AI Enthusiast</p>
              <p className="text-neutral max-w-lg mb-8">
                I specialize in Python development with a focus on AI/ML and web applications. 
                My passion lies in creating efficient, scalable solutions using modern technologies.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button 
                  className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handleNavigation('contact')}
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handleNavigation('projects')}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Profile image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
