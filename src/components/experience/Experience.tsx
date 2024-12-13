import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  period: {
    start: string;
    end: string;
  };
  current: boolean;
  description: string;
  responsibilities: string[];
  tech: string[];
  bgColor: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Ipangram",
    location: "Remote",
    type: "Full-time",
    period: {
      start: "Aug 2023",
      end: "Present"
    },
    current: true,
    description: "Leading development of modern web applications with focus on performance and user experience",
    responsibilities: [
      "Developed and maintained scalable web applications using modern JavaScript frameworks",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and provided constructive feedback to team members"
    ],
    tech: ["HTML","CSS", "JavaScript",  "React", "Node.js", "TypeScript", "MongoDB"],
    bgColor: "from-emerald-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "Inphynous Tech Solutions",
    location: "Remote",
    type: "Full-time",
    period: {
      start: "Apr 2023",
      end: "Jul 2023"
    },
    current: false,
    description: "Contributed to building scalable web solutions and reusable component libraries",
    responsibilities: [
      "Built and deployed web applications using React and Node.js",
      "Worked closely with designers to implement pixel-perfect UI components",
      "Contributed to the development of reusable component libraries",
      "Participated in agile development processes and sprint planning"
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js", "Next.js",  "Docker"],
    bgColor: "from-purple-500/20 to-pink-500/20"
  }
];

const ShinyBorder: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-[500%] h-[500%] -translate-x-[80%] -translate-y-[80%] rotate-[-45deg] animate-shine bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
  
  const ExperienceCard: React.FC<{ 
    experience: Experience; 
    isSelected: boolean;
    onClick: () => void;
  }> = ({ experience, isSelected, onClick }) => {
    return (
      <motion.div
        layout
        onClick={onClick}
        className={`relative rounded-2xl cursor-pointer overflow-hidden group
                   ${isSelected ? 'col-span-2 md:col-span-3 row-span-2' : 'col-span-1'}
                   backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShinyBorder />
        <motion.div 
          className="h-full w-full p-6"
          layout
        >
          <motion.div className="relative z-10 h-full flex flex-col" layout>
            <motion.div 
              className="flex items-start justify-between mb-4"
              layout
            >
              <div className="space-y-1">
                <motion.h3 
                  className="text-xl font-bold text-white text-left"
                  layoutId={`title-${experience.id}`}
                >
                  {experience.role}
                </motion.h3>
                <motion.p 
                  className="text-emerald-400 font-medium text-left"
                  layoutId={`company-${experience.id}`}
                >
                  {experience.company}
                </motion.p>
              </div>
              
              {experience.current && (
                <motion.div 
                  className="px-3 py-1 bg-emerald-500/20 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                >
                  <span className="text-emerald-400 text-sm font-medium">Current</span>
                </motion.div>
              )}
            </motion.div>
  
            <motion.div 
              className="text-slate-400 text-sm mb-4 text-left"
              layout
            >
              {experience.period.start} - {experience.period.end}
            </motion.div>
  
            {!isSelected && (
              <motion.p
                className="text-slate-300/80 text-sm line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {experience.description}
              </motion.p>
            )}
  
            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 flex-grow"
              >
                <p className="text-slate-300 leading-relaxed">
                  {experience.description}
                </p>
  
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-left">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-slate-300 text-sm">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
  
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-left">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  
  const ExperienceSection: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
  
    return (
      <div className="min-h-screen bg-[#0D0D0D] relative px-4 py-16">
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Journey
              </h2>
            </motion.div>
            <motion.p 
              className="text-slate-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Click on each role to explore my professional experience
            </motion.p>
          </div>
  
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min place-items-center"
            layout
          >
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isSelected={selectedId === experience.id}
                onClick={() => setSelectedId(selectedId === experience.id ? null : experience.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export default ExperienceSection;