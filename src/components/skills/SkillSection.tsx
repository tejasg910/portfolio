import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import reactLogo from "../../assets/icons/react.webp";
import taiwindLogo from "../../assets/icons/tailwind.webp";
import nextjsLogo from "../../assets/icons/next-js.webp";
import typescriptLogo from "../../assets/icons/typescript.webp";
import javascriptLogo from "../../assets/icons/js.webp";
import nodelogo from "../../assets/icons/nodejs.webp";
import dockerLogo from "../../assets/icons/dockerimg.webp";
import mongodbLogo from "../../assets/icons/mongodb.webp";
import reactnativeLogo from "../../assets/icons/react.webp";

type Skill = {
    name: string;
    icon: string;
    color: string;
    description: string;
};

const skills: Skill[] = [
    { name: 'TypeScript', icon: typescriptLogo, color: '#3178C6', description: 'Strongly typed programming language that builds on JavaScript.' },
    { name: 'React', icon: reactLogo, color: '#61DAFB', description: 'A JavaScript library for building user interfaces' },
    { name: 'Tailwind', icon: taiwindLogo, color: '#06B6D4', description: 'I use Tailwind CSS to create responsive, modern designs with utility-first classes.' },
    { name: 'Next.js', icon: nextjsLogo, color: '#000000', description: 'The React Framework for Production' },
    { name: 'JavaScript', icon: javascriptLogo, color: '#F7DF1E', description: 'High-level, interpreted programming language' },
    { name: 'Node', icon: nodelogo, color: '#61DAFB', description: 'Create native apps for Android and iOS' },
    { name: 'React Native', icon: reactnativeLogo, color: '#61DAFB', description: 'Create native apps for Android and iOS' },
    { name: 'Docker', icon: dockerLogo, color: '#61DAFB', description: 'Create native apps for Android and iOS' },
    { name: 'Mongodb', icon: mongodbLogo, color: '#61DAFB', description: 'Create native apps for Android and iOS' }
];

const SkillsSection: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]);
    const wheelRotation = useMotionValue(0);

    const handleDrag = (_: any, info: { delta: { x: number } }) => {
        // Update wheel rotation based on horizontal drag delta
        wheelRotation.set(wheelRotation.get() + info.delta.x * 0.3); // Adjust multiplier for smoother rotation

        // Calculate active skill
        const currentRotation = wheelRotation.get();
        const segment = 360 / skills.length;
        const normalizedRotation = ((currentRotation % 360) + 360) % 360; // Normalize rotation to 0-360
        const activeIndex = Math.round(normalizedRotation / segment) % skills.length;
        setActiveSkill(skills[activeIndex]);
    };

    return (
        <div className="min-h-screen bg-black relative pt-16">
            {/* Gradient overlays */}
            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/30 blur-[120px]" />
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-16">
                    {/* Active Skill Display */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">{activeSkill.name}</h2>
                        <p className="text-xl text-gray-300 max-w-2xl">{activeSkill.description}</p>
                    </div>

                    {/* Skills Wheel */}
                    <div className="relative w-[600px] h-[600px]">
                        {/* Wrapper for rotating wheel */}
                        <motion.div
                            className="w-full h-full cursor-grab active:cursor-grabbing"
                            style={{
                                rotate: wheelRotation
                            }}
                            drag="x"
                            dragConstraints={{ left: -300, right: 300 }} // Adjust drag constraints
                            dragElastic={0.1}
                            dragMomentum={false}
                            onDrag={handleDrag}
                        >
                            {/* Image container */}
                            <div className="relative w-full h-full">
                                {skills.map((skill, index) => {
                                    const angle = (360 / skills.length) * index;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12"
                                            style={{
                                                rotate: angle,
                                                x: 240 * Math.cos((angle * Math.PI) / 180),
                                                y: 240 * Math.sin((angle * Math.PI) / 180),
                                            }}
                                        >
                                            <div
                                                className="w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-2xl transform -rotate-12 transition-all hover:scale-110 shadow-lg"
                                                style={{
                                                    boxShadow: `0 0 20px ${skill.color}40`
                                                }}
                                            >
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Drag Instruction */}
                    <p className="text-gray-400 italic">Drag the wheel to explore skills</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
