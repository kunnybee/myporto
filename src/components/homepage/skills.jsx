"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  BarChart3,
  Brain,
  Settings,
  Code,
  TrendingUp,
} from "lucide-react"

const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Analysis & ML */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Data Analysis</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    R
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    SQL
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Pandas
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    NumPy
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Matplotlib
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Machine Learning</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Scikit-learn
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    PyTorch
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Keras
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    XGBoost
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Deep Learning
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* System Analysis */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">System Analysis</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    UML
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    BPMN
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Requirements Analysis
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Process Modeling
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    System Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Database & Tools */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <Database className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Database & Tools</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Tableau
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Power BI
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Excel
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Programming */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Programming</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    R
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Business Intelligence */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-maroon-100 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Intelligence</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Data Visualization
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    KPI Development
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Dashboard Design
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Statistical Analysis
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Reporting
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
};

export default Skills;