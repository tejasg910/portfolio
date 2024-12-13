import { useState } from 'react';
import reactLogo from "../../assets/icons/react.webp";
import taiwindLogo from "../../assets/icons/tailwind.webp";
import nextjsLogo from "../../assets/icons/next-js.webp";
import typescriptLogo from "../../assets/icons/typescript.webp";
import javascriptLogo from "../../assets/icons/js.webp";
import nodelogo from "../../assets/icons/nodejs.webp";
import mongodbLogo from "../../assets/icons/mongodb.webp";
import reactnativeLogo from "../../assets/icons/react.webp";

interface Skill {
  name: string;
  color: string;
  orbit: number;
  speed: number;
  image: string;
  size?: number; // Size modifier for the skill circle
  level: number,
  years: number,
  description: string,
  projects: number
}

const SkillsOrbit = () => {
  const [isHovered, setIsHovered] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: 'React',
      color: 'bg-blue-400',
      orbit: 0.7,
      speed: 20,
      image: reactLogo,
      size: 60,
      level: 90,
      years: 3,
      projects: 15,
      description: 'Building modern web applications with React, including hooks, context, and state management.'
    },
    {
      name: 'TypeScript',
      color: 'bg-blue-500',
      orbit: 1.8,
      speed: 25,
      image: typescriptLogo,
      size: 60,
      level: 85,
      years: 2,
      projects: 10,
      description: 'Developing type-safe applications with TypeScript, including advanced types and interfaces.'
    },
    {
      name: 'Node.js',
      color: 'bg-green-500',
      orbit: 2.5,
      speed: 30,
      image: nodelogo,
      size: 60,
      level: 80,
      years: 3,
      projects: 12,
      description: 'Creating backend services and APIs using Node.js and Express.'
    },
    {
      name: 'Tailwind',
      color: 'bg-cyan-400',
      orbit: 1.5,
      speed: 22,
      image: taiwindLogo,
      size: 60,
      level: 75,
      years: 2,
      projects: 8,
      description: 'Crafting responsive and visually appealing UIs with Tailwind CSS.'
    },
    {
      name: 'MongoDB',
      color: 'bg-green-600',
      orbit: 2.2,
      speed: 28,
      image: mongodbLogo,
      size: 60,
      level: 70,
      years: 2,
      projects: 6,
      description: 'Designing and managing NoSQL databases with MongoDB for scalable applications.'
    },
    {
      name: 'Next.js',
      color: 'bg-black',
      orbit: 2.8,
      speed: 32,
      image: nextjsLogo,
      size: 60,
      level: 70,
      years: 2,
      projects: 6,
      description: 'Building server-rendered and static web applications with Next.js for optimal performance.'
    },
    {
      name: 'JavaScript',
      color: 'bg-yellow-400',
      orbit: 1.6,
      speed: 24,
      image: javascriptLogo,
      size: 60,
      level: 70,
      years: 2,
      projects: 6,
      description: 'Developing dynamic and interactive web applications using core JavaScript.'
    },
    {
      name: 'React Native',
      color: 'bg-blue-600',
      orbit: 2,
      speed: 15,
      image: reactnativeLogo,
      size: 60,
      level: 70,
      years: 2,
      projects: 6,
      description: 'Developing various applications on mobile devices.'
    },
  ];



  const style = document.createElement('style');
  style.textContent = skills.map((_, index) => `
  @keyframes orbit-custom-${index} {
    from {
      transform: rotate(${index * 47}deg);
    }
    to {
      transform: rotate(${index * 47 + 360}deg);
    }
  }
`).join('\n');
  document.head.appendChild(style);

  // Group skills by orbit for more even distribution

  return (
    <div className="mt-8 hidden md:flex items-center ">
      {/* Gradient overlays */}


      <div className="relative h-[600px] w-full flex items-center justify-center">
        {/* Center circle */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-white font-bold text-lg">Skills</span>
        </div>

        {/* Dynamic orbit paths */}
        {[1, 1.5, 2, 2.5, 3].map((orbit) => (
          <div
            key={orbit}
            className="absolute rounded-full border border-gray-200 opacity-20"
            style={{
              width: `${90 + orbit * 150}px`,
              height: `${90 + orbit * 150}px`,
            }}
          />
        ))}

        {/* Orbiting skills */}
        {skills.map((skill, index) => {
          const orbitSize = 30 + skill.orbit * 90; // More varied orbit sizes
          const angle = (index * 47) % 360; // Prime number for better distribution

          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                animation: `orbit-custom-${index} ${skill.speed}s linear infinite`,
              }}
            >

              <div
                className={`absolute rounded-full flex items-center justify-center cursor-pointer
                  transition-all duration-300 hover:scale-110 shadow-lg overflow-hidden`}
                style={{
                  transform: `rotate(${angle}deg) translateX(${orbitSize}px) rotate(-${angle}deg)`,
                  width: `${skill.size || 14}px`,
                  height: `${skill.size || 14}px`,
                }}
                onMouseEnter={() => setIsHovered(skill)}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain p-2"
                />

              </div>
            </div>
          );
        })}
      </div>

      <div>
        {isHovered && <div
          className=" bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl w-80
                       animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden"
          style={{
            left: '50%',
            bottom: '100%',
            transform: 'translateX(-50%) translateY(-8px)',
            marginBottom: '8px'
          }}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-emerald-400 font-semibold">{isHovered.name}</h3>
              <span className="text-slate-400 text-sm">{isHovered.level}% Proficiency</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {isHovered.description}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="bg-slate-800/50 rounded-lg p-2">
                <p className="text-emerald-400 text-xs font-medium">Experience</p>
                <p className="text-white text-lg font-bold">{isHovered.years}+ years</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-2">
                <p className="text-emerald-400 text-xs font-medium">Projects</p>
                <p className="text-white text-lg font-bold">{isHovered.projects}+</p>
              </div>
            </div>
          </div>

          <div
            className="absolute w-4 h-4 bg-slate-900 border-b border-r border-slate-700 
                         transform rotate-[130deg] left-0 top-1/2 -translate-x-1/2"            />
        </div>}
      </div>
    </div>
  );
};

// Add this to your global CSS


export default SkillsOrbit;