"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Database,
  BarChart3,
  Brain,
  Settings,
  Code,
  TrendingUp,
  Users,
  Award,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/homepage/navbar"
import About from "@/components/homepage/about"
import Certificates from "@/components/homepage/certificates"
import Contact from "@/components/homepage/contact"
import Experience from "@/components/homepage/experience"
import Footer from "@/components/homepage/footer"
import Hero from "@/components/homepage/hero"
import Projects from "@/components/homepage/projects"
import Skills from "@/components/homepage/skills"

export const Route = createLazyFileRoute("/")({
  component: () => (
      <Index />
  ),
});

function Index() {
 const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-red-500 text-white p-4 text-center">
  Tailwind CSS is Working
</div>
      {/* Navigation */}
      <Navbar activeSection={activeSection}/>

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Certificates & Achievements Section */}
      <Certificates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Index;