import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setInit(true));
    }, []);

    if (!init) return null;

    return (
        <>
            {/* Nebula Layer */}
            <Particles
                id="nebula"
                className="absolute inset-0 -z-20"
                options={{
                    background: { color: { value: "#0d0d0d" } },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 50, density: { enable: true, area: 1200 } },
                        color: {
                            value: ["#a855f7", "#ff6699", "#66ccff", "#facc15"],
                            animation: { enable: true, speed: 20, sync: false },
                        },
                        opacity: { value: 0.2, random: true, animation: { enable: true, speed: 0.5 } },
                        size: { value: { min: 15, max: 50 }, random: true },
                        move: {
                            enable: true,
                            speed: 0.3,
                            random: true,
                            direction: "none",
                            straight: false,
                            outModes: { default: "out" },
                        },
                        links: { enable: false },
                    },
                    detectRetina: true,
                }}
            />

            {/* Star Layer */}
            <Particles
                id="stars"
                className="absolute inset-0 -z-10"
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 400, density: { enable: true, area: 1200 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: {
                            value: 0.8,
                            random: { enable: true, minimumValue: 0.1 },
                            animation: { enable: true, speed: 1.5, minimumValue: 0.1, sync: false },
                        },
                        size: {
                            value: { min: 0.2, max: 2 },
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                            random: true,
                            straight: false,
                            outModes: { default: "out" },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    );
}
