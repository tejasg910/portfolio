import { useState } from 'react'
import ScrollingSkillsSection from './ScrollSkills'
import SkillsOrbit from './Solar'
import { SkillIconsCloud } from './CloudSkills';
import { OrbitingCircleSkills } from './orbits/OribitSkillCircle';

const SkillmainSection = () => {
  const [selectedSkillSection, setSelectedSkillSection] = useState('scroll');



  return (
    <div className=" min-h-screen bg-[#0D0D0D]">
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="text-center  space-y-2 pt-14 ">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-slate-400">Hover over each skill to learn more about my experience</p>
      </div>
      <div className='flex justify-center text-white gap-4 '>


        <h2 onClick={() => setSelectedSkillSection("scroll")} className={`p-4 text-xl cursor-pointer ${selectedSkillSection === "scroll" ? "border-b-2" : ""}`}>Grid View</h2>
        <h2 onClick={() => setSelectedSkillSection("cloud")} className={`p-4 text-xl cursor-pointer hidden md:flex ${selectedSkillSection === "cloud" ? "border-b-2" : ""}`}>Cloud View</h2>
        <h2 onClick={() => setSelectedSkillSection("solar")} className={`p-4 text-xl cursor-pointer hidden md:flex ${selectedSkillSection === "solar" ? "border-b-2" : ""}`}>Solar View</h2>
      
      </div>

      {selectedSkillSection === "scroll" && <ScrollingSkillsSection />
      }
      {selectedSkillSection === "solar" && <SkillsOrbit />}
      {selectedSkillSection === "cloud" && <SkillIconsCloud />}
    </div>
  )
}

export default SkillmainSection