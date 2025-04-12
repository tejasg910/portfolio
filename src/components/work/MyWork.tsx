
import { StickyScrollRevealDemo } from './AboutMeCard';
const MyWorkSection = () => {



  return (
<div className="min-h-screen bg-[#0A0A0F] relative  overflow-hidden">      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />
      <div   >
      <h2 className="text-5xl my-8 font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pt-5">
          My Work
          </h2>
      <StickyScrollRevealDemo  />
      </div>


      {/* <CardSpotlightDemo /> */}

    
    </div>
  );
};

export default MyWorkSection;