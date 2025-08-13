'use client';

import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, X, ExternalLink, Github, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import StaggeredAnimation from '@/components/ui/staggered-animation';

const GradientCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-px rounded-xl bg-gradient-to-b from-slate-700 to-transparent transition-all duration-300 hover:bg-slate-600 ${className}`}>
    <div className="rounded-[11px] h-full bg-slate-900">
      {children}
    </div>
  </div>
);


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
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
      animate(window.scrollY, top, {
        type: "spring",
        stiffness: 200,
        damping: 30,
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        }
      });
    }
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
    scrollToSection('projects');
  }
  
  const projects = [
    {
      title: "Emergency Helper: Edge-Optimized AI for Environmental Emergencies",
      period: "2024",
      problem: "First responders need instant, accurate information on-the-go, but running large AI models on edge devices is a major challenge.",
      description: "Generated 2000+ synthetic QA pairs using LLaMA 3.1 APIs, focusing on disaster and pollution scenarios.",
      achievements: [
        "Fine-tuned TinyLLaMA-1.1B-Chat for edge deployment, reducing model size 400x without performance loss.",
        "Deployed real-time inference system on Hugging Face Spaces using Gradio interface.",
        "Achieved 85% accuracy on environmental emergency response queries."
      ],
      technologies: ["LLaMA 3.1", "TinyLLaMA", "Hugging Face", "Gradio", "Python", "API Integration"]
    },
    {
      title: "AI Research Assistant with RAG Architecture",
      period: "2024",
      problem: "Researchers spend countless hours manually sifting through academic papers. An intelligent assistant is needed to accelerate literature review.",
      description: "Built an intelligent research tool using LangChain and RAG with a FAISS vector store for semantic search.",
      achievements: [
        "Integrated Gemini 2.5 for semantic search and contextual Q&A, achieving 85% relevance on research queries.",
        "Developed a full-stack application with a Flask backend and React frontend for real-time paper analysis.",
        "Implemented vector embeddings for efficient document retrieval and knowledge base management."
      ],
      technologies: ["Python", "LangChain", "FAISS", "Google Gemini AI", "Flask", "React", "Vector Embeddings"]
    },
    {
      title: "Real-Time Sign Language Translation System",
      period: "2025",
      problem: "Communication barriers for the deaf and hard-of-hearing can be broken down with accessible, real-time translation technology.",
      description: "Developed a high-accuracy (92%) gesture recognition pipeline using MediaPipe for landmark extraction.",
      achievements: [
        "Engineered a real-time video inference system (30+ FPS) with sub-100ms latency using OpenCV and Flask.",
        "Built and trained an LSTM-based classification model for sign language gesture recognition.",
        "Created a responsive Bootstrap UI with a REST API, supporting multi-tab browser sessions without degradation."
      ],
      technologies: ["PyTorch", "MediaPipe", "OpenCV", "Flask", "Bootstrap"]
    },
    {
      title: "Production MLOps Pipeline - Flight Price Prediction",
      period: "2024",
      problem: "Deploying machine learning models into production is often a manual, error-prone process that lacks monitoring and automated retraining.",
      description: "Architected an end-to-end MLOps workflow with MLflow tracking, data-drift-triggered retraining, and a model registry.",
      achievements: [
        "Deployed containerized ensemble models (Random Forest + XGBoost) via a FastAPI REST API on Kubernetes.",
        "Achieved <2-minute inference time and 99.9% uptime with automated scaling.",
        "Implemented a CI/CD pipeline with GitHub Actions, reducing deployment time by 70%."
      ],
      technologies: ["Python", "MLflow", "Docker", "Kubernetes", "FastAPI", "XGBoost", "Scikit-Learn"]
    }
  ];

  const skills = {
    "Core Programming": ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    "Machine Learning & Deep Learning": ["PyTorch", "Scikit-Learn", "TensorFlow", "Transformers", "OpenCV", "MediaPipe", "NLTK", "spaCy"],
    "MLOps & Deployment": ["Docker", "Kubernetes", "FastAPI", "Flask", "REST APIs", "MLflow", "CI/CD"],
    "LLM-Powered Applications": ["LangChain", "LangGraph", "CrewAI", "Hugging Face", "LLaMA", "Google Gemini AI"],
    "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Development Tools": ["Git", "PyCharm", "VS Code", "Jupyter Notebooks", "AWS", "Linux"]
  };


  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      {/* --- Enhanced Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400 hover:from-cyan-300 hover:to-slate-300 transition-all duration-300 cursor-pointer"
            >
              Shahroz Butt
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>
             <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <Button
                    variant="outline"
                    className="hidden md:inline-flex bg-cyan-500/10 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
                >
                    Contact Me
                </Button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
              <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.2),rgba(255,255,255,0))]"></div>
              <div className="absolute bottom-[-20%] right-[20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.15),rgba(255,255,255,0))]"></div>
          </div>

          <div className="container mx-auto max-w-6xl text-center z-10">
            <StaggeredAnimation>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400 leading-tight">
                  Muhammad Shahroz Butt
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-medium">
                  AI & Machine Learning Developer
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                  I build intelligent, full-stack AI solutions that translate complex data into real-world impact. From optimizing computer vision pipelines for real-time performance to deploying fine-tuned LLMs that solve specific business problems, I specialize in bridging the gap between raw data and production-ready applications.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    onClick={() => scrollToSection('projects')} 
                    size="lg" 
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
                  >
                    View My Work
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => scrollToSection('contact')} 
                    size="lg" 
                    className="border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32 px-6 bg-slate-900/70">
          <div className="container mx-auto max-w-4xl">
            <StaggeredAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                  About Me
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  My educational background and journey in AI and Machine Learning.
                </p>
              </div>
              <GradientCard>
                <Card className="bg-transparent border-none">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <GraduationCap className="h-8 w-8 text-cyan-400" />
                      <CardTitle className="text-2xl text-slate-100">Education</CardTitle>
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
                        <div className="flex items-center gap-2 text-sm text-slate-500 mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>2021 - 2025</span>
                        </div>
                      </div>
                      <Separator className="bg-slate-700" />
                      <div className="space-y-2">
                        <p className="font-medium text-slate-300">Related Coursework:</p>
                        <p className="text-slate-400">
                          OOP, DSA, Machine Learning, Artificial Intelligence, Statistics, Mathematics
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        <span className="font-medium text-slate-300">CGPA: 3.20/4.00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GradientCard>
            </StaggeredAnimation>
          </div>
        </section>

        <section id="experience" className="py-24 md:py-32 px-6">
          <div className="container mx-auto max-w-4xl">
             <StaggeredAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                  Experience
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  My professional journey in Machine Learning and AI.
                </p>
              </div>
              <GradientCard>
                <Card className="bg-transparent border-none">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Briefcase className="h-8 w-8 text-cyan-400" />
                      <CardTitle className="text-2xl text-slate-100">Machine Learning Intern</CardTitle>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 pt-2">
                      <span>Tricode LLP</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Faisalabad, Pakistan</span>
                       <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>March 2025 - April 2025</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* --- Updated Experience Bullets --- */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300">Engineered an automated ML pipeline to streamline a key business prediction task, reducing manual effort and creating a repeatable, data-driven workflow.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300">Improved model performance by 5% through systematic hyper-parameter tuning, leading to more reliable and accurate business predictions.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300">Containerized the final service with Docker and deployed it to AWS EC2, ensuring high availability and 99.9% uptime.</p>
                        </li>
                    </ul>
                  </CardContent>
                </Card>
              </GradientCard>
            </StaggeredAnimation>
          </div>
        </section>

        <section id="skills" className="py-24 md:py-32 px-6 bg-slate-900/70">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                My technical toolkit for building intelligent applications. Click a skill to see it in action in my projects below.
              </p>
            </div>
            {selectedSkill && (
                <div className="text-center mb-8">
                    <Badge
                        variant="outline"
                        className="text-lg py-2 px-4 border-cyan-400/50 bg-cyan-500/10 text-cyan-300"
                    >
                        {selectedSkill}
                        <button onClick={() => setSelectedSkill(null)} className="ml-2 p-1 rounded-full hover:bg-cyan-500/20">
                            <X className="h-4 w-4" />
                        </button>
                    </Badge>
                </div>
            )}
            <div className="space-y-10">
              {Object.entries(skills).map(([category, skillList]) => (
                <StaggeredAnimation key={category}>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-slate-200 mb-6">{category}</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {skillList.map((skill) => (
                            <Button
                              key={skill}
                              variant="outline"
                              onClick={() => handleSkillSelect(skill)}
                              className={`border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 ${selectedSkill === skill ? '!bg-cyan-500 !text-slate-900 !border-cyan-500' : ''}`}
                            >
                              {skill}
                            </Button>
                          ))}
                        </div>
                    </div>
                </StaggeredAnimation>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                Projects
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                A selection of my work in AI and Machine Learning.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                // --- Logic to de-emphasize non-matching projects ---
                const isDimmed = selectedSkill && !project.technologies.includes(selectedSkill);
                return (
                  <motion.div
                    key={index}
                    animate={{ 
                        opacity: isDimmed ? 0.4 : 1,
                        scale: isDimmed ? 0.95 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <GradientCard className="h-full">
                      <Card className="h-full flex flex-col bg-transparent border-none group">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <CardTitle className="text-xl leading-tight text-slate-100 group-hover:text-cyan-300 transition-colors">{project.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300 flex-shrink-0">{project.period}</Badge>
                          </div>
                          <CardDescription className="text-base text-cyan-400/80 pt-4 font-semibold">
                            {project.problem}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium text-slate-300 mb-2">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {project.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-400">
                                    <ChevronDown className="h-3 w-3 mt-1 text-cyan-400 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-300 mb-2">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="secondary" 
                                    className={`text-xs bg-slate-800 border border-slate-700 text-slate-300 transition-colors ${selectedSkill === tech ? '!bg-cyan-400/10 !border-cyan-400/30 !text-cyan-300' : ''}`}
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </GradientCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 px-6 bg-slate-900/70">
          <div className="container mx-auto max-w-3xl">
            <StaggeredAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-slate-400">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
              </div>
              <GradientCard>
                <Card className="bg-transparent border-none">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        { icon: Mail, text: "buttshahroz192@gmail.com", href: "mailto:buttshahroz192@gmail.com" },
                        { icon: Phone, text: "+92309-8012093", href: "tel:+923098012093" },
                        { icon: MapPin, text: "Faisalabad, Pakistan" }
                      ].map((item, index) => (
                        <a 
                          key={index} 
                          href={item.href} 
                          className={`flex items-center gap-4 group ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <item.icon className="h-6 w-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          <span className="text-lg text-slate-300 group-hover:text-cyan-400 transition-colors">{item.text}</span>
                        </a>
                      ))}
                      <Separator className="bg-slate-700" />
                      <div className="flex gap-4 pt-2">
                        <a href="https://github.com/Shahroz192" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full sm:w-auto flex-1 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 hover:text-white transition-all duration-300 transform hover:scale-105">
                            <Github className="h-5 w-5 mr-2" />
                            GitHub
                          </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/shahroz-butt-69a813211/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full sm:w-auto flex-1 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 hover:text-white transition-all duration-300 transform hover:scale-105">
                            <ExternalLink className="h-5 w-5 mr-2" />
                            LinkedIn
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GradientCard>
            </StaggeredAnimation>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-500 text-sm">
            Designed and built by Muhammad Shahroz Butt. © 2025 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
