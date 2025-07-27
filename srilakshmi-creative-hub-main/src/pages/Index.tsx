import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import TypingAnimation from '@/components/TypingAnimation';
import ProjectCard from '@/components/ProjectCard';
import SkillGrid from '@/components/SkillGrid';
import ContactForm from '@/components/ContactForm';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Heart,
  Instagram
} from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';
import profileAbout from '@/assets/profile-about.jpg';
import projectAiDashboard from '@/assets/project-ai-dashboard.jpg';
import projectNlp from '@/assets/project-nlp.jpg';
import projectCvMedical from '@/assets/project-cv-medical.jpg';

const Index = () => {
  const typingTexts = [
    "I'm interested in Artificial Intelligence",
    "I'm passionate about Data Science", 
    "I love Web Development",
    "I explore Generative AI",
    "I build Machine Learning solutions",
    "I create innovative digital experiences"
  ];

  const projects = [
    {
      title: "AI Powered Alchemy",
      description: "Developed a pipeline using VAE and GAN for generating novel drug compounds. Implemented RNN and CNN for toxicity prediction.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Generative AI",
      technologies: ["Python", "Tensorflow", "Generative AI", "AutoDock Tools"],
      liveUrl: "https://drive.google.com/file/d/1Pt7yriyRl0ZUlyUI7cdaxVGN45KJCSo9/view?usp=sharing",
      codeUrl: "https://github.com/Srilakshmi2717/AI-Powered-Alchemy"
    },
    {
      title: "Dazzling Dance Studio",
      description: "Dazzling Dance Studio is a full-fledged, role-based Dance School Management System developed using the powerful front-end library React.js.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Development", 
      technologies: ["React", "Node.js", "JSON Server", "Bootstrap"],
      liveUrl: "https://drive.google.com/file/d/1cXh2n1Tii-S5lUMZXhcyoo6Mqrt2tV5P/view?usp=sharing",
      codeUrl: "https://github.com/Srilakshmi2717/Dazzling-Dance-Studio"
    },
    {
      title: "YOLO-Based Real-Time Vehicle Detection and Classification",
      description: "Real-time vehicle detection system using YOLO architecture for traffic monitoring applications.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Deep Learning",
      technologies: ["YOLO", "OpenCV", "Python", "Real-time Processing"],
      liveUrl: "https://github.com/Srilakshmi2717/YOLO-Based-Real-Time-Vehicle-Detection-and-Classification",
      codeUrl: "https://github.com/Srilakshmi2717/YOLO-Based-Real-Time-Vehicle-Detection-and-Classification"
    }
  ];

  const achievements = [
    {
      title: "Winner of SAGE IT's All-India Level Scholarship",
      category: "National Level Achievements",
      description: "Awarded 50,000 INR for insightful article titled 'Gen AI + Gen Z: Shaping the Future of Work.'"
    },
    {
      title: "IIT Bombay FOSSEE Mapathon 2023: National Level Champions",
      category: "National Level Achievements", 
      description: "Secured a spot among 14 national champions out of 750+ teams for creating compelling crop monitoring map."
    },
    {
      title: "Chairperson of Book Readers' Club MIT",
      category: "Organizational Positions",
      description: "Organizing reading sessions, book discussions, and literary events to foster a reading culture among students."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xl font-bold text-muted-foreground">Hi there, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text font-poppins">
                Srilakshmi H
              </h1>
            </div>
            
            <div className="text-xl md:text-2xl font-bold text-foreground min-h-[60px] flex items-center">
              <TypingAnimation texts={typingTexts} />
            </div>
            
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/srilakshmi-harikumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Srilakshmi2717" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://codolio.com/profile/Srilakshmi_Harikumar" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={profileHero}
                  alt="Srilakshmi H"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-hero rounded-full blur-xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="card-elegant w-80">
                <CardContent className="p-6">
                  <img 
                    src={profileAbout}
                    alt="Srilakshmi H"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Welcome to my portfolio website! I am a curious and driven AI & Data Science student with hands-on experience in Python, Machine Learning, and problem-solving. 
                Passionate about applying datadriven solutions to real-world challenges while continuously growing in a fast-paced, tech-focused environment. 
                This website showcases my projects, achievements, and articles. 
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                With expertise in Python, R, JavaScript, and various AI frameworks, I enjoy building 
                innovative solutions that make a real impact. I'm always eager to learn new technologies 
                and contribute to meaningful projects. Feel free to explore!
              </p>
              <a href="/resume.pdf" download>
                <Button variant="gradient" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Technologies</h2>
          <SkillGrid />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Bachelor of Technology</CardTitle>
                <p className="text-accent font-medium">2022 - 2026</p>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Artificial Intelligence and Data Science</h3>
                <p className="text-muted-foreground mb-2">Madras Institute of Technology</p>
                <Badge variant="secondary">CGPA: 8.54/10</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Higher Secondary</CardTitle>
                <p className="text-accent font-medium">2020 - 2022</p>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">State Board</h3>
                <p className="text-muted-foreground mb-2">Sai Matriculation Higher Secondary School</p>
                <Badge variant="secondary">Percentage: 97.67%</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Secondary School</CardTitle>
                <p className="text-accent font-medium">2019 - 2020</p>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">State Board</h3>
                <p className="text-muted-foreground mb-2">Sai Matriculation Higher Secondary School</p>
                <Badge variant="secondary">Percentage: 98.00%</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="gradient">
              <Link to="/projects">
                <Briefcase className="w-5 h-5 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="co-curriculars" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Achievements & Co-Curriculars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {achievement.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="gradient">
              <Link to="/achievements">
                <Award className="w-5 h-5 mr-2" />
                View All Achievements
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Education', 'Projects', 'Achievements', 'Contact'].map((link) => (
                  <button 
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(' ', '-'));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>srilaksh04@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 95662 08249</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/srilakshmi-harikumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Srilakshmi2717" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/_a_hundred_hues_by_sri_/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="flex items-center justify-center text-primary-foreground/80">
              Designed with <Heart className="w-4 h-4 mx-2 text-red-400" /> by Srilakshmi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
