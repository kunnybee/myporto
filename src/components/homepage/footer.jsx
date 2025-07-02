"use client"

const Footer = () => {
    return (
            <footer className="bg-maroon-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-300 mb-4">"Let's build something impactful together."</p>
            <div className="w-16 h-0.5 bg-maroon-600 mx-auto mb-6"></div>
            <p className="text-gray-400">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;