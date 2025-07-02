"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Database,
  BarChart3,
  Settings,
} from "lucide-react"

const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-maroon-100 to-maroon-200 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-maroon-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Churn Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature
                  engineering.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Scikit-learn
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    XGBoost
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-maroon-100 to-maroon-200 flex items-center justify-center">
                <Database className="h-16 w-16 text-maroon-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Interactive dashboard for real-time sales performance tracking with automated reporting and KPI
                  monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Tableau
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="border-2 border-gray-200 hover:border-maroon-300 transition-all hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-maroon-100 to-maroon-200 flex items-center justify-center">
                <Settings className="h-16 w-16 text-maroon-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Optimization System</h3>
                <p className="text-gray-600 mb-4">
                  System analysis and redesign project that improved operational efficiency by 35% through process
                  automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    BPMN
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    UML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Process Mining
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
};

export default Projects;