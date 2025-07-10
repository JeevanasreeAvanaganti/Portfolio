
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Database, Brain, BarChart3, Zap, Star, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Image Classification ML Pipeline',
      description: 'End-to-end machine learning pipeline for automated image classification with real-time processing capabilities.',
      longDescription: 'Built a comprehensive ML solution processing thousands of images daily with 95% accuracy. Features automated data preprocessing, model training with TensorFlow, and deployment pipelines on Azure cloud infrastructure.',
      icon: Brain,
      technologies: ['Python', 'TensorFlow', 'Azure ML', 'Docker', 'CI/CD'],
      color: 'from-slate-500 to-blue-600',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-slate-600',
      featured: true
    },
    {
      title: 'Healthcare Analytics Dashboard',
      description: 'Interactive Power BI dashboard providing real-time insights into healthcare metrics and population health trends.',
      longDescription: 'Comprehensive analytics solution processing data from multiple healthcare systems. Features predictive analytics, automated alerts, and executive-level reporting with advanced drill-down capabilities.',
      icon: BarChart3,
      technologies: ['Power BI', 'SQL Server', 'Azure', 'DAX', 'Power Query'],
      color: 'from-blue-500 to-slate-600',
      hoverColor: 'group-hover:from-slate-500 group-hover:to-blue-600',
      featured: true
    },
    {
      title: 'Automated Workflow System',
      description: 'Power Automate solution that streamlined document processing workflows, reducing manual effort by 80%.',
      longDescription: 'Enterprise automation platform handling document approval processes, notifications, and data validation. Integrated with SharePoint, Teams, and legacy systems for seamless workflow management.',
      icon: Zap,
      technologies: ['Power Automate', 'Power Apps', 'SharePoint', 'Teams API'],
      color: 'from-gray-500 to-blue-500',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-gray-600',
      featured: false
    },
    {
      title: 'Data Pipeline Architecture',
      description: 'Scalable ETL pipeline processing large volumes of healthcare data with automated quality checks.',
      longDescription: 'Robust data infrastructure handling 10M+ records daily. Features automated data validation, error handling, and performance monitoring with comprehensive alerting systems.',
      icon: Database,
      technologies: ['Azure Data Factory', 'SQL', 'Python', 'Power BI', 'Monitoring'],
      color: 'from-slate-600 to-gray-500',
      hoverColor: 'group-hover:from-blue-600 group-hover:to-slate-500',
      featured: false
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:scale-[1.02] h-full relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} ${project.hoverColor} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
            <project.icon className="text-white" size={28} />
          </div>
          
          <div className="flex gap-3">
            <button className="group/btn w-10 h-10 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:from-blue-100 hover:to-slate-100 transition-all duration-300">
              <Github size={18} className="text-slate-600 group-hover/btn:text-blue-600 group-hover/btn:rotate-12 transition-all duration-200" />
            </button>
            <button className="group/btn w-10 h-10 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:from-blue-100 hover:to-slate-100 transition-all duration-300">
              <ExternalLink size={18} className="text-slate-600 group-hover/btn:text-blue-600 group-hover/btn:rotate-12 transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-start justify-between">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">
              {project.title}
            </h3>
            {isHovered && (
              <ArrowUpRight className="text-blue-500 animate-pulse ml-2 flex-shrink-0" size={20} />
            )}
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {isHovered ? project.longDescription : project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 rounded-full text-sm font-medium hover:scale-105 hover:shadow-md hover:from-blue-100 hover:to-slate-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-slate-600 to-blue-600 text-white text-xs font-medium rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Star size={12} className="animate-pulse" />
              Featured
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
