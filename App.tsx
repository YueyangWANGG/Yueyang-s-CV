import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Download, Cpu, ChevronDown, Globe, MapPin } from 'lucide-react';
import WaveBackground from './components/WaveBackground';
import Typewriter from './components/Typewriter';
import ProjectCard from './components/ProjectCard';
import { CONTACT, EDUCATION, PROJECTS, SKILLS } from './constants';
// Ensure using relative path './' instead of alias '@/'
import profilePic from './profile.png';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <WaveBackground />
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest font-mono flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
            YUEYANG.W
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden" id="about">
        {/* Decorative background glows - Enhanced for gradient feel */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
              Available for Internship - Mar 2026
            </div>
            
            <Typewriter 
              staticText="Engineer in Microelectronics and Telecommunications that works"
              words={['hard.', 'carefully.', 'creatively.']}
              typingSpeed={80}
              deletingSpeed={40}
            />

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-4 border-purple-500 pl-6">
              Passionately crafting analog, digital, and mixed-signal integrated circuits. 
              Skilled in FPGA development, ASIC design, and Embedded Systems.
            </p>

            <div className="flex flex-wrap gap-4">
               <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2">
                 <Mail size={18} /> Contact Me
               </a>
               <a href="#" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2">
                 <Download size={18} /> Download CV
               </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             {/* Profile Image Container */}
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Rotating Tech Rings */}
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Mask */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl relative z-10">
                  <img 
                    src={profilePic}
                    alt="Yueyang Wang" 
                    className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Chips Decor */}
                <div className="absolute -top-4 -left-4 bg-slate-900 p-3 rounded-xl border border-cyan-500/30 shadow-lg animate-bounce delay-100 z-20">
                   <Cpu className="text-cyan-400 w-6 h-6" />
                </div>
                <div className="absolute bottom-8 -right-8 bg-slate-900 p-3 rounded-xl border border-purple-500/30 shadow-lg animate-bounce delay-700 z-20">
                   <Globe className="text-purple-400 w-6 h-6" />
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-900/30 backdrop-blur-sm border-y border-white/5 relative">
         {/* Background Gradient Spot */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
         
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Academic Journey
          </h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon on timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-cyan-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0f172a]">
                  <div className="w-3 h-3 bg-slate-500 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-white">{edu.school}</h3>
                    <span className="text-sm text-cyan-400 font-mono">{edu.period}</span>
                  </div>
                  <div className="text-purple-300 text-sm mb-4 font-medium">{edu.degree}</div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <MapPin size={12} /> {edu.location}
                  </div>
                  <ul className="space-y-1">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-cyan-500 mt-1.5 text-[10px]">●</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 relative">
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Engineering Projects</h2>
              <p className="text-slate-400 max-w-lg">Practical implementation of hardware and software solutions ranging from ASIC design to Embedded Systems.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
               <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
               SYSTEMS ONLINE
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 relative overflow-hidden">
        {/* Background Tech Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:bg-slate-800/60 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-300 mb-6 border-b border-white/10 pb-2 inline-block">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 bg-slate-700/50 rounded-md text-sm text-slate-200 border border-transparent hover:border-cyan-500/50 hover:text-cyan-100 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-950/20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-slate-400 mb-12">
            I am currently seeking a 6-month internship starting March 2026 in analog, digital, or mixed-signal integrated circuit design.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-cyan-500/50 group transition-all">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono text-slate-500 mb-2">EMAIL</h3>
              <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-cyan-300 text-sm break-all">
                {CONTACT.email}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-green-500/50 group transition-all">
              <Phone className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono text-slate-500 mb-2">PHONE</h3>
              <div className="flex flex-col gap-1">
                {CONTACT.phone.map((p, i) => (
                  <span key={i} className="text-white text-sm">{p}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-blue-500/50 group transition-all">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono text-slate-500 mb-2">SOCIAL</h3>
              <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="text-white hover:text-blue-300 text-sm">
                LinkedIn Profile
              </a>
            </div>
          </div>

          <footer className="mt-20 text-slate-600 text-sm font-mono">
            <p>© {new Date().getFullYear()} Yueyang WANG. Designed with React & Tailwind.</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;