
import React, { useEffect, useState } from 'react';
import { MapPin, Download, ExternalLink, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Portfolio/resume.pdf'; // This would be your actual resume file path
    link.download = 'Jeevanasree_Avanaganti_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-slate-200/30 dark:from-blue-800/20 dark:to-slate-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-slate-200/30 to-gray-200/30 dark:from-slate-800/20 dark:to-gray-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-gray-200/30 to-blue-200/30 dark:from-gray-800/20 dark:to-blue-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-gray-700 to-blue-600 dark:from-slate-200 dark:via-gray-300 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
              Jeevanasree
            </h1>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-400">
              Avanaganti
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group">
            <MapPin size={18} className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-lg">Tallahassee, FL</span>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Data Engineer and Automation Specialist with a software development background. 
            Passionate about transforming complex data challenges into streamlined, 
            automated solutions that drive business value.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={handleResumeDownload}
              className="group px-8 py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={18} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>View Projects</span>
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative group">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 dark:from-slate-800 dark:via-gray-800 dark:to-blue-800 p-1 shadow-2xl hover:scale-105 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 p-4 flex items-center justify-center relative z-10">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900 flex items-center justify-center text-6xl font-bold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  JA
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-slate-400 rounded-full animate-bounce delay-1000 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full animate-bounce delay-1500 group-hover:scale-125 transition-transform duration-300"></div>
            <Sparkles className="absolute top-10 -left-6 text-blue-400 dark:text-blue-300 opacity-70 animate-pulse group-hover:animate-spin transition-all duration-500" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
