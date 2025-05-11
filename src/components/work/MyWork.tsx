// import { StickyScrollRevealDemo } from './AboutMeCard';

// const MyWorkSection = () => {
//   return (
//     <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
//       {/* Background gradients */}
//       <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
//       <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />

//       {/* Top fade effect */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0A0A0F] to-transparent z-10" />

//       <div>
//         <h2 className="text-5xl my-8 font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pt-5 relative z-10">
//           My Work
//         </h2>
//         <StickyScrollRevealDemo />
//       </div>

//       {/* Bottom fade effect */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10" />
//     </div>
//   );
// };

// export default MyWorkSection;


import { motion } from "framer-motion";
import { Book, Code, ExternalLink, Github, Heart, Laptop, Link, PenTool, Server, Star, User } from "lucide-react";
import { useState } from "react";
import Slack from "../../assets/projects/slack.png"
import RemoteJobZone from "../../assets/projects/remotejobzone.png"
import InterviewSheduler from "../../assets/projects/interviewsheduler.png"
import Ecommerce from "../../assets/projects/ecommerce.png"
const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />


      {/* My Work Section */}
      <WorkSection />

      {/* About Me Section */}
      <AboutSection />
    </div>
  );
};

const WorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Remote Job Zone",
      description: "A plattform for jobseekers who are actively looking for remote jobs.",
      skills: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      image: RemoteJobZone,
      github: "",
      live: "https://www.remotejobzone.online/",
      color: "from-blue-500 to-cyan-400"
    },

    {
      title: "Interview Scheduler (Ai Agent)",
      description: "A plattform for recruiters to manage the jobs, candidates and appointment on single dashboard.",
      skills: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
      image: InterviewSheduler,
      github: "https://github.com/tejasg910/ai-agent-frontend",
      live: "https://ai-agent-frontend-five.vercel.app",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with dynamic product filtering, cart functionality, and secure checkout process.",
      skills: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      image: Ecommerce,
      github: "https://github.com/tejasg910/ecommerce-micro",
      live: "",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Slack Clone",
      description: "Copy of slack, having almost all features including real time chats, file uploads, emoji reactions and much more.",
      skills: ["TypeScript", "React", "TailwindCSS",],
      image: Slack,
      github: "https://github.com/tejasg910/slack-clone",
      live: "",
      color: "from-pink-500 to-purple-500"
    },

  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Border animation variants
  const borderVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <section className="relative py-10 overflow-hidden" id="work">
      {/* Background gradients specific to this section */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[150px] z-0" />
      <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[120px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl my-8 font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pt-5 relative z-10 text-center"
        >
          My Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative rounded-xl overflow-hidden group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              {/* Project image with overlay */}
              <div className="h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project?.github && <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    <Github size={18} /> Code
                  </motion.a>}
                  {project.live && <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500/90 to-blue-500/90 hover:from-purple-600/90 hover:to-blue-600/90 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </motion.a>}
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl z-30 pointer-events-none">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    rx="5"
                    strokeWidth="0.5"
                    stroke={hoveredProject === index ? "url(#gradientStroke)" : "rgba(139, 92, 246, 0)"}
                    strokeLinecap="round"
                    initial={false}
                    animate={hoveredProject === index ? "animate" : "initial"}
                    variants={borderVariants}
                  />
                  <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Moving bottom stripe */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 z-30"
                initial={{ width: "0%" }}
                animate={hoveredProject === index ? { width: "100%", transition: { duration: 0.6, ease: "easeInOut" } } :
                  { width: "0%", transition: { duration: 0.6, ease: "easeInOut" } }}
              />

              {/* Always visible pulsing border that animates continuously */}
              <div className="absolute inset-0 rounded-xl overflow-hidden z-25 pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-purple-500/30"></div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20 rounded-xl blur-sm"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
const AboutSection = () => {
  // Text animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Skills animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skills = [
    { name: "React", icon: <Code size={18} /> },
    { name: "JavaScript", icon: <Code size={18} /> },
    { name: "TypeScript", icon: <Code size={18} /> },
    { name: "Node.js", icon: <Laptop size={18} /> },
    { name: "TailwindCSS", icon: <Code size={18} /> },
    { name: "Framer Motion", icon: <Code size={18} /> },
  ];

  // Split text for animation
  const passionText = "I'm passionate about creating intuitive, accessible, and beautiful web experiences that solve real problems.";
  const passionWords = passionText.split(' ');

  // Journey timeline animation variants
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const timelineItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };

  // Active state for about cards
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // About cards with matching style to hobbies
  const aboutCards = [
    {
      title: "Who I Am",
      description: "I'm a passionate Full STack Developer with a background in both design and development. I bridge the gap between visual aesthetics and functional implementation.",
      icon: <User size={24} />,
      color: "from-cyan-500 to-blue-400",
      passionWords: true
    },
    {
      title: "What I Do Now",
      description: "Currently, I'm working as a Full Stack Developer at a tech startup, focusing on building responsive web applications using modern JavaScript frameworks. I specialize in creating interactive UI components and implementing complex animations to enhance user experience.",
      icon: <Code size={24} />,
      color: "from-purple-500 to-pink-400"
    }
  ];

  // New section: Interests & Hobbies with interactive elements
  const [activeInterest, setActiveInterest] = useState<number | null>(null);

  const interests = [
    {
      title: "Tech Blogging",
      description: "Sharing insights, tutorials, and experiences through writing to help developers learn, grow, and stay updated with the latest in technology.",
      icon: <PenTool size={24} />,
      color: "from-purple-500 to-blue-400"

    },

    {
      title: "Reading",
      description: "Exploring new worlds and ideas through books, particularly in tech, science fiction, and philosophy.",
      icon: <Book size={24} />,
      color: "from-pink-500 to-purple-400"
    },
    {
      title: "Open Source",
      description: "Contributing to and maintaining open source projects that help developers build better web experiences.",
      icon: <Github size={24} />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "DevOps & Automation",
      description: "Streamlining development workflows through automation, CI/CD pipelines, and infrastructure management to accelerate software delivery.",
      icon: <Server size={24} />,
      color: "from-sky-500 to-indigo-400"
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden" id="about">
      {/* Background gradients specific to this section */}
      <div className="absolute top-0 right-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[150px] z-0" />
      <div className="absolute bottom-0 left-10 h-[250px] w-[250px] rounded-full bg-pink-600/20 blur-[130px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl my-8 font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pt-5 relative z-10 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* About cards with matching style to hobbies */}
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 h-full shadow-lg relative overflow-hidden group">
                {/* Background gradient */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-xl opacity-0 group-hover:opacity-20 blur-md`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 text-white`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {card.icon}
                  </motion.div>

                  <h4 className="text-xl font-semibold text-white mb-2">{card.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Passion words animation for the first card */}
                  {card.passionWords && (
                    <div className="mt-4">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap"
                      >
                        {passionWords.map((word, i) => (
                          <motion.span
                            key={i}
                            variants={wordVariants}
                            custom={i}
                            transition={{ delay: i * 0.05 }}
                            className="mr-1.5 inline-block text-purple-300 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform cursor-default"
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {/* Animated underline */}
                  <motion.div
                    className={`h-0.5 bg-gradient-to-r ${card.color} mt-4 origin-left`}
                    initial={{ scaleX: 0 }}
                    animate={activeCard === index ?
                      { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } } :
                      { scaleX: 0, transition: { duration: 0.4, ease: "easeIn" } }
                    }
                  />
                </div>

                {/* Particle effect */}
                {activeCard === index && (
                  <motion.div
                    className="absolute bottom-0 right-0 w-6 h-6 opacity-70"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.7, 0],
                      x: [0, -20, -40],
                      y: [0, -20, -40]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${card.color}`} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Right column with skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* ... keep existing code (Skills and Journey sections) */}
          </motion.div>
        </div>

        {/* New Section: Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center">
            Interests & Hobbies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveInterest(index)}
                onMouseLeave={() => setActiveInterest(null)}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 h-full shadow-lg relative overflow-hidden group">
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${interest.color} rounded-xl opacity-0 group-hover:opacity-20 blur-md`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 text-white`}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {interest.icon}
                    </motion.div>

                    <h4 className="text-xl font-semibold text-white mb-2">{interest.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {interest.description}
                    </p>

                    {/* Animated underline */}
                    <motion.div
                      className={`h-0.5 bg-gradient-to-r ${interest.color} mt-4 origin-left`}
                      initial={{ scaleX: 0 }}
                      animate={activeInterest === index ?
                        { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } } :
                        { scaleX: 0, transition: { duration: 0.4, ease: "easeIn" } }
                      }
                    />
                  </div>

                  {/* Particle effect */}
                  {activeInterest === index && (
                    <motion.div
                      className="absolute bottom-0 right-0 w-6 h-6 opacity-70"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.7, 0],
                        x: [0, -20, -40],
                        y: [0, -20, -40]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    >
                      <div className={`w-full h-full rounded-full bg-gradient-to-r ${interest.color}`} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;