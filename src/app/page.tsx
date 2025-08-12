'use client';

import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ExternalLink, Github, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import StaggeredAnimation from '@/components/ui/staggered-animation';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop;
      animate(document.documentElement.scrollTop || document.body.scrollTop, top, {
        type: "spring",
        stiffness: 200,
        damping: 25,
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        }
      });
    }
  };

  const projects = [
    {
      title: "Emergency Helper: Edge-Optimized AI for Environmental Emergencies",
      period: "2024",
      description: "Generated 2000+ synthetic QA pairs using LLaMA 3.1 APIs, focusing on disaster and pollution scenarios",
      achievements: [
        "Fine-tuned TinyLLaMA-1.1B-Chat for edge deployment, reducing model size 400x without performance loss",
        "Deployed real-time inference system on Hugging Face Spaces using Gradio interface",
        "Achieved 85% accuracy on environmental emergency response queries"
      ],
      technologies: ["LLaMA 3.1", "TinyLLaMA", "Hugging Face", "Gradio", "Python", "API Integration"]
    },
    {
      title: "AI Research Assistant with RAG Architecture",
      period: "2024",
      description: "Built intelligent research tool using LangChain and RAG with FAISS vector store for semantic search",
      achievements: [
        "Integrated Gemini 2.5 for semantic search and contextual Q&A, achieving 85% relevance on research queries",
        "Developed full-stack application with Flask backend and React frontend for real-time paper analysis",
        "Implemented vector embeddings for efficient document retrieval and knowledge base management"
      ],
      technologies: ["Python", "LangChain", "FAISS", "Google Gemini AI", "Flask", "React", "Vector Embeddings"]
    },
    {
      title: "Real-Time Sign Language Translation System",
      period: "2025",
      description: "Developed high-accuracy (92%) gesture recognition pipeline using MediaPipe for landmark extraction",
      achievements: [
        "Engineered real-time video inference system (30+ FPS) with sub-100ms latency using OpenCV and Flask",
        "Built LSTM-based classification model for sign language gesture recognition",
        "Created responsive Bootstrap UI with REST API, supporting multi-tab browser sessions without degradation"
      ],
      technologies: ["PyTorch", "MediaPipe", "OpenCV", "Flask", "Bootstrap"]
    },
    {
      title: "Production MLOps Pipeline - Flight Price Prediction",
      period: "2024",
      description: "Architected end-to-end MLOps workflow with MLflow tracking, data-drift-triggered retraining, and model registry",
      achievements: [
        "Deployed containerized ensemble models (Random Forest + XGBoost) via FastAPI REST API on Kubernetes",
        "Achieved <2-minute inference time and 99.9% uptime with automated scaling",
        "Implemented CI/CD pipeline with GitHub Actions, reducing deployment time by 70%"
      ],
      technologies: ["Python", "MLflow", "Docker", "Kubernetes", "FastAPI", "XGBoost"]
    }
  ];

  const skills = {
    "Core Programming": ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    "Machine Learning": ["PyTorch", "Scikit-Learn", "TensorFlow", "OpenCV", "MediaPipe", "NLTK", "spaCy"],
    "Deep Learning": ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "Transfer Learning"],
    "MLOps & Deployment": ["Docker", "Kubernetes", "FastAPI", "Flask", "REST APIs", "MLflow", "CI/CD"],
    "LLM & AI Engineering": ["LangChain", "LangGraph", "CrewAI", "Hugging Face", "LLaMA", "Gemini AI"],
    "Data Engineering": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "FAISS", "Vector Databases"],
    "Development Tools": ["Git", "PyCharm", "VS Code", "Jupyter Notebooks", "AWS", "Linux"]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-800/90 backdrop-blur-md shadow-lg border-b border-slate-700' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
              Shahroz Butt
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-200 capitalize hover:scale-105 ${
                    activeSection === section
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
                  Muhammad Shahroz Butt
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 font-medium">
                  AI & Machine Learning Developer
                </p>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                AI and Machine Learning developer with a B.S. in Information Technology. My expertise is in developing full-stack AI solutions, from engineering real-time computer vision pipelines with PyTorch to deploying fine-tuned Large Language Models in production environments.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  size="lg" 
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Code decoration */}
            <div className="relative max-w-4xl mx-auto group">
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm text-slate-300 border border-slate-700 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                  <div className="text-slate-500 ml-2 group-hover:text-cyan-400 transition-colors">portfolio.js</div>
                </div>
                <div className="space-y-2">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = <span className="text-green-400">{'{'}</span></div>
                  <div className="ml-4"><span className="text-slate-400">name:</span> <span className="text-yellow-400">'Muhammad Shahroz Butt'</span>,</div>
                  <div className="ml-4"><span className="text-slate-400">role:</span> <span className="text-yellow-400">'AI/ML Engineer'</span>,</div>
                  <div className="ml-4"><span className="text-slate-400">expertise:</span> <span className="text-purple-400">[</span></div>
                  <div className="ml-8"><span className="text-yellow-400">'Computer Vision'</span>,</div>
                  <div className="ml-8"><span className="text-yellow-400">'LLM Deployment'</span>,</div>
                  <div className="ml-8"><span className="text-yellow-400">'MLOps'</span></div>
                  <div className="ml-4"><span className="text-purple-400">],</span></div>
                  <div className="ml-4"><span className="text-slate-400">status:</span> <span className="text-cyan-400">'Available for opportunities'</span></div>
                  <div><span className="text-green-400">{'}'}</span>;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My educational background and journey in AI and Machine Learning
            </p>
          </div>
          <Card className="max-w-4xl mx-auto bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-slate-100">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      University of Agriculture Faisalabad, Pakistan
                    </h3>
                    <p className="text-slate-400">B.S. in Information Technology</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>2021-2025</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-300">Related Coursework:</p>
                  <p className="text-slate-400">
                    OOP, DSA, Machine Learning, Artificial Intelligence, Statistics, Mathematics
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium text-slate-300">CGPA: 3.20/4.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Experience
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My professional journey in Machine Learning and AI
            </p>
          </div>
          <Card className="max-w-4xl mx-auto bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-slate-100">Machine Learning Intern</CardTitle>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Tricode LLP</span>
                <span>•</span>
                <span>Faisalabad, Pakistan</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>March 2025 - April 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-300 group-hover:text-cyan-300 transition-colors">
                    Developed and automated an end-to-end ML pipeline with Scikit-learn and Flask for a key business prediction task, covering data preprocessing, model training, and evaluation.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-300 group-hover:text-cyan-300 transition-colors">
                    Tuned hyper-parameters via Grid, Random, & Bayesian search, boosting model F1 by 5%.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-300 group-hover:text-cyan-300 transition-colors">
                    Containerized service with Docker and deployed on AWS EC2 with 99.9% uptime.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Projects
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Showcase of my AI and Machine Learning projects
            </p>
          </div>
          <StaggeredAnimation className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg leading-tight text-slate-100 group-hover:text-cyan-300 transition-colors">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">{project.period}</Badge>
                  </div>
                  <CardDescription className="text-base text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-medium text-slate-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-cyan-300 transition-colors">
                            <ChevronDown className="h-3 w-3 mt-1 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700 text-slate-300 hover:bg-cyan-600 hover:text-slate-900 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My technical skills and areas of expertise
            </p>
          </div>
          <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-sm border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-400">
              Let's connect and discuss opportunities
            </p>
          </div>
          <Card className="max-w-2xl mx-auto bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <CardHeader>
              <CardTitle className="text-slate-100">Contact Information</CardTitle>
              <CardDescription className="text-slate-400">
                Feel free to reach out for collaborations or opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <a href="mailto:buttshahroz192@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    buttshahroz192@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">+92309-8012093</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <MapPin className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Faisalabad, Pakistan</span>
                </div>
                <Separator />
                <div className="flex gap-4">
                  <a href="https://github.com/Shahroz192" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/shahroz-butt-69a813211/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-slate-900 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © 2025 Muhammad Shahroz Butt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}