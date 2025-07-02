"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Database,
  BarChart3,
  Brain,
  TrendingUp,
  Award,
} from "lucide-react"

const Certificates = () => {
    return (
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 transition-colors">
                  <Award className="h-8 w-8 text-maroon-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bangkit Academy Graduate</h3>
                <p className="text-maroon-600 font-medium mb-2">Google, Tokopedia, Gojek, Traveloka</p>
                <p className="text-sm text-gray-600 mb-4">Machine Learning Path - Distinction</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-maroon-50"
                  onClick={() => {
                    /* Add modal logic */
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 2 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AWS Cloud Practitioner</h3>
                <p className="text-blue-600 font-medium mb-2">Amazon Web Services</p>
                <p className="text-sm text-gray-600 mb-4">Cloud Computing Fundamentals</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-blue-50"
                  onClick={() => {
                    /* Add modal logic */
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 3 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Data Analytics</h3>
                <p className="text-green-600 font-medium mb-2">Google Career Certificates</p>
                <p className="text-sm text-gray-600 mb-4">Professional Certificate Program</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-green-50"
                  onClick={() => {
                    /* Add modal logic */
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 4 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Azure Data Scientist</h3>
                <p className="text-purple-600 font-medium mb-2">Microsoft</p>
                <p className="text-sm text-gray-600 mb-4">Associate Level Certification</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-purple-50"
                  onClick={() => {
                    /* Add modal logic */
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 5 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tableau Desktop Specialist</h3>
                <p className="text-orange-600 font-medium mb-2">Tableau</p>
                <p className="text-sm text-gray-600 mb-4">Data Visualization Specialist</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent hover:bg-orange-50"
                  onClick={() => {
                    /* Add modal logic */
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Card */}
            <Card className="border-2 border-maroon-200 bg-maroon-50 hover:border-maroon-400 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-maroon-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-300 transition-colors">
                  <Award className="h-8 w-8 text-maroon-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Top 10% Graduate</h3>
                <p className="text-maroon-700 font-medium mb-2">Bangkit Academy 2023</p>
                <p className="text-sm text-gray-600 mb-4">Outstanding Performance Recognition</p>
                <Badge className="bg-maroon-600 text-white">Achievement</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
};

export default Certificates;