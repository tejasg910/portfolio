import  { useState } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from '../Beam';
import resume from "../../assets/Tejas_giri_full_stack_engineer_2years.pdf"
const AboutMeSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const aboutMe = {
    name: "Tejas Giri",
    title: "Full Stack Developer",
    description: "I am a Full Stack Developer with over 2 years of professional experience. I specialize in building robust, scalable, and user-friendly web applications using the MERN stack, with expertise in ReactJS, NextJS, and Node.js. I am passionate about crafting seamless user experiences, solving technical challenges, and collaborating effectively within teams.",
    location: "Chtrapati Sambhaji Nagar, IN",
    email: "tejasgiri910@gmail.com"
  };



  const downloadResume = async () => {
    try {
      // Replace with your actual file URL
      
      const response = await fetch(resume);
      const blob = await response.blob();
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'tejasgirifullstack2years.pdf'; // Set desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };


  return (
<div className="min-h-screen bg-[#0A0A0F] relative px-4 overflow-hidden">      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pt-5">
            About Me
          </h2>
        </motion.div>

        <div className="flex justify-center items-start min-h-[600px]">
         <div className="w-full max-w-[450px] h-auto aspect-[9/8] relative"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
       

            <motion.div
              className="w-full h-full absolute"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of card */}
              <div className="absolute w-full min-h-full backface-hidden">
                <div className="backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80 border border-white/10 rounded-2xl p-8 shadow-xl h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-white mb-2">{aboutMe.name}</h3>
                    <h4 className="text-2xl text-cyan-400 mb-8">{aboutMe.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-start">{aboutMe.description}</p>
                  </div>
                  <p className="text-sm mt-8 text-gray-400 italic text-center">Hover to view contact details</p>
                </div>
              </div>

              {/* Back of card */}
              <div 
                className="absolute w-full h-full backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80 border border-white/10 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-center items-center">
                  <div className="space-y-8 text-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                      <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        {aboutMe.location}
                      </div>
                      <div className="text-gray-300 mb-8">{aboutMe.email}</div>
                    </div>
                    
                    {/* Glowing Resume Button with Beam Effect */}
                    <div className="relative">
                  
                      <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={downloadResume}>
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#0EA5E9_50%,#E2E8F0_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                          Download Resume
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>


      {/* <CardSpotlightDemo /> */}

    
    </div>
  );
};

export default AboutMeSection;