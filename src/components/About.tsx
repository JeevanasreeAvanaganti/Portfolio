
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Zap, BarChart3, Sparkles } from 'lucide-react';

const About = () => {
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

  const skills = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and ETL processes with modern tools',
      color: 'from-slate-500 to-gray-600',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-slate-500'
    },
    {
      icon: Zap,
      title: 'Power Platform',
      description: 'Automating workflows with Power Automate and building apps',
      color: 'from-gray-500 to-blue-600',
      hoverColor: 'group-hover:from-slate-500 group-hover:to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Creating insightful dashboards and analytics solutions',
      color: 'from-blue-500 to-slate-600',
      hoverColor: 'group-hover:from-gray-500 group-hover:to-blue-500'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development and system architecture design',
      color: 'from-slate-600 to-gray-500',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-slate-600'
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Data Engineer and Automation Specialist with extensive experience 
              in transforming complex data challenges into streamlined solutions. My journey 
              spans across healthcare and consulting sectors, where I've developed expertise in 
              building robust data pipelines and creating intelligent automation workflows.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in software development and business intelligence tools, 
              I specialize in bridging the gap between technical complexity and business value. 
              I believe in the power of data to drive meaningful decisions and the importance of 
              automation in creating efficient, scalable solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-500 animate-pulse" size={20} />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Power BI', 'SQL Server', 'Power Automate', 'Power Apps', 'Python', 'Azure', 'ETL Pipelines', 'Data Analytics'].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 rounded-full text-sm font-medium hover:scale-105 hover:shadow-md hover:from-blue-100 hover:to-slate-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} ${skill.hoverColor} flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 relative z-10">{skill.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
