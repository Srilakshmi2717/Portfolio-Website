import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import { ArrowLeft, Filter } from 'lucide-react';
import projectAiDashboard from '@/assets/project-ai-dashboard.jpg';
import projectNlp from '@/assets/project-nlp.jpg';
import projectCvMedical from '@/assets/project-cv-medical.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const filterCategories = [
    'All Projects',
    'Web Development', 
    'Generative AI',
    'Deep Learning',
    'Research Publications'
  ];

  const allProjects = [
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
      technologies: ["React", "Node.js", "JSON-Server", "Bootstrap"],
      liveUrl: "https://drive.google.com/file/d/1cXh2n1Tii-S5lUMZXhcyoo6Mqrt2tV5P/view?usp=sharing",
      codeUrl: "https://github.com/Srilakshmi2717/Dazzling-Dance-Studio"
    },
    {
      title: "Satellite Image Chronology Prediction for Sequence Modeling",
      description: "Leverages ConvLSTM, U-Net, and CAEs to predict the chronological sequence of satellite images.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Research Publications",
      technologies: ["Python", "PyTorch", "Computer Vision", "Research"],
      liveUrl: "https://ieeexplore.ieee.org/document/11011657/",
      codeUrl: "https://github.com/Srilakshmi2717/Satellite-Image-Chronology-Prediction-for-Sequence-Modeling"
    },
    {
      title: "Invest IQ - The Smart Market Mentor for Stocks",
      description: "Developed a web-based, Al-powered platform that, Educates users on stock market fundamentals, Promotes financial and Al literacy.",
      image: "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Web Development",
      technologies: ["Streamlit", "Y-finance", "Machine Learning", "Simulation"],
      liveUrl: "https://invest-iq.streamlit.app/",
      codeUrl: "https://github.com/Srilakshmi2717/Invest-IQ"
    },
    {
      title: "Graph Enhanced Search",
      description: "Designed a Neo4j graph database with Cypher queries and BERT embeddings to model relationships and retrieve contextually relevant insights efficiently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Deep Learning",
      technologies: ["PyTorch", "Neo4j", "Python", "Graph Neural Networks"],
      liveUrl: "https://github.com/Srilakshmi2717/Graph-Enhanced-Contextual-Search",
      codeUrl: "https://github.com/Srilakshmi2717/Graph-Enhanced-Contextual-Search"
    },
    {
      title: "A Dual Model Approach - Applied AI",
      description: "A Dual Model Approach Integrating GAN-Based Segmentation with Transformer Models for Automated Generation of Clinical Reports from Chest X-rays.",
      image: projectCvMedical,
      category: "Generative AI",
      technologies: ["Segmentation", "U-Net", "GANs", "BioMedLM"],
      liveUrl: "https://github.com/Srilakshmi2717/GAN-Transformer-Approach-for-Chest-X-ray-Report-Generation",
      codeUrl: "https://github.com/Srilakshmi2717/GAN-Transformer-Approach-for-Chest-X-ray-Report-Generation"
    },
    {
      title: "Semantic Segmentation of Aerial Satellite Imagery",
      description: "Implemented U-Net, DeepLab v3+, and Attention U-Net to segment satellite images into land, water, and vegetation.",
      image: "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Deep Learning",
      technologies: ["PyTorch", "OpenCV", "Python", "Computer Vision"],
      liveUrl: "https://github.com/Srilakshmi2717/Summer-Internship-Project",
      codeUrl: "https://github.com/Srilakshmi2717/Summer-Internship-Project"
    },
    {
      title: "YOLO-Based Real-Time Vehicle Detection and Classification",
      description: "Real-time vehicle detection system using YOLO architecture for traffic monitoring and autonomous vehicle applications.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Deep Learning",
      technologies: ["YOLO", "OpenCV", "Python", "Real-time Processing"],
      liveUrl: "https://github.com/Srilakshmi2717/YOLO-Based-Real-Time-Vehicle-Detection-and-Classification",
      codeUrl: "https://github.com/Srilakshmi2717/YOLO-Based-Real-Time-Vehicle-Detection-and-Classification"
    },
    {
      title: "Deepfake Video Detection",
      description: "Advanced AI system for detecting deepfake videos using state-of-the-art neural networks and facial analysis techniques.",
      image: projectNlp,
      category: "Generative AI",
      technologies: ["PyTorch", "Computer Vision", "Deep Learning", "Python"],
      liveUrl: "https://demo.example.com",
      codeUrl: "https://github.com/srilakshmi"
    },
    {
      title: "ML Model Playground Docker",
      description: "Containerized platform for machine learning model experimentation and deployment with Docker orchestration.",
      image: "https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Web Development",
      technologies: ["Docker", "Python", "Streamlit", "Machine Learning"],
      liveUrl: "https://demo.example.com",
      codeUrl: "https://github.com/srilakshmi"
    },
    {
      title: "Optimized AI-Based Real-time Fault Detection in Printed Circuit Boards",
      description: "Research on AI-powered quality control system for PCB manufacturing with real-time fault detection and classification.",
      image: projectAiDashboard,
      category: "Research Publications",
      technologies: ["AI", "Computer Vision", "Research", "Quality Control"],
      liveUrl: "https://research.example.com",
      codeUrl: "https://github.com/srilakshmi"
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground">
              Explore my collection of projects across different technologies and domains
            </p>
          </div>
          
          <div className="w-32"> {/* Spacer for centering */}
          </div>
        </div>

        {/* Filter Buttons */}
        <Card className="card-elegant p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-medium">Filter Projects:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="animate-fade-in">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try selecting a different filter category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;