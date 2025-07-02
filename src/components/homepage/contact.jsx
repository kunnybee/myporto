"use client"

import { Button } from "@/components/ui/button"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react"

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-maroon-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on your next data-driven project? Let's discuss how I can help transform your data
              into actionable insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 resize-none transition-all"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-maroon-900 hover:bg-gray-100 font-semibold py-3 text-lg transition-all">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information & Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white font-medium">alex.johnson@email.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-maroon-900 bg-transparent transition-all group"
                  >
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-maroon-900 bg-transparent transition-all group"
                  >
                    <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-maroon-900 bg-transparent transition-all group"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-maroon-900 bg-transparent transition-all group"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Resume
                  </Button>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-2">Ready to Start?</h4>
                <p className="text-gray-300 text-sm">
                  Whether you need data analysis, machine learning solutions, or system optimization, I'm here to help
                  turn your ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;