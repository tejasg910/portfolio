import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import HeroSection from './components/hero/HeroSection'
import SkillmainSection from './components/skills/SkillmainSection'
import ExperienceSection from './components/experience/Experience'
import AboutMeSection from './components/aboutme/Aboutme'
import Footer from './components/footer/Footer'
import MyWorkSection from './components/work/MyWork'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function App() {
  const { scrollY } = useScroll();


  // Transform for Skills section
  const skillsTransform = useTransform(
    scrollY,
    [0, window.innerHeight], // Input range (viewport height)
    ['100vh', '0vh'] // Output range
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // adjust speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <>
      <main className="relative scroll-smooth">


        {/* Fixed Hero Section */}
        <section className="fixed inset-0 w-full" id='herosection'>
          <HeroSection />
        </section>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Spacer for first section */}
          <div className="h-screen w-full" />

          {/* Skills Section with Motion */}
          <motion.section
            className="w-full"
            style={{ top: skillsTransform }}
            id='skills'
          >
            <SkillmainSection />
          </motion.section>

          {/* Spacer for second section */}

          {/* Experience Section with Motion */}



        </div>
        <div className='relative'>
          <motion.section
            className=""

          >
            <ExperienceSection />
          </motion.section>
        </div>


        <div className='relative'>
          <motion.section
            className=""

          >
            <MyWorkSection />
          </motion.section>
        </div>
        {/* <div className='relative'>
          <motion.section
            className=""

          >
            <AboutMeSection />
          </motion.section>
        </div> */}



        <div className='relative'>
          <motion.section
            className=""

          >
            <Footer />
          </motion.section>
        </div>



      </main>
    </>
  )
}

export default App