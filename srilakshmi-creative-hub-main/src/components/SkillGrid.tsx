import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SkillGrid = () => {
  const skills: Skill[] = [
    // Row 1 - Programming Languages
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'C++', icon: '⚙️', category: 'Programming' },
    { name: 'R Language', icon: '📊', category: 'Programming' },
    { name: 'Java', icon: '☕', category: 'Programming' },
    { name: 'JavaScript', icon: '🟨', category: 'Programming' },
    { name: 'HTML5', icon: '🌐', category: 'Web' },
    
    // Row 2 - Web Development
    { name: 'CSS3', icon: '🎨', category: 'Web' },
    { name: 'Bootstrap', icon: '🅱️', category: 'Web' },
    { name: 'ReactJS', icon: '⚛️', category: 'Web' },
    { name: 'NodeJS', icon: '🟢', category: 'Web' },
    { name: 'Flask', icon: '🌶️', category: 'Web' },
    { name: 'Streamlit', icon: '🚀', category: 'Web' },
    
    // Row 3 - AI/ML Libraries
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
    { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
    { name: 'NumPy', icon: '🔢', category: 'AI/ML' },
    { name: 'Pandas', icon: '🐼', category: 'AI/ML' },
    { name: 'Matplotlib', icon: '📈', category: 'AI/ML' },
    { name: 'Arduino', icon: '🔌', category: 'Hardware' },
    
    // Row 4 - Databases
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Oracle', icon: '🔴', category: 'Database' },
    { name: 'Neo4j', icon: '🔗', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Firebase', icon: '🔥', category: 'Cloud' },
    
    // Row 5 - Tools & Visualization
    { name: 'PowerBI', icon: '📊', category: 'Visualization' },
    { name: 'Grafana', icon: '📋', category: 'Visualization' },
    { name: 'Docker', icon: '🐳', category: 'Tools' },
    { name: 'GitHub', icon: '📝', category: 'Tools' },
    { name: 'VSCode', icon: '💻', category: 'Tools' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <Card key={index} className="skill-item card-elegant text-center">
          <CardContent className="p-4">
            <div className="text-3xl mb-2">{skill.icon}</div>
            <h3 className="font-medium text-sm">{skill.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillGrid;