/**
 * Highlights the active section in the navigation menu based on scroll position
 */
export function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionElement = section as HTMLElement;
    const sectionHeight = sectionElement.offsetHeight;
    const sectionTop = sectionElement.offsetTop - 100;
    const sectionId = sectionElement.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('text-primary');
        }
      });
    }
  });
}

/**
 * Scrolls to a section with smooth animation
 * @param id The ID of the element to scroll to
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Offset for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}
