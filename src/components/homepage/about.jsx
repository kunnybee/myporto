"use client"



const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-maroon-600 mx-auto lg:mx-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate data professional who bridges the gap between complex data insights and practical
                business solutions. With expertise in machine learning and system analysis, I transform raw data into
                actionable strategies that drive organizational growth and efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My dual expertise in data science and system analysis allows me to not only uncover valuable insights
                from data but also design and optimize the systems that collect, process, and deliver that data
                effectively.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Bangkit Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;