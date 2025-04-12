import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2020 - 2023",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-left text-neutral-900 dark:text-white mb-2">Education</h3>
          <div className="mb-4">
            <p className="text-neutral-800 text-left dark:text-neutral-200 font-medium">Dr. Babasaheb Ambedkar Marathwada University</p>
            <p className="text-neutral-600 text-left dark:text-neutral-400 text-sm mb-2">Bachelor of Computer Science</p>
            <p className="text-neutral-600 text-left dark:text-neutral-400 text-sm italic">Ch. Sambhaji Nagar, Maharashtra</p>
          </div>
          
          <p className="text-neutral-700 text-left dark:text-neutral-300 text-sm font-medium mb-2">Relevant Coursework:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs">Data Structures</span>
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs">Algorithms</span>
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs">Web Development</span>
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs">Database Management</span>
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded text-xs">Software Engineering</span>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-neutral-800 text-left dark:text-neutral-200 font-medium mb-3">Skills Acquired During Education</h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">Problem-solving and analytical thinking</p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">Fundamentals of software design and architecture</p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">Database design and optimization techniques</p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">Collaborative project management and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-left text-neutral-900 dark:text-white mb-2">Inphynous Tech Solutions | Full Stack Developer</h3>
          <p className="text-neutral-600 text-left dark:text-neutral-300 text-sm font-medium italic mb-4">April 2023 - July 2023 | Remote</p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Engineered full-stack e-commerce platform using MERN stack</p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Designed and implemented RESTful APIs with Node.js and Express.js</p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Built responsive web interfaces using modern CSS frameworks</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 rounded text-xs">MongoDB</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 rounded text-xs">Express.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 rounded text-xs">React.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Node.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 rounded text-xs">Tailwind CSS</span>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-left text-neutral-900 dark:text-white mb-2">i-pangram | Full Stack Engineer</h3>
          <p className="text-neutral-600 text-left dark:text-neutral-300 text-sm font-medium italic mb-4">August 2023 - May 2025 | Remote</p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Led development of AR/VR platform with React.js, Three.js, and TypeScript, achieving <span className="font-semibold text-emerald-600 dark:text-emerald-400">92% performance improvement</span></p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Architected scalable frontend solutions using Next.js 13+, implementing SSR and ISR</p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Developed complex state management solutions, reducing code redundancy by <span className="font-semibold text-emerald-600 dark:text-emerald-400">40%</span></p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Implemented WebSocket protocols for real-time features and integrated third-party APIs</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">React.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Next.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">TypeScript</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Three.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Redux</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">WebSockets</span>
          </div>
        </div>
      ),
    },
 
 

  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
