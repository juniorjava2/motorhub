import React from 'react'
import { Bell, LayoutGrid, ClipboardList, Zap, DollarSign, Settings, LogOut, Calendar, Clock, FileText, Link2, Github } from 'lucide-react'
import Image from 'next/image'

export default function TaskDetails() {
  return (
    <div className="bg-[#131619] text-white min-h-screen flex">
     
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Task Details</h1>
            <p className="text-gray-400">View and manage task information</p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-400" size={20} />
            <Image src="/img/ivan.jpg" width={32} height={32} className="w-8 h-8 rounded-full" alt="User avatar" />
          </div>
        </div>

        <div className="bg-[#1C1F23] rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Image src="/img/ivan.jpg" width={40} height={40} className="w-10 h-10 rounded-full mr-3" alt="Ivan Cliff avatar" />
            <div>
              <h2 className="text-lg font-semibold">Ivan Cliff</h2>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
            <span className="ml-auto text-sm text-gray-400">1 minute ago</span>
          </div>

          <h3 className="text-xl font-bold mb-2">Implement New User Authentication System</h3>
          <p className="text-gray-300 mb-6">
            Develop a robust user authentication system using OAuth 2.0 and JWT tokens. This system should support
            multiple authentication providers and ensure secure user sessions across our platform. The company
            branding guidelines must be followed for the login interface, and the user flow should be intuitive. Implement
            necessary security measures, including rate limiting and multi-factor authentication. The solution should feature a new
            branding and messaging that aligns with the company's vision and values.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Responsive design that works on all devices</li>
                <li>Implement OAuth 2.0 and JWT authentication strategy</li>
                <li>Improve the overall user experience</li>
                <li>Ensure the website is accessible and SEO-friendly</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Deadline</span>
                <span className="text-white font-semibold">30/07/2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Complexity</span>
                <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm font-semibold">Medium</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Priority</span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-white font-semibold">High</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Reward</span>
                <span className="text-white font-semibold">USD 250,000</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Milestones</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Set up OAuth 2.0 provider</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Implement JWT token generation and validation</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Create user registration and login UI/UX endpoints</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Enable multi-factor authentication</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Test and Deploy</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Attachments</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FileText className="mr-2" size={16} />
                  <span>Brand Guidelines.pdf</span>
                </li>
                <li className="flex items-center">
                  <FileText className="mr-2" size={16} />
                  <span>Competitor Analysis.xlsx</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Reference</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Link2 className="mr-2" size={16} />
                  <span>Company Website Redesign Brief</span>
                </li>
                <li className="flex items-center">
                  <Link2 className="mr-2" size={16} />
                  <span>User Research Findings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">GitHub Repository</h4>
            <div className="bg-[#252A30] rounded-lg p-4 flex items-center">
              <Github className="mr-3" size={24} />
              <div>
                <p className="font-semibold">a/workspace</p>
                <p className="text-sm text-gray-400">Branch: feature/user-auth</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Claim Task</button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center">
              <Image src="/placeholder.svg?height=20&width=20" width={20} height={20} className="w-5 h-5 mr-2" alt="Collaboration icon" />
              Start Collaboration
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}