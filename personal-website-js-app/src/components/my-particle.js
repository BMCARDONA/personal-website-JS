
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './my-particle.css'


export default function MyParticle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      // For more on particle options, see: https://github.com/VincentGarreau/particles.js/
      className = "myParticle"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#f0f0f0",
            // value: "#202020"
          },
        },
        fpsLimit: 200,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: "#222222",
            value: '#775FE5'
          },
          links: {
            // color: "#222222",
            color: "#775FE5",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      >
    </Particles>
  )
}