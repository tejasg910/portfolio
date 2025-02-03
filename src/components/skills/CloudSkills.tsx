import { IconCloud } from "./Cloud";

const slugs = [
    "typescript",
    "javascript",
   
    "react",
    
    "android",
    "html5",
    "css3",
    
    "express",
    
    
   
    "firebase",
   
    "vercel",
    
    "mongodb",
    "docker",
    "git",
  
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",

];

export function SkillIconsCloud() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative mx-auto flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background">
            <IconCloud images={images} />
        </div>
    );
}
