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
    icon:taiwindLogo
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
    id: 5,
    name: "Next.js",
    level: 70,
    description: "Cloud infrastructure and deployment using various AWS services.",
    years: 2,
    projects: 6,
    icon:nextjsLogo
  },

  
  {
    id: 6,
    name: "Javascript",
    level: 70,
    description: "Cloud infrastructure and deployment using various AWS services.",
    years: 2,
    projects: 6,
    icon: javascriptLogo
  }
  ,
  
  {
    id: 7,
    name: "React Native",
    level: 70,
    description: 'Developing various applications on mobile devices.', 
    years: 2,
    projects: 6,
    icon:reactNativelogo
  }
];


const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
   
      setIsHovered(true);
    };
  
    return (
      <div className="relative">
        <div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 
                     hover:border-emerald-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col items-center space-y-4">
            <div 
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-3 
                       flex items-center justify-center group-hover:from-emerald-950 group-hover:to-emerald-900
                       transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain filter brightness-125"
              />
            </div>
            <p className="text-slate-300 font-medium text-center">{skill.name}</p>
            
            <div className="w-full h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </div>
  
        {isHovered && (
          <div 
            className="absolute z-50 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl min-w-full
                       animate-in fade-in-0 zoom-in-95 duration-200"
            style={{
              left: '50%',
              bottom: '100%',
              transform: 'translateX(-50%) translateY(-8px)',
              marginBottom: '8px'
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-emerald-400 font-semibold">{skill.name}</h3>
                <span className="text-slate-400 text-sm">{skill.level}% Proficiency</span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-slate-800/50 rounded-lg p-2">
                  <p className="text-emerald-400 text-xs font-medium">Experience</p>
                  <p className="text-white text-lg font-bold">{skill.years}+ years</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2">
                  <p className="text-emerald-400 text-xs font-medium">Projects</p>
                  <p className="text-white text-lg font-bold">{skill.projects}+</p>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute w-4 h-4 bg-slate-900 border-b border-r border-slate-700 
                         transform rotate-45 -bottom-2 left-1/2 -translate-x-1/2"
            />
          </div>
        )}
      </div>
    );
  };

const SkillsSection: React.FC = () => {
    return (
      <section className="w-full  px-4 py-16">
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