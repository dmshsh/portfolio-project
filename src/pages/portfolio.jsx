import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export default function Portfolio() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  return (  
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#000000" },
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          move: { enable: true, speed: 0.5 },
          links: { enable: true, distance: 120, color: "#ffffff" },
        },
      }}
    />
    <div class="flex items-center justify-center min-h-screen bg-black text-white">
            <p className="md:text-9xl font-serif font-my-font text-sm sm:text-base ">ЛЮБЛЮ КАМИЛУ</p>
    </div>
    </>
  );
}
