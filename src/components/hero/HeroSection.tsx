import Design from "../Design"
import { FadeText } from "../Fade"
import BoxReveal from "../Reveal"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0D]">
              <div className="w-full h-screen absolute top-0 left-0">
        <Design />
        </div>
{/* Gradient overlays */}
<div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-600/30 blur-[120px]" />
<div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/30 blur-[120px]" />

{/* Particles */}


{/* Content */}
<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
  
<BoxReveal boxColor={"#5046e6"} duration={0.5}>
  
    
<h1 className="mb-4 text-5xl md:text-8xl font-bold text-white">
I'm Tejas
</h1>
</BoxReveal>

<FadeText
        className="mb-6 text-5xl md:text-8xl font-bold text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Software Engineer"
      />
  <p className="mt-5 text-2xl text-gray-300 font-bold">
    A self-taught developer with an interest in Computer Science.
  </p>
  <div className="mt-5">
    <p className="text-xl text-gray-300 leading-10">
      Currently specializing in{' '}
      <span className="rounded-full bg-yellow-500 px-4 py-1 ">Frontend</span>{' '}
      <span className="rounded-full bg-purple-500 px-4 py-1 ">Backend</span>{' '}
      and{' '}
      <span className="rounded-full bg-blue-500 px-4 py-1 ">Mobile</span>
    </p>
    <p className="mt-2 text-gray-300">SDE-I at Ipangram</p>
  </div>

</div>

</div>
  )
}

export default HeroSection