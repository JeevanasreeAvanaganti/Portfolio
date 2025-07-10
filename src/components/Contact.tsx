
import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to create something amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Email</p>
                    <p className="text-gray-600">Jeevanasreeavanaganti7@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Location</p>
                    <p className="text-gray-600">Tallahassee, FL</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200"><a href='https://www.linkedin.com/in/jeevanasree-avanaganti/' target='_blank'>LinkedIn</a></p>
                    <p className="text-gray-600">Connect professionally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Open to Opportunities</h4>
              <p className="text-gray-700 leading-relaxed">
                I'm currently open to new opportunities in data engineering, 
                automation, and business intelligence. Whether you're looking for 
                a full-time professional or a consultant for your next project, 
                I'd love to hear from you.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="Email Address"
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none hover:shadow-md"
                    placeholder="Your Message"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`group w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-slate-600 to-blue-600 text-white hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} className="animate-pulse" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
