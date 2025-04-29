export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Siddheshwar Kadam</h3>
            <p className="text-gray-400">Python Developer | AI Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-sm">Made with <i className="fas fa-heart text-red-500"></i> and code</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
