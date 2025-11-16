import { Github, Twitter, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-50 via-purple-50 to-pink-50 text-black border-t border-white/8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold">Chingu</span>
            </div>
            <p className="text-gray-700 mb-6 max-w-md">
              Your friendly AI-powered finance buddy that makes expense tracking simple and effortless.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5 text-black" />
              </a>
              <a
                href="mailto:support@chingu.com"
                className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Product</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-700 text-sm">
            © 2024 Chingu. All rights reserved.
          </p>
          <p className="text-gray-700 text-sm mt-4 md:mt-0">
            Made with care for better financial habits
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer