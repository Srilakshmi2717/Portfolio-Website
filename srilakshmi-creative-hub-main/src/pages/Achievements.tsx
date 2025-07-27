import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Filter, Award, Trophy, FileText, Users, Star } from 'lucide-react';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('All Achievements');
  
  const filterCategories = [
    'All Achievements',
    'National Level Achievements',
    'College Level Achievements', 
    'General Achievements',
    'Organizational Positions',
    'Certifications'
  ];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'National Level Achievements':
        return <Trophy className="w-8 h-8 text-yellow-500" />;
      case 'College Level Achievements':
        return <Award className="w-8 h-8 text-blue-500" />;
      case 'Certifications':
        return <FileText className="w-8 h-8 text-green-500" />;
      case 'Organizational Positions':
        return <Users className="w-8 h-8 text-purple-500" />;
      default:
        return <Star className="w-8 h-8 text-primary" />;
    }
  };

  const allAchievements = [
    {
      title: "Winner of SAGE IT's All-India Level Scholarship",
      category: "National Level Achievements",
      description: "Awarded 50,000 INR for insightful article titled 'Gen AI + Gen Z: Shaping the Future of Work'",
      date: "January 2025",
      organization: "SAGE IT",
      details: "Recognized for outstanding contribution to understanding the intersection of AI and future workforce dynamics",
      certificateLink: "https://sageitinc.com/blog/india-scholarship-winning-article-jan-2025"
    },
    {
      title: "IIT Bombay FOSSEE Mapathon 2023: National Level Champions",
      category: "National Level Achievements", 
      description: "Secured a spot among 14 national champions out of 750+ teams for creating compelling crop monitoring map",
      date: "2023",
      organization: "IIT Bombay FOSSEE",
      details: "Created an innovative crop monitoring map of Ariyalur district using advanced geospatial analysis",
      certificateLink: "https://drive.google.com/file/d/1pJMmveUOl1dNbTPguKL2FM3TS2pblvP9/view"
    },
    {
      title: "Winner of ASPIRIA'23, a Talent Hunt",
      category: "College Level Achievements",
      description: "Led a team of 4 and emerged victorious among 300+ teams in national-level talent search competition",
      date: "2023",
      organization: "College",
      details: "Awarded cash prize of 6000 INR for exceptional leadership and innovative problem-solving skills",
      certificateLink: "/aspiria.jpeg"
    },
    {
      title: "Top 7 Finalist - PERSOFEST'24",
      category: "College Level Achievements",
      description: "Chosen among the top 7 out of 360+ participants in the Even Semester Talent Search Event",
      date: "2024",
      organization: "College",
      details: "Awarded cash prize of 2000 INR for outstanding performance in competitive talent showcase",
      certificateLink: "/persofest.jpeg"
    },
    {
      title: "Best Speaker Award - D for Debate 2022",
      category: "College Level Achievements",
      description: "Recognized as Best Speaker in an intra-college debate with 350+ participants",
      date: "2022",
      organization: "College",
      details: "Awarded cash prize of 1000 INR for showcasing strong communication skills in tech discourse",
      certificateLink: "/d_for_d.jpeg"
    },
    {
      title: "Coding Achievements",
      category: "General Achievements",
      description: "Solved 200+ problems across coding platforms with a contest rating of 1550+",
      date: "Ongoing",
      organization: "Various Platforms",
      details: "Consistent problem-solving across multiple competitive programming platforms demonstrating algorithmic expertise",
      certificateLink: "https://codolio.com/profile/Srilakshmi_Harikumar"
    },
    {
      title: "Chairperson of Book Readers' Club MIT",
      category: "Organizational Positions",
      description: "Leading the Book Readers' Club at MIT, promoting literary culture and intellectual discussions",
      date: "Current",
      organization: "MIT",
      details: "Organizing reading sessions, book discussions, and literary events to foster a reading culture among students",
      certificateLink: "brc.jpeg"
    },
    {
      title: "NSS Senior Volunteer",
      category: "Organizational Positions",
      description: "Serving as a Senior Volunteer in National Service Scheme, contributing to community service and facilitated over 14,000 INR to orphanages across Chennai",
      date: "Current",
      organization: "NSS",
      details: "Actively participating in social service activities and community development programs"
    },
    {
      title: "Director General of MIT India MUN 2024",
      category: "Organizational Positions",
      description: "Served as Director General of the first inter-collegiate Model United Nations of Anna University",
      date: "2024",
      organization: "MIT India",
      details: "Successfully organized and led the inaugural inter-collegiate MUN conference, managing delegates from multiple institutions",
      certificateLink: "https://www.linkedin.com/posts/srilakshmi-harikumar_mun2024-mit-annauniversity-activity-7213093563151081472-qE9p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_mz8gBWcJPWwkG5NuT41vuzsJYMOs94HA"
    },
    {
      title: "Google Analytics Certification",
      category: "Certifications",
      description: "Successfully completed Google Analytics certification program",
      date: "Completed",
      organization: "Google",
      details: "Gained expertise in web analytics, data interpretation, and digital marketing insights",
      certificateLink: "https://skillshop.credential.net/c875fe39-f7ed-4d75-98eb-e90460ce4dfe#acc.eObYZCXy"
    },
    {
      title: "Journey to Cloud: Envisioning your Solution",
      category: "Certifications",
      description: "Completed IBM's comprehensive cloud computing certification program",
      date: "Completed",
      organization: "IBM",
      details: "Learned cloud architecture, solution design, and enterprise cloud deployment strategies",
      certificateLink: "https://www.credly.com/badges/4ffbf1c0-5fa9-4c96-a532-d46c6ef647bf"
    },
    {
      title: "AWS Academy Graduate: AWS Academy Cloud Foundations",
      category: "Certifications",
      description: "Successfully graduated from AWS Academy Cloud Foundations program",
      date: "Completed",
      organization: "AWS",
      details: "Mastered fundamental AWS cloud concepts, services, and best practices for cloud computing",
      certificateLink: "https://www.credly.com/go/KqlREVMy"
    },
    {
      title: "Fundamentals of Deep Learning",
      category: "Certifications",
      description: "Completed comprehensive deep learning workshop conducted by NVIDIA",
      date: "Completed",
      organization: "NVIDIA",
      details: "Gained hands-on experience with neural networks, GPU computing, and deep learning frameworks",
      certificateLink: "https://www.linkedin.com/posts/srilakshmi-harikumar_deeplearning-ai-jetsonnano-activity-7213088752800268288-sH_s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_mz8gBWcJPWwkG5NuT41vuzsJYMOs94HA"
    },
    {
      title: "Getting started with AI on Jetson Nano",
      category: "Certifications",
      description: "Completed NVIDIA workshop on AI development using Jetson Nano platform",
      date: "Completed",
      organization: "NVIDIA", 
      details: "Learned edge AI development, computer vision applications, and embedded AI deployment",
      certificateLink: "https://www.linkedin.com/posts/srilakshmi-harikumar_deeplearning-ai-jetsonnano-activity-7213088752800268288-sH_s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_mz8gBWcJPWwkG5NuT41vuzsJYMOs94HA"
    },
    {
      title: "Cloud Computing Workshop",
      category: "Certifications",
      description: "Attended comprehensive cloud computing workshop at Shaastra 2023, IIT Madras",
      date: "2023",
      organization: "IIT Madras",
      details: "Participated in hands-on sessions covering cloud infrastructure, scalability, and modern cloud technologies",
      certificateLink: "cc.pdf"
    },
    {
      title: "Applied Data Science and Machine Learning",
      category: "Certifications",
      description: "Completed Google's workshop on practical applications of data science and machine learning",
      date: "Completed",
      organization: "Google",
      details: "Gained practical experience in data analysis, ML model development, and real-world data science applications",
      certificateLink: "aai.png"
    }
  ];

  const filteredAchievements = activeFilter === 'All Achievements' 
    ? allAchievements 
    : allAchievements.filter(achievement => achievement.category === activeFilter);

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
            <h1 className="text-4xl font-bold gradient-text mb-4">Achievements & Recognition</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my academic and professional accomplishments
            </p>
          </div>
          
          <div className="w-32"> {/* Spacer for centering */}
          </div>
        </div>

        {/* Filter Buttons */}
        <Card className="card-elegant p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-medium">Filter Achievements:</span>
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

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <Card key={index} className="card-elegant animate-fade-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {getIconForCategory(achievement.category)}
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{achievement.category}</Badge>
                      <Badge variant="secondary">{achievement.date}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Details:</strong> {achievement.details}
                  </p>
                </div>
                {achievement.certificateLink && (
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="mt-4">
                      View Certificate
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredAchievements.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold mb-2">No achievements found</h3>
            <p className="text-muted-foreground">
              Try selecting a different filter category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;