import { useState } from 'react';
import reactLogo from "../../assets/icons/react.webp";
import taiwindLogo from "../../assets/icons/tailwind.webp";
import nextjsLogo from "../../assets/icons/next-js.webp";
import typescriptLogo from "../../assets/icons/typescript.webp";
import javascriptLogo from "../../assets/icons/js.webp";
import nodelogo from "../../assets/icons/nodejs.webp";
import mongodbLogo from "../../assets/icons/mongodb.webp";
import reactNativelogo from  "../../assets/icons/react.webp";

interface Skill {
    id: number;
    name: string;
    level: number;
    description: string;
    years: number;
    projects: number;
    icon: string;
}
  
const skills = [
  {
    id: 1,
    name: "React",
    level: 90,
    description: "Building modern web applications with React, including hooks, context, and state management.",
    years: 3,
    projects: 15,
    icon: reactLogo
  },
  {
    id: 2,
    name: "TypeScript",
    level: 85,
    description: "Developing type-safe applications with TypeScript, including advanced types and interfaces.",
    years: 2,
    projects: 10,
    icon: typescriptLogo
  },
  {
    id: 3,
    name: "Node.js",
    level: 80,
    description: "Creating backend services and APIs using Node.js and Express.",
    years: 3,
    projects: 12,
    icon: nodelogo
  },
  {
    id: 4,
    name: "Tailwind",
    level: 75,
    description: "Data analysis, automation, and backend development with Python.",
    years: 2,
    projects: 8,
    icon: taiwindLogo
  },
  {
    id: 5,
    name: "Mongodb",
    level: 70,
    description: "Cloud infrastructure and deployment using various AWS services.",
    years: 2,
    projects: 6,
    icon: mongodbLogo
  },
  {
    id: 6,
    name: "Next.js",
    level: 70,
    description: "Cloud infrastructure and deployment using various AWS services.",
    years: 2,
    projects: 6,
    icon: nextjsLogo
  },
  {
    id: 7,
    name: "Javascript",
    level: 70,
    description: "Cloud infrastructure and deployment using various AWS services.",
    years: 2,
    projects: 6,
    icon: javascriptLogo
  },
  {
    id: 8,
    name: "React Native",
    level: 70,
    description: 'Developing various applications on mobile devices.', 
    years: 2,
    projects: 6,
    icon: reactNativelogo
  }
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative group">
      <div
        className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 
                   group-hover:border-emerald-500/50 transition-all duration-500 ease-in-out cursor-pointer 
                   transform group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-emerald-500/10
                   overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 
                       group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 
                       transition-all duration-700 ease-in-out rounded-xl"></div>
                       
        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div 
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-3 
                     flex items-center justify-center group-hover:from-emerald-950 group-hover:to-emerald-900
                     transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-3"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain filter brightness-125 transition-all duration-500
                         group-hover:brightness-150"
            />
          </div>
          
          <p className="text-slate-300 font-medium text-center group-hover:text-emerald-400 
                       transition-all duration-300">{skill.name}</p>
          
          <div className="w-full h-1 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 
                       transition-all duration-1000 ease-out origin-left scale-x-0 
                       group-hover:scale-x-100"
              style={{ 
                width: `${skill.level}%`, 
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Tooltip with better animations */}
      <div 
        className={`absolute z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg p-4 shadow-xl 
                  transition-all duration-500 ease-out overflow-hidden
                  ${isHovered 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}
        style={{
          left: '50%',
          bottom: '110%',
          transform: `translateX(-50%)`,
          width: 'calc(100% + 2rem)',
          maxWidth: '24rem',
          transformOrigin: 'bottom center',
          boxShadow: isHovered ? '0 10px 25px -5px rgba(16, 185, 129, 0.2), 0 8px 10px -6px rgba(16, 185, 129, 0.1)' : 'none'
        }}
      >
        <div className={`space-y-3 transition-all duration-700 delay-100 ease-out 
                        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-emerald-400 font-semibold text-lg">{skill.name}</h3>
            <span className="text-slate-400 text-sm bg-slate-800/70 px-2 py-1 rounded-md transition-all duration-300
                          hover:bg-emerald-900/50 hover:text-emerald-300">{skill.level}% Proficiency</span>
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed">
            {skill.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-slate-800/50 rounded-lg p-2 transform transition-all duration-500 
                         hover:scale-105 hover:bg-slate-800/80 hover:shadow-md hover:shadow-emerald-500/10
                         border border-transparent hover:border-emerald-500/20">
              <p className="text-emerald-400 text-xs font-medium">Experience</p>
              <p className="text-white text-lg font-bold">{skill.years}+ years</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-2 transform transition-all duration-500 
                         hover:scale-105 hover:bg-slate-800/80 hover:shadow-md hover:shadow-emerald-500/10
                         border border-transparent hover:border-emerald-500/20">
              <p className="text-emerald-400 text-xs font-medium">Projects</p>
              <p className="text-white text-lg font-bold">{skill.projects}+</p>
            </div>
          </div>
        </div>
        
        {/* Animated connector triangle */}
        <div 
          className={`absolute w-4 h-4 bg-slate-900 border-b border-r border-slate-700 
                    transform rotate-45 left-1/2 -translate-x-1/2 transition-all duration-500
                    ${isHovered ? '-bottom-2 opacity-100' : '-bottom-4 opacity-0'}`}
        />

        {/* Decorative dots */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-emerald-400 rounded-full opacity-70"></div>
        <div className="absolute top-3 right-4 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
        <div className="absolute top-5 right-3 w-1 h-1 bg-emerald-400 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-100 transition-opacity duration-500">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;