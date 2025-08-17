import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  MessageCircle,
  Send
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I can answer questions about this portfolio. Try asking about Youssef\'s experience, projects, or skills!' }
  ])
  const [chatInput, setChatInput] = useState('')

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple chatbot logic
  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userMessage = chatInput.trim()
    setChatMessages(prev => [...prev, { type: 'user', message: userMessage }])
    setChatInput('')

    // Simple keyword-based responses
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't have specific information about that. Please ask about Youssef's experience, projects, education, or skills."

      const lowerInput = userMessage.toLowerCase()
      
      if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
        botResponse = "Youssef has experience as a Network Engineer Intern at TMI and CNI, a Cloud Engineer Intern at INETUM, and a Cyber Security Intern at Keystone. He's worked on data center transformation, virtual infrastructure deployment, and web development for security assessment."
      } else if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('created')) {
        botResponse = "Youssef's main project is 'Volontariato', a full-stack web application for purposeful travel, which won first place at the NSBE Hackathon. He also developed a dynamic website for assessing corporate security levels during his Cyber Security internship."
      } else if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('programming')) {
        botResponse = "Youssef's technical skills include: Programming Languages (Python, C, C++, HTML, CSS, Javascript, Verilog, MATLAB, SQL), Tools & Platforms (MongoDB, Microsoft Azure, Cisco Packet Tracer, Windows Server), and Cybersecurity (Vulnerability assessment, OWASP, NIST, SOC 2). He also has strong professional skills in Public Speaking, Adaptability, Problem-Solving, Leadership, Stakeholder Communication, and Project Management."
      } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('university') || lowerInput.includes('degree')) {
        botResponse = "Youssef is pursuing a Bachelor of Applied Science in Computer Engineering + PEY Co-op at the University of Toronto (expected May 2028), with intended minors in Artificial Intelligence and Engineering Business."
      } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
        botResponse = "You can reach Youssef at youssef.bayoudh@mail.utoronto.ca or connect with him on LinkedIn (linkedin.com/in/youssef-bayoudh) and GitHub (github.com/Engtun)."
      }

      setChatMessages(prev => [...prev, { type: 'bot', message: botResponse }])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600">Youssef Bayoudh</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'skills', label: 'Skills', icon: Award },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-1">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'about', label: 'About', icon: User },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'projects', label: 'Projects', icon: FolderOpen },
                  { id: 'skills', label: 'Skills', icon: Award },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Youssef Bayoudh
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Computer Engineering Student | AI & Cybersecurity Enthusiast | Cloud & Network Engineering
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about AI, Cloud Computing & Cybersecurity. My journey has been shaped by hands-on experiences in network engineering, cloud computing, and ethical AI research. I thrive on solving complex problems with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <User size={64} className="text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Hello! I'm Youssef Bayoudh</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a Computer Engineering student at the University of Toronto with a deep interest in AI, cloud infrastructure, and cybersecurity. My journey has been shaped by hands-on experiences in network engineering, cloud computing, and ethical AI research.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm fascinated by the potential of AI to make intelligent, ethical decisions, and I'm actively researching how Spiking Neural Networks can incorporate ethical frameworks like utilitarianism and deontology for morally guided decision-making. My goal is to contribute to the development of AI systems that enhance safety, security, and fairness in real-world applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beyond tech, you can find me competing in hackathons, playing soccer, or engaging in community initiatives. I believe in the power of technology to drive positive change and am always open to collaborating on impactful projects.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-600">Bachelor of Applied Science in Computer Engineering + PEY Co-op</p>
                    <p className="text-gray-500 text-sm">University of Toronto, expected May 2028</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Toronto, ON, Canada</p>
                    <p className="text-gray-500 text-sm">Open to Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Experience</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Network Engineer Intern",
                  company: "TMI",
                  period: "Aug 2024 - Aug 2024",
                  description: "Analyzed data center transformation projects, identifying potential improvement areas in data management strategies to enhance operational efficiency. Collaborated with cross-functional teams to study the integration of CRM applications, supporting a productive corporate culture by fostering better workflow understanding. Participated in project bid reviews and attended client meetings, gaining insight into network technologies and project management essentials.",
                  achievements: [
                    "Identified improvement areas in data management strategies",
                    "Gained insight into network technologies and project management"
                  ]
                },
                {
                  title: "Cloud Engineer Intern",
                  company: "INETUM",
                  period: "Jul 2024 - Jul 2024",
                  description: "Designed and implemented a virtual infrastructure using VirtualBox, deploying Windows Server 2019 and Windows 10. Configured Active Directory Domain Services (AD DS) and DHCP, improving network efficiency and facilitating seamless client connectivity. Integrated Windows 10 clients with Windows Server 2019 using Group Policy Objects (GPOs) for centralized security administration and robust system management.",
                  achievements: [
                    "Designed and implemented virtual infrastructure with VirtualBox",
                    "Configured AD DS and DHCP for network efficiency",
                    "Integrated Windows 10 clients with Windows Server 2019 using GPOs"
                  ]
                },
                {
                  title: "Cyber Security Intern",
                  company: "Keystone",
                  period: "Jun 2024 - Jul 2024",
                  description: "Developed a dynamic website using HTML, CSS, and JavaScript to assess corporate security levels, leading to more informed ransomware defense strategies. Analyzed security measures and generated detailed reports with security scores, enhancing the company’s ability to identify vulnerabilities. Conducted in-depth research on ransomware defense mechanisms, increasing expertise in cryptography.",
                  achievements: [
                    "Developed dynamic website to assess corporate security levels",
                    "Generated detailed security reports with security scores",
                    "Researched ransomware defense mechanisms and cryptography"
                  ]
                },
                {
                  title: "Network Engineer Intern",
                  company: "Centre National de l’Informatique (CNI)",
                  period: "Jun 2024 - Jun 2024",
                  description: "Configured network elements using Cisco Packet Tracer, implementing VLANs, RIP, and OSPF to improve network segmentation and routing efficiency. Monitored and troubleshot network issues, optimizing performance through effective resolution of network outages. Acquired practical skills in IP addressing, routing protocols, and network documentation, streamlining troubleshooting processes.",
                  achievements: [
                    "Configured network elements using Cisco Packet Tracer",
                    "Monitored and troubleshot network issues",
                    "Acquired practical skills in IP addressing and routing protocols"
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Volontariato Web Application",
                  description: "Led a team of four in creating 'Volontariato,' a full-stack web application designed to enable purposeful travel, empowering users with opportunities for social impact. Delegated and organized front-end and back-end tasks, ensuring smooth project progression and integration.",
                  technologies: ["MongoDB", "Web Application", "Full-Stack"],
                  outcome: "Received MongoDB and UofT Challenge first-place awards"
                },
                {
                  title: "Corporate Security Assessment Website",
                  description: "Developed a dynamic website using HTML, CSS, and JavaScript to assess corporate security levels against ransomware attacks. Analyzed security measures and generated detailed reports with security scores, enhancing the company’s ability to identify vulnerabilities.",
                  technologies: ["HTML", "CSS", "JavaScript", "Cybersecurity"],
                  outcome: "Improved ransomware defense strategies"
                },
                {
                  title: "Virtual Infrastructure Deployment",
                  description: "Designed and implemented a virtual infrastructure using VirtualBox, deploying Windows Server 2019 and Windows 10. Configured Active Directory Domain Services (AD DS) and DHCP, improving network efficiency and facilitating seamless client connectivity.",
                  technologies: ["VirtualBox", "Windows Server 2019", "Windows 10", "Active Directory", "DHCP"],
                  outcome: "Improved network efficiency and client connectivity"
                },
                {
                  title: "Network Configuration & Troubleshooting",
                  description: "Configured network elements using Cisco Packet Tracer, implementing VLANs, RIP, and OSPF to improve network segmentation and routing efficiency. Monitored and troubleshot network issues, optimizing performance through effective resolution of network outages.",
                  technologies: ["Cisco Packet Tracer", "VLANs", "RIP", "OSPF", "Network Troubleshooting"],
                  outcome: "Streamlined troubleshooting processes"
                },
                {
                  title: "Ethical AI Research",
                  description: "Actively researching how Spiking Neural Networks can incorporate ethical frameworks like utilitarianism and deontology for morally guided decision-making. My goal is to contribute to the development of AI systems that enhance safety, security, and fairness in real-world applications.",
                  technologies: ["Spiking Neural Networks (SNNs)", "AI Ethics", "BrainCog", "Theory of Mind (ToM) modeling"],
                  outcome: "Contributing to development of ethical AI systems"
                },
                {
                  title: "Cloud & IT Infrastructure Management",
                  description: "Gained hands-on experience in cloud infrastructure, particularly with Azure, enhancing knowledge of cloud services and integration. Developed and managed Organizational Units (OUs), security groups, and user accounts within Active Directory, optimizing organizational management.",
                  technologies: ["Microsoft Azure", "Active Directory", "Windows Server", "Cloud Computing"],
                  outcome: "Optimized organizational management and cloud integration"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                        <FolderOpen size={48} className="text-blue-600" />
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-sm font-medium text-green-600">
                          {project.outcome}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Programming Languages",
                  skills: ["Python", "C", "C++", "HTML", "CSS", "Javascript", "Verilog", "MATLAB", "SQL"]
                },
                {
                  category: "Tools & Platforms",
                  skills: ["MongoDB", "Microsoft Azure", "Cisco Packet Tracer", "Windows Server"]
                },
                {
                  category: "Cybersecurity",
                  skills: ["Vulnerability Assessment", "OWASP", "NIST", "SOC 2"]
                },
                {
                  category: "AI & Research",
                  skills: ["Spiking Neural Networks (SNNs)", "BrainCog", "AI Ethics", "Theory of Mind (ToM) modeling"]
                }
              ].map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-center text-blue-600">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {skillGroup.skills.map((skill, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-gray-700">{skill}</span>
                            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${85 + Math.random() * 15}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full bg-blue-600 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Professional Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Public Speaking", "Adaptability", "Problem-Solving", "Leadership",
                  "Stakeholder Communication", "Project Management"
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="px-4 py-2 text-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <span className="text-gray-700">youssef.bayoudh@mail.utoronto.ca</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="text-blue-600" size={20} />
                    <span className="text-gray-700">github.com/Engtun</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-blue-600" size={20} />
                    <span className="text-gray-700">linkedin.com/in/youssef-bayoudh</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Twitter className="text-blue-600" size={20} />
                    <span className="text-gray-700">@janedoe</span>
                  </div> */}
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input placeholder="Project Collaboration" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project or idea..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Youssef Bayoudh. All rights reserved. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col"
            >
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        msg.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about Youssef's experience, projects, or skills..."
                    className="flex-1"
                  />
                  <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>
    </div>
  )
}

export default App
 App

