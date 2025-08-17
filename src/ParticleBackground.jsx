import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // load full engine

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine); // load everything
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null; // wait until particles are ready
    }

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: { value: "#0d0d0d" },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: ["#ffffff", "#ffcc00", "#66ccff", "#ff6699"] },
                    links: {
                        enable: true,
                        color: "#ffffff",
                        distance: 150,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    number: { value: 80, density: { enable: true, area: 800 } },
                    opacity: { value: 0.8 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
            }}
        />
    );
}
