
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2, TrendingUp } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Data Engineer & Power Automate Specialist',
      company: 'Florida Department of Health',
      location: 'Tallahassee, FL',
      period: 'March 2025 - Present',
      description: 'Leading data engineering initiatives and automation projects to streamline healthcare data processes and improve operational efficiency.',
      highlights: [
        'Designed and implemented automated data pipelines for health monitoring systems',
        'Created comprehensive Power BI dashboards for executive reporting and analytics',
        'Developed Power Automate workflows reducing manual processing time by 70%',
        'Built Power Apps solutions for field data collection and validation'
      ],
      skills: ['Power BI', 'Power Automate', 'Power Apps', 'SQL', 'Azure', 'Data Pipelines']
    },
    {
      title: 'Software Developer & BI Analyst',
      company: 'Tata Consultancy Services',
      location: 'India',
      period: 'May 2021 - November 2023',
      description: 'Contributed to large-scale software development projects and business intelligence solutions for enterprise clients across multiple industries.',
      highlights: [
        'Developed full-stack applications using modern technologies and frameworks',
        'Created comprehensive BI reports and analytics dashboards for stakeholders',
        'Collaborated with cross-functional teams on system architecture and design',
        'Optimized database performance and data processing workflows'
      ],
      skills: ['Java', 'SQL Server', 'Business Intelligence', 'ETL', 'System Design', 'Analytics']
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 to-blue-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full shadow-lg hidden md:block group-hover:scale-150 group-hover:shadow-xl transition-all duration-300"></div>
                
                <div className="md:ml-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:scale-[1.02] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="mb-6 relative z-10">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2 group/item">
                          <Building2 size={16} className="text-slate-500 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all duration-200" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 group/item">
                          <MapPin size={16} className="text-slate-500 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all duration-200" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 group/item">
                          <Calendar size={16} className="text-slate-500 group-hover/item:text-blue-500 group-hover/item:scale-110 transition-all duration-200" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>
                    </div>

                    <div className="mb-6 relative z-10">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <TrendingUp className="text-blue-500 group-hover:animate-pulse" size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-start gap-3 group/highlight">
                            <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/highlight:scale-150 group-hover/highlight:shadow-lg transition-all duration-200"></div>
                            <span className="text-gray-700 group-hover/highlight:text-gray-800 transition-colors duration-200">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 rounded-full text-sm font-medium hover:scale-105 hover:shadow-md hover:from-blue-100 hover:to-slate-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
