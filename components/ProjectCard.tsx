import React from 'react';
import { Project } from '../types';
import { Cpu, Code, Layers, Box } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  
  const getIcon = (title: string) => {
    if (title.includes('RISC-V') || title.includes('ASIC')) return <Cpu className="w-8 h-8 text-purple-400" />;
    if (title.includes('Embedded') || title.includes('STM32')) return <Code className="w-8 h-8 text-cyan-400" />;
    if (title.includes('Analog')) return <Layers className="w-8 h-8 text-blue-400" />;
    return <Box className="w-8 h-8 text-slate-400" />;
  };

  return (
    <div 
      className="group relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
         {getIcon(project.title)}
      </div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4">
           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
           <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cyan-900/30 text-cyan-300 border border-cyan-500/30">
             {project.tech}
           </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;