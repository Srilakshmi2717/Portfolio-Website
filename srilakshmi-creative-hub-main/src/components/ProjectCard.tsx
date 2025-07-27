import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  category, 
  technologies, 
  liveUrl, 
  codeUrl 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="card-elegant overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white p-4">
            <p className="text-sm">{description}</p>
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white/20 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <span className="text-sm text-accent font-medium">{category}</span>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-2">
          {liveUrl && (
            <Button 
              size="sm" 
              variant="gradient"
              className="flex-1"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          )}
          {codeUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open(codeUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;