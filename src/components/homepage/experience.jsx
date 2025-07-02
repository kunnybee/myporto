"use client"

import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Calendar,
} from "lucide-react"

const Experience = () => {
    return (
            <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Users className="mr-3 h-6 w-6 text-maroon-600" />
                Experience
              </h3>

              <div className="space-y-8">
                <div className="border-l-4 border-maroon-600 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Senior Data Analyst</h4>
                  <p className="text-maroon-600 mb-2">TechCorp Solutions</p>
                  <p className="text-gray-600">
                    Led data-driven decision making initiatives, developed ML models for business optimization, and
                    managed cross-functional analytics projects.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2021 - 2022</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">System Analyst</h4>
                  <p className="text-maroon-600 mb-2">Digital Innovations Inc.</p>
                  <p className="text-gray-600">
                    Analyzed business requirements, designed system architectures, and optimized existing processes for
                    improved efficiency and performance.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2020 - 2021</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Junior Data Analyst</h4>
                  <p className="text-maroon-600 mb-2">StartupHub Analytics</p>
                  <p className="text-gray-600">
                    Performed statistical analysis, created data visualizations, and supported senior analysts in
                    machine learning model development.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-maroon-600" />
                Education & Certifications
              </h3>

              <div className="space-y-8">
                <div className="border-l-4 border-maroon-600 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Bangkit Academy</h4>
                  <p className="text-maroon-600 mb-2">Machine Learning Path - Graduate</p>
                  <p className="text-gray-600">
                    Intensive program focusing on machine learning, cloud computing, and mobile development with
                    hands-on projects and industry mentorship.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2020</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h4>
                  <p className="text-maroon-600 mb-2">University of Technology</p>
                  <p className="text-gray-600">
                    Specialized in Data Science and Information Systems with focus on statistical analysis and system
                    design methodologies.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        AWS
                      </Badge>
                      <span className="text-sm text-gray-600">Cloud Practitioner</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        Google
                      </Badge>
                      <span className="text-sm text-gray-600">Data Analytics Professional</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-2">
                        Microsoft
                      </Badge>
                      <span className="text-sm text-gray-600">Azure Data Scientist Associate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Experience;