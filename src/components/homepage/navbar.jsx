"use client"



const Navbar = (activeSection) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-maroon-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Certificates", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-maroon-600 ${
                    activeSection === item.toLowerCase() ? "text-maroon-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;